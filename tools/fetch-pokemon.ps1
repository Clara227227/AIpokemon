# Pokémon Champions - PokeAPI Scraper in PowerShell (Clean Encoding Version)
# Run this script from the project root directory: powershell -ExecutionPolicy Bypass -File tools/fetch-pokemon.ps1

$pokemonList = Get-Content "tools/pokemon_roster.json" -Raw | ConvertFrom-Json

$moveCache = @{} # Cache for Japanese move names: URL -> Japanese Name

# Unicode escaped variables to prevent Shift-JIS mojibake in script file
$jp_mega = "$([char]0x30e1)$([char]0x30ac)" # メガ
$jp_alola = "$([char]0x0028)$([char]0x30a2)$([char]0x30ed)$([char]0x30fc)$([char]0x30e9)$([char]0x0029)" # (アローラ)
$jp_hisui = "$([char]0x0028)$([char]0x30d2)$([char]0x30b9)$([char]0x30a4)$([char]0x0029)" # (ヒスイ)
$jp_galar = "$([char]0x0028)$([char]0x30ac)$([char]0x30e9)$([char]0x30eb)$([char]0x0029)" # (ガラル)
$jp_paldea_fire = "$([char]0x0028)$([char]0x30d1)$([char]0x30eb)$([char]0x30c7)$([char]0x30a2)$([char]0x30fb)$([char]0x307b)$([char]0x306e)$([char]0x304a)$([char]0x0029)" # (パルデア・ほのお)
$jp_paldea_water = "$([char]0x0028)$([char]0x30d1)$([char]0x30eb)$([char]0x30c7)$([char]0x30a2)$([char]0x30fb)$([char]0x307f)$([char]0x305a)$([char]0x0029)" # (パルデア・みず)
$jp_paldea = "$([char]0x0028)$([char]0x30d1)$([char]0x30eb)$([char]0x30c7)$([char]0x30a2)$([char]0x0029)" # (パルデア)

$jp_role_phy_atk = "$([char]0x7269)$([char]0x7406)$([char]0x30a2)$([char]0x30bf)$([char]0x30c3)$([char]0x30ab)$([char]0x30fc)" # 物理アタッカー
$jp_role_sp_atk = "$([char]0x7279)$([char]0x6b8a)$([char]0x30a2)$([char]0x30bf)$([char]0x30c3)$([char]0x30ab)$([char]0x30fc)" # 特殊アタッカー
$jp_role_phy_def = "$([char]0x7269)$([char]0x7406)$([char]0x30c7)$([char]0x30a3)$([char]0x30d5)$([char]0x30a7)$([char]0x30f3)$([char]0x30c0)$([char]0x30fc)" # 物理ディフェンダー
$jp_role_sp_def = "$([char]0x7279)$([char]0x6b8a)$([char]0x30c7)$([char]0x30a3)$([char]0x30d5)$([char]0x30a7)$([char]0x30f3)$([char]0x30c0)$([char]0x30fc)" # 特殊ディフェンダー

