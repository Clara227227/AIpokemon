# Fix types format in initial-pokemon.js to ensure types is always an array of strings
$filePath = "js/data/initial-pokemon.js"
$content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)

$startMarker = "export const INITIAL_POKEMON_DATABASE = "
$startIndex = $content.IndexOf($startMarker) + $startMarker.Length
$endIndex = $content.IndexOf("export const INITIAL_VIRTUAL_ENEMIES")
$jsonBlock = $content.Substring($startIndex, $endIndex - $startIndex).Trim()

if ($jsonBlock.EndsWith(";")) {
    $jsonBlock = $jsonBlock.Substring(0, $jsonBlock.Length - 1).Trim()
}

$db = ConvertFrom-Json $jsonBlock

foreach ($p in $db) {
    if ($p.types -is [string]) {
        $p.types = @($p.types)
    }
}

$newJson = $db | ConvertTo-Json -Depth 5

$typeBoilerplate = [System.IO.File]::ReadAllText("tools/type_boilerplate.js", [System.Text.Encoding]::UTF8)
$virtualEnemiesJson = [System.IO.File]::ReadAllText("tools/virtual_enemies.json", [System.Text.Encoding]::UTF8)

$outputContent = "$($typeBoilerplate)

export const INITIAL_POKEMON_DATABASE = $($newJson);

export const INITIAL_VIRTUAL_ENEMIES = $($virtualEnemiesJson);
"

[System.IO.File]::WriteAllText($filePath, $outputContent, [System.Text.Encoding]::UTF8)
Write-Host "initial-pokemon.js types fixed successfully!"
