# Download all images for the Brew Haven coffee website
$images = @{
    # About section
    "about-1.jpg" = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
    "about-2.jpg" = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80"
    "about-3.jpg" = "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=700&q=80"

    # Menu - Hot
    "espresso.jpg" = "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=700&q=80"
    "cappuccino.jpg" = "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=700&q=80"
    "flatwhite.jpg" = "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=700&q=80"

    # Menu - Cold
    "icedmocha.jpg" = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
    "tonic.jpg" = "https://images.unsplash.com/photo-1517959105821-eaf2591984dc?auto=format&fit=crop&w=700&q=80"
    "frozen.jpg" = "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"

    # Menu - Dessert
    "affogato.jpg" = "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80"
    "tiramisu.jpg" = "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=700&q=80"
    "chocolava.jpg" = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"

    # Menu - Snack
    "croissant.jpg" = "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80"
    "avotoast.jpg" = "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80"
    "cookie.jpg" = "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80"

    # Gallery
    "gallery-1.jpg" = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80"
    "gallery-2.jpg" = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
    "gallery-3.jpg" = "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=900&q=80"
    "gallery-4.jpg" = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
    "gallery-5.jpg" = "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=80"
    "gallery-6.jpg" = "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80"
}

$total = $images.Count
$current = 0
$failed = @()

foreach ($img in $images.GetEnumerator()) {
    $current++
    $filePath = "images\$($img.Key)"
    Write-Host "[$current/$total] Downloading $($img.Key)..." -ForegroundColor Cyan
    try {
        Invoke-WebRequest -Uri $img.Value -OutFile $filePath -UseBasicParsing -ErrorAction Stop
        $size = (Get-Item $filePath).Length / 1KB
        Write-Host "  Done: $([Math]::Round($size, 1)) KB" -ForegroundColor Green
    }
    catch {
        Write-Host "  FAILED: $_" -ForegroundColor Red
        $failed += $img.Key
    }
}

Write-Host "`n=== Summary ===" -ForegroundColor Yellow
Write-Host "Total: $total" -ForegroundColor White
Write-Host "Success: $($total - $failed.Count)" -ForegroundColor Green
if ($failed.Count -gt 0) {
    Write-Host "Failed: $($failed.Count) - $($failed -join ', ')" -ForegroundColor Red
}