function Get-PokeApiName($name, $types, $isMega) {
    $n = $name.ToLower().Trim().Replace(' ', '-').Replace('.', '')
    
    if ($isMega) {
        if ($n.StartsWith('mega-')) {
            $n = $n.Substring(5)
        }
        if ($n -eq 'charizard-x') { return 'charizard-mega-x' }
        if ($n -eq 'charizard-y') { return 'charizard-mega-y' }
        return "$n-mega"
    }

    if ($n -eq 'raichu' -and ($types -contains 'psychic')) { return 'raichu-alola' }
    if ($n -eq 'ninetales' -and ($types -contains 'ice')) { return 'ninetales-alola' }
    if ($n -eq 'arcanine' -and ($types -contains 'rock')) { return 'arcanine-hisui' }
    if ($n -eq 'slowbro' -and ($types -contains 'poison')) { return 'slowbro-galar' }
    if ($n -eq 'slowking' -and ($types -contains 'poison')) { return 'slowking-galar' }
    if ($n -eq 'samurott' -and ($types -contains 'dark')) { return 'samurott-hisui' }
    if ($n -eq 'zoroark' -and ($types -contains 'ghost')) { return 'zoroark-hisui' }
    if ($n -eq 'stunfisk' -and ($types -contains 'steel')) { return 'stunfisk-galar' }
    if ($n -eq 'goodra' -and ($types -contains 'steel')) { return 'goodra-hisui' }
    if ($n -eq 'avalugg' -and ($types -contains 'rock')) { return 'avalugg-hisui' }
    if ($n -eq 'decidueye' -and ($types -contains 'fighting')) { return 'decidueye-hisui' }
    if ($n -eq 'tauros') {
        if ($types.Count -eq 1 -and $types[0] -eq 'fighting') { return 'tauros-paldea-combat-breed' }
        if ($types -contains 'fire') { return 'tauros-paldea-blaze-breed' }
        if ($types -contains 'water') { return 'tauros-paldea-aqua-breed' }
    }
    
    if ($n -eq 'mr-rime') { return 'mr-rime' }
    if ($n -eq 'basculegion') { return 'basculegion-male' }
    if ($n -eq 'overqwil') { return 'overqwil' }
    if ($n -eq 'sneasler') { return 'sneasler' }
    if ($n -eq 'wyrdeer') { return 'wyrdeer' }
    if ($n -eq 'kleavor') { return 'kleavor' }
    
    return $n
}

function Fetch-MoveName($url) {
    if ($moveCache.ContainsKey($url)) {
        return $moveCache[$url]
    }
    try {
        $res = Invoke-RestMethod -Uri $url -Method Get -TimeoutSec 5
        $jaNameObj = $res.names | Where-Object { $_.language.name -eq 'ja' } | Select-Object -First 1
        if ($jaNameObj) {
            $moveCache[$url] = $jaNameObj.name
            return $jaNameObj.name
        }
    } catch {
        # ignore
    }
    return $null
}

$results = @()
$count = 0

