# Showcase Paymiz

מצגת משקיעים ל־**Peymiz** — אתר סטטי בעברית (RTL).

## צפייה באתר (GitHub Pages)

**הקישור הנכון למצגת:**

**https://espressomusic.github.io/Showcase-Paymiz/peymiz-pitch/**

דף השורש של המאגר מפנה אוטומטית לתיקייה `peymiz-pitch/`.

## הרצה מקומית

```bash
cd peymiz-pitch
npm run dev
```

ואז בדפדפן: http://localhost:3456

## מבנה הפרויקט

| תיקייה | תוכן |
|--------|------|
| `peymiz-pitch/` | **מצגת Peymiz** (האתר הראשי) |
| `pitch-app/` | גרסת Next.js (אופציונלי) |
| `coffee-ref/` | רפרנס עיצוב COFFEE |
| `index.html` (שורש) | הפניה ל־`peymiz-pitch/` |

## הערה

בשורש המאגר היה בעבר אתר אחר («סטורמאסטר»). הוא הוסר מהדף הראשי; הקבצים הישנים (`styles.css`, `script.js` בשורש) נשארו רק כארכיון — **אל תפתחו את שורש ה־Pages בלי `/peymiz-pitch/`**.
