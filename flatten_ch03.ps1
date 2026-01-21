$file = "source\ch03-two-numerical-variables.ptx"
$content = Get-Content $file -Raw

# Remove parent section wrappers while keeping child sections
# Pattern: Find parent sections that have "Scatterplots", "Understanding Relationships", etc as titles
$patterns = @(
    "  <!-- Section 1: Scatterplots -->`n  <section xml:id=`"sec-scatterplots`">`n    <title>Scatterplots</title>`n`n",
    "  <!-- Section 2: Understanding Relationships -->`n  <section xml:id=`"sec-understanding-relationships`">`n    <title>Understanding Relationships</title>`n`n",
    "  <introduction>`n      <p>`n        This section describes a numerical summary of the strength of the relationship between two variables, <m>X</m> and <m>Y</m>.`n      </p>`n    </introduction>`n`n",
    "  <!-- Section 3: Correlation -->`n  <section xml:id=`"sec-correlation`">`n    <title>Correlation</title>",
    "  <!-- Section 4: Least Squares -->`n  <section xml:id=`"sec-least-squares`">`n    <title>Least Squares</title>`n`n",
    "  <!-- Section 5: Nonlinear Relationships -->`n  <section xml:id=`"sec-nonlinear-relationships`">`n    <title>Nonlinear Relationships</title>`n`n"
)

foreach ($pattern in $patterns) {
    $content = $content -replace [regex]::Escape($pattern), ""
}

# Remove closing tags for these parent sections (but not the child sections)
# We'll do this carefully by counting
$lines = $content -split "`n"
$newLines = @()
$sectionStack = @()
$parentIds = @("sec-scatterplots", "sec-understanding-relationships", "sec-correlation", "sec-least-squares", "sec-nonlinear-relationships")

for ($i = 0; $i -lt $lines.Count; $i++) {
    $line = $lines[$i]
    
    if ($line -match '<section xml:id="([^"]+)">') {
        $sectionStack += $matches[1]
        $newLines += $line
    }
    elseif ($line -match '</section>' -and $sectionStack.Count -gt 0) {
        $topId = $sectionStack[-1]
        $sectionStack = $sectionStack[0..($sectionStack.Count-2)]
        
        # Only add the closing tag if it's not a parent section
        if ($topId -notin $parentIds) {
            $newLines += $line
        }
    }
    else {
        $newLines += $line
    }
}

# Fix indentation - move everything at 4-space indent to 2-space
$result = ($newLines | ForEach-Object {
    if ($_ -match '^      ') {
        $_ -replace '^      ', '    '
    }
    elseif ($_ -match '^    <section') {
        $_ -replace '^    <section', '  <section'
    }
    elseif ($_ -match '^    </section') {
        $_ -replace '^    </section', '  </section'
    }
    else {
        $_
    }
}) -join "`n"

$result | Set-Content $file

Write-Host "Flattened ch03"