foreach ($item in $pokemonList) {
    $count++
    $isMega = $item.isMega -eq $true
    $apiName = Get-PokeApiName $item.name $item.types $isMega
    
    Write-Host "[$count/$($pokemonList.Count)] Fetching $($item.name) ($apiName)..."
    
    $data = $null
    try {
        $data = Invoke-RestMethod -Uri "https://pokeapi.co/api/v2/pokemon/$apiName" -Method Get -TimeoutSec 5
    } catch {
        Write-Warning "Error fetching $apiName. Trying fallback..."
        if ($isMega) {
            try {
                $baseName = $item.name.Replace('Mega ', '').ToLower()
                $data = Invoke-RestMethod -Uri "https://pokeapi.co/api/v2/pokemon/$baseName" -Method Get -TimeoutSec 5
            } catch {
                # ignore
            }
        }
    }
    
    if ($null -eq $data) {
        Write-Error "Could not retrieve data for $($item.name). Skipping."
        continue
    }
    
    # Fetch species for Japanese name
    $jaName = $item.name
    try {
        $species = Invoke-RestMethod -Uri $data.species.url -Method Get -TimeoutSec 5
        $jaNameObj = $species.names | Where-Object { $_.language.name -eq 'ja' } | Select-Object -First 1
        if ($jaNameObj) {
            $jaName = $jaNameObj.name
        }
    } catch {
        # ignore
    }
    
    # Suffixes mapping for Japanese names
    if ($isMega) {
        if ($item.name -like "*Charizard X*") {
            $jaName = "$($jp_mega)$([char]0x30ea)$([char]0x30b6)$([char]0x30fc)$([char]0x30c9)$([char]0x30f3)X" # メガリザードンX
        } elseif ($item.name -like "*Charizard Y*") {
            $jaName = "$($jp_mega)$([char]0x30ea)$([char]0x30b6)$([char]0x30fc)$([char]0x30c9)$([char]0x30f3)Y" # メガリザードンY
        } else {
            $jaName = $jp_mega + $jaName
        }
    } else {
        if ($apiName -like "*-alola") { $jaName += $jp_alola }
        elseif ($apiName -like "*-hisui") { $jaName += $jp_hisui }
        elseif ($apiName -like "*-galar") { $jaName += $jp_galar }
        elseif ($apiName -like "*paldea*") {
            if ($apiName -like "*-blaze*") { $jaName += $jp_paldea_fire }
            elseif ($apiName -like "*-aqua*") { $jaName += $jp_paldea_water }
            else { $jaName += $jp_paldea }
        }
    }
    
    # Extract stats [hp, atk, def, spatk, spdef, spd]
    $stats = @(0, 0, 0, 0, 0, 0)
    foreach ($s in $data.stats) {
        switch ($s.stat.name) {
            "hp" { $stats[0] = $s.base_stat }
            "attack" { $stats[1] = $s.base_stat }
            "defense" { $stats[2] = $s.base_stat }
            "special-attack" { $stats[3] = $s.base_stat }
            "special-defense" { $stats[4] = $s.base_stat }
            "speed" { $stats[5] = $s.base_stat }
        }
    }
    
    # Handle fallback mega stats boost (+100 standard mega boost)
    if ($isMega -and -not ($apiName -like "*-mega") -and $data.name -eq $apiName.Replace('-mega', '')) {
        $stats[1] += 30 # Atk
        $stats[2] += 20 # Def
        $stats[3] += 30 # SpA
        $stats[4] += 10 # SpD
        $stats[5] += 10 # Spe
    }
    
    # Fetch moves (limit to first 4 moves for speed and safety)
    $moves = @()
    $moveUrls = $data.moves | Select-Object -First 4
    foreach ($m in $moveUrls) {
        $jaMoveName = Fetch-MoveName $m.move.url
        if ($jaMoveName) {
            $moves += $jaMoveName
        }
    }
    
    # Determine role
    $role = $jp_role_phy_atk
    $hp = $stats[0]; $atk = $stats[1]; $def = $stats[2]; $spatk = $stats[3]; $spdef = $stats[4]
    if ($def -gt 105 -or $spdef -gt 105 -or ($hp -gt 100 -and ($def -gt 90 -or $spdef -gt 90))) {
        if ($def -ge $spdef) { $role = $jp_role_phy_def } else { $role = $jp_role_sp_def }
    } elseif ($spatk -gt $atk) {
        $role = $jp_role_sp_atk
    }
    
    $results += [PSCustomObject]@{
        id = $data.id
        name = $jaName
        types = @($data.types.type.name)
        stats = $stats
        moves = $moves
        role = $role
        isMega = $isMega
    }
    
    Start-Sleep -Milliseconds 50 # Be nice to PokeAPI
}

# Load static boilerplates from UTF-8 files
$typeBoilerplate = [System.IO.File]::ReadAllText("tools/type_boilerplate.js", [System.Text.Encoding]::UTF8)
$virtualEnemiesJson = [System.IO.File]::ReadAllText("tools/virtual_enemies.json", [System.Text.Encoding]::UTF8)

# Convert results to JSON
$jsonString = $results | ConvertTo-Json -Depth 5

$outputContent = "$($typeBoilerplate)

export const INITIAL_POKEMON_DATABASE = $($jsonString);

export const INITIAL_VIRTUAL_ENEMIES = $($virtualEnemiesJson);
"

# Write out file using System.IO.File to ensure clean UTF-8 encoding
$outputPath = Join-Path (Get-Location) "js/data/initial-pokemon.js"
[System.IO.File]::WriteAllText($outputPath, $outputContent, [System.Text.Encoding]::UTF8)

Write-Host "Scraping completed and saved successfully!"
