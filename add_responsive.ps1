$files = Get-ChildItem -Path "." -Filter "*.html"
foreach ($f in $files) {
    $c = Get-Content $f.FullName -Raw -Encoding UTF8
    if ($c -notmatch "responsive\.css") {
        $link = '  <link rel="stylesheet" href="assets/css/responsive.css" />'
        $c = $c -replace "</head>", "$link`n</head>"
        Set-Content -Path $f.FullName -Value $c -Encoding UTF8 -NoNewline
        Write-Host "Updated: $($f.Name)"
    } else {
        Write-Host "Skip: $($f.Name)"
    }
}
