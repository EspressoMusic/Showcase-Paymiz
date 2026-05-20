import { getPanelIcon } from "@/lib/panelIcons";
import { SectionId } from "@/lib/sections";
import { LucideIcon } from "lucide-react";

export type PanelCard = {
  title: string;
  description: string;
  iconName?: string;
  icon?: LucideIcon;
};

export type PanelData = {
  id: SectionId;
  number: number;
  navLabel: string;
  headline: string;
  body: string;
  cards: PanelCard[];
  variant?: "default" | "dark" | "accent";
  columns?: 2 | 3 | 4;
  index: number;
};

function withIcons(cards: PanelCard[]): PanelCard[] {
  return cards.map((c) => ({ ...c, icon: getPanelIcon(c.iconName) }));
}

const rawPanels: Omit<PanelData, "index">[] = [
  {
    id: "opening",
    number: 1,
    navLabel: "פתיחה",
    headline: "אפליקציה פשוטה שעוזרת לעסק קטן להיראות מקצועי ולנהל הכול במקום אחד.",
    body: "Bizmi היא פלטפורמה לעסקים קטנים. במקום שהעסק יקבל הזמנות, תורים ופניות דרך וואטסאפ, טלפונים ופתקים — הכול נכנס למערכת אחת פשוטה.\n\nבעל העסק מקבל עמוד דיגיטלי משלו, קישור ללקוחות, ודשבורד ניהול ברור. הלקוח נכנס לקישור, רואה את העסק, ומבצע פעולה: מזמין מוצר, קובע תור או שולח פנייה.",
    cards: withIcons([
      { title: "קישור אחד לעסק", description: "כל עסק מקבל קישור משלו שאפשר לשלוח ללקוחות.", iconName: "Link2" },
      { title: "דשבורד אחד למנהל", description: "בעל העסק רואה הזמנות, תורים, לקוחות ופניות במקום אחד.", iconName: "LayoutDashboard" },
      { title: "פשוט להבנה", description: "המטרה היא שבעל עסק יבין את המערכת תוך פחות מ־20 שניות.", iconName: "Timer" },
    ]),
    columns: 3,
  },
  {
    id: "problem",
    number: 2,
    navLabel: "בעיה",
    headline: "עסקים קטנים עובדים קשה, אבל הרבה פעמים הכול מתנהל בבלאגן.",
    body: "הרבה עסקים קטנים מנהלים את העסק דרך הודעות וואטסאפ, שיחות טלפון, פתקים ואקסלים. זה עובד בהתחלה, אבל מהר מאוד זה נהיה מבולגן.\n\nלקוח אחד מזמין בהודעה, לקוח אחר מתקשר, לקוח שלישי מבקש תור, ובעל העסק צריך לזכור הכול לבד. ככה הזמנות מתפספסות, לקוחות מחכים, ותורים מתבלבלים.",
    cards: withIcons([
      { title: "הזמנות הולכות לאיבוד", description: "כשכל הזמנה מגיעה ממקום אחר, קל לשכוח או לפספס.", iconName: "Package" },
      { title: "לקוחות מחכים לתשובה", description: "בעל העסק עסוק ולא תמיד מספיק לענות בזמן.", iconName: "MessageCircle" },
      { title: "אין תמונה ברורה", description: "קשה לדעת כמה הזמנות נכנסו, מי מחכה, ומה כבר טופל.", iconName: "Eye" },
      { title: "העסק נראה פחות מקצועי", description: "גם עסק טוב יכול להיראות לא מסודר אם אין לו מערכת ברורה.", iconName: "Store" },
    ]),
    columns: 2,
  },
  {
    id: "solution",
    number: 3,
    navLabel: "פתרון",
    headline: "Bizmi מסדרת לעסק את כל הלקוחות, ההזמנות והתורים במקום אחד.",
    body: "Bizmi נותנת לעסק קטן מערכת מוכנה. בעל העסק פותח עסק באפליקציה, מקבל קישור, ושולח אותו ללקוחות.\n\nהלקוחות נכנסים לקישור ורואים עמוד פשוט של העסק. אם זה עסק שמוכר מוצרים — הם יכולים להזמין. אם זה עסק שעובד לפי תורים — הם יכולים לקבוע תור.\n\nבעל העסק רואה הכול בדשבורד אחד ברור.",
    cards: withIcons([
      { title: "לקוחות נכנסים לבד", description: "לא צריך להסביר לכל לקוח הכול מחדש. שולחים קישור.", iconName: "Link2" },
      { title: "הזמנות נכנסות מסודר", description: "כל הזמנה נשמרת במקום אחד.", iconName: "Package" },
      { title: "תורים מוצגים בצורה ברורה", description: "שעות פנויות ותפוסות מוצגות בצורה פשוטה.", iconName: "Calendar" },
      { title: "פחות טלפונים, פחות בלגן", description: "הלקוח עושה פעולה לבד, ובעל העסק מקבל סדר.", iconName: "Smartphone" },
    ]),
    columns: 2,
  },
  {
    id: "simplicity",
    number: 4,
    navLabel: "פשטות",
    headline: "הערך הגדול של Bizmi הוא לא רק מה שהיא עושה — אלא כמה קל להשתמש בה.",
    body: "הרבה מערכות לעסקים קטנים מרגישות כבדות מדי. יש יותר מדי כפתורים, יותר מדי הגדרות, ויותר מדי דברים ללמוד.\n\nBizmi נבנית הפוך: כמה שפחות עומס, כמה שיותר ברור. בעל העסק צריך להבין מהר איפה ההזמנות, איפה התורים, איפה הלקוחות, ואיך שולחים קישור.",
    cards: withIcons([
      { title: "בלי קורס", description: "לא צריך ללמוד מערכת מסובכת.", iconName: "Zap" },
      { title: "בלי עומס במסך", description: "רק הדברים שבעל העסק באמת צריך.", iconName: "Eye" },
      { title: "הבנה מהירה", description: "המטרה: להבין את המערכת בפחות מ־20 שניות.", iconName: "Timer" },
      { title: "מתאים גם למי שלא טכנולוגי", description: "עסק קטן לא צריך להיות מומחה מחשבים כדי להשתמש בזה.", iconName: "Users" },
    ]),
    columns: 2,
    variant: "accent",
  },
  {
    id: "how-it-works",
    number: 5,
    navLabel: "איך זה עובד",
    headline: "פותחים עסק, מקבלים קישור, ומתחילים לקבל לקוחות.",
    body: "המערכת עובדת בצורה פשוטה מאוד.\n\nבעל העסק נכנס לאפליקציה, פותח עסק, בוחר שם ולינק, ומחליט איזה סוג עמוד הלקוחות יראו: חנות מוצרים או קביעת תורים.\n\nאחרי זה הוא שולח את הקישור ללקוחות. כל לקוח שנכנס לקישור רואה את העסק ומבצע פעולה.",
    cards: withIcons([
      { title: "שלב 1 — פתיחת עסק", description: "בעל העסק יוצר עסק עם שם ולינק.", iconName: "Store" },
      { title: "שלב 2 — בחירת סוג עסק", description: "חנות מוצרים או מערכת תורים.", iconName: "Layers" },
      { title: "שלב 3 — שליחת קישור", description: "הקישור נשלח בוואטסאפ, אינסטגרם או כל מקום אחר.", iconName: "Link2" },
      { title: "שלב 4 — ניהול בדשבורד", description: "כל פעולה של לקוח נכנסת למנהל בצורה מסודרת.", iconName: "LayoutDashboard" },
    ]),
    columns: 2,
  },
  {
    id: "business-modes",
    number: 6,
    navLabel: "מצבי עסק",
    headline: "אותה מערכת יכולה להתאים גם לעסק שמוכר מוצרים וגם לעסק שקובע תורים.",
    body: "לא כל עסק עובד אותו דבר. מאפייה ביתית צריכה לקבל הזמנות. מספרה צריכה לקבוע תורים. לכן Bizmi מאפשרת לבעל העסק לבחור איזה פאנל יוצג ללקוחות.\n\nברירת המחדל היא חנות מוצרים. אם העסק עובד לפי תורים, המנהל יכול להחליף למצב קביעת תורים.",
    cards: withIcons([
      { title: "חנות מוצרים", description: "מתאים למאפיות, בגדים, מתנות, אוכל ביתי וחנויות קטנות.", iconName: "ShoppingBag" },
      { title: "קביעת תורים", description: "מתאים למספרות, ייעוץ, שיעורים, טיפולים ונותני שירות.", iconName: "Calendar" },
      { title: "בחירה של המנהל", description: "בעל העסק בוחר איזה סוג עמוד הלקוחות יראו.", iconName: "UserCog" },
      { title: "מערכת אחת, שימושים שונים", description: "לא צריך לבנות מוצר נפרד לכל סוג עסק.", iconName: "Layers" },
    ]),
    columns: 2,
  },
  {
    id: "customer",
    number: 7,
    navLabel: "לקוח",
    headline: "הלקוח לא צריך להבין מערכת — הוא פשוט נכנס ועושה פעולה.",
    body: "החוויה של הלקוח צריכה להיות הכי פשוטה שיש. הוא מקבל קישור, פותח אותו, ורואה מה העסק מציע.\n\nאם זו חנות מוצרים, הוא רואה מוצרים ומבצע הזמנה. אם זה עסק של תורים, הוא רואה לוח תורים, בוחר שעה פנויה, וקובע תור.",
    cards: withIcons([
      { title: "בלי הוראות מסובכות", description: "הלקוח מבין לבד מה לעשות.", iconName: "Sparkles" },
      { title: "מוצרים בצורה ברורה", description: "שם, מחיר, תמונה וכפתור הזמנה.", iconName: "ShoppingBag" },
      { title: "תורים בצורה ברורה", description: "שעות פנויות ותפוסות מוצגות בצורה נקייה.", iconName: "Calendar" },
      { title: "פחות שיחות מיותרות", description: "הלקוח יכול לבצע פעולה בלי להתכתב הרבה עם העסק.", iconName: "MessageCircle" },
    ]),
    columns: 2,
  },
  {
    id: "owner",
    number: 8,
    navLabel: "מנהל",
    headline: "בעל העסק רואה את כל מה שקורה בעסק מתוך דשבורד אחד פשוט.",
    body: "בצד המנהל, בעל העסק מקבל מקום אחד שמרכז את כל הפעילות. הוא יכול לראות הזמנות, תורים, לקוחות, פניות, מוצרים, סטטוסים וסיכומים.\n\nבמקום לחפש הודעות בכל מיני מקומות, הכול נמצא מולו בצורה מסודרת.",
    cards: withIcons([
      { title: "הזמנות חדשות", description: "בעל העסק רואה מי הזמין ומה צריך להכין.", iconName: "Package" },
      { title: "תורים קרובים", description: "אפשר לראות מי מגיע ומתי.", iconName: "Calendar" },
      { title: "פניות לקוחות", description: "הודעות ושאלות נכנסות למקום מסודר.", iconName: "MessageCircle" },
      { title: "קישור לשיתוף", description: "בעל העסק יכול להעתיק ולשלוח את הקישור שלו בקלות.", iconName: "Link2" },
    ]),
    columns: 2,
  },
  {
    id: "vs-custom-app",
    number: 9,
    navLabel: "מול אפליקציה",
    headline: "עסק קטן לא צריך לשלם עשרות אלפי שקלים כדי להיראות מקצועי.",
    body: "אפליקציה אישית לעסק יכולה לעלות הרבה כסף, לקחת הרבה זמן, ולדרוש תחזוקה שוטפת. לרוב העסקים הקטנים זה פשוט כבד מדי.\n\nBizmi נותנת תחושה של אפליקציה אישית, אבל בלי פיתוח אישי יקר. העסק משלם מנוי חודשי ויכול להשתמש במערכת מוכנה.",
    cards: withIcons([
      { title: "בלי עלות פיתוח גבוהה", description: "לא צריך לשלם 20–30 אלף ש״ח על אפליקציה אישית.", iconName: "Wallet" },
      { title: "בלי תחזוקה מסובכת", description: "המערכת מתעדכנת במקום אחד.", iconName: "RefreshCw" },
      { title: "בלי התחייבות כבדה", description: "אם העסק מפסיק להשתמש — אפשר לעצור מנוי.", iconName: "Ban" },
      { title: "נראה מקצועי מהר", description: "העסק מקבל קישור ועמוד מסודר בלי לבנות הכול מאפס.", iconName: "Rocket" },
    ]),
    columns: 2,
  },
  {
    id: "differentiation",
    number: 10,
    navLabel: "בידול",
    headline: "Bizmi לא מנסה להיות המערכת הכי גדולה — היא רוצה להיות המערכת שהעסק הקטן באמת ישתמש בה.",
    body: "יש הרבה מערכות בשוק: מערכות תורים, CRM, אתרי חנות, צ׳אט, דשבורדים וכלים לניהול עסק. אבל הרבה מהן מרגישות מסובכות מדי לעסק קטן.\n\nBizmi מתמקדת בדבר אחד: לתת לעסק קטן את הדברים החשובים ביותר בצורה פשוטה, מהירה וברורה.",
    cards: withIcons([
      { title: "פחות כפתורים", description: "לא להעמיס על בעל העסק.", iconName: "Zap" },
      { title: "יותר ברור", description: "כל פעולה צריכה להיות מובנת מהר.", iconName: "Eye" },
      { title: "ממוקד בעסק קטן", description: "לא מערכת לארגון גדול, אלא לעסק יומיומי.", iconName: "Store" },
      { title: "גם מוצרים וגם תורים", description: "העסק בוחר את סוג הפעילות שמתאים לו.", iconName: "Layers" },
    ]),
    columns: 2,
    variant: "accent",
  },
  {
    id: "built",
    number: 11,
    navLabel: "מה נבנה",
    headline: "זה לא רק רעיון — כבר נבנה בסיס עובד למוצר.",
    body: "כבר נבנתה תשתית ראשונית לאפליקציה: חיבור לדאטהבייס, פתיחת עסק, יצירת לינק ציבורי, מצב חנות מוצרים, מצב תורים, דשבורד מנהל, אבטחה, וניהול עסקים דרך Super Admin.\n\nהמטרה עכשיו היא לא להתחיל מאפס, אלא לקחת בסיס שכבר נבנה ולהפוך אותו למוצר יציב שאפשר לבדוק עם עסקים אמיתיים.",
    cards: withIcons([
      { title: "פתיחת עסק", description: "משתמש יכול ליצור עסק עם שם ולינק.", iconName: "Store" },
      { title: "Supabase ודאטהבייס", description: "המידע נשמר במקום אמיתי ולא רק בתוך האפליקציה.", iconName: "Database" },
      { title: "מצב תורים", description: "עסק יכול להציג לוח תורים ללקוחות.", iconName: "Calendar" },
      { title: "אבטחה והרשאות", description: "בעל עסק רואה רק את העסק שלו, ומנהל־על יכול לנהל את המערכת.", iconName: "Shield" },
    ]),
    columns: 2,
  },
  {
    id: "revenue",
    number: 12,
    navLabel: "הכנסות",
    headline: "המודל העסקי פשוט: מנוי חודשי לעסקים קטנים.",
    body: "בעל עסק משלם כל חודש כדי להשתמש במערכת. כל עוד הוא משלם, העסק פעיל. אם הוא מפסיק לשלם, השירות יכול להינעל בלי למחוק את המידע שלו.\n\nזה יוצר הכנסה חוזרת ונותן לעסק גמישות: להשתמש כשהוא צריך, ולעצור אם הוא לא צריך.",
    cards: withIcons([
      { title: "Basic", description: "מסלול בסיסי לעסק קטן בתחילת הדרך.", iconName: "CreditCard" },
      { title: "Pro", description: "מסלול רחב יותר לעסק שצריך יותר יכולות.", iconName: "TrendingUp" },
      { title: "Business", description: "מסלול לעסק מתקדם יותר עם יותר פעילות.", iconName: "Building2" },
      { title: "ניסיון חינם", description: "אפשר לתת תקופת ניסיון כדי להכניס עסקים ראשונים.", iconName: "Gift" },
    ]),
    columns: 4,
  },
  {
    id: "subscription",
    number: 13,
    navLabel: "מנוי",
    headline: "מי שמשלם משתמש. מי שלא משלם — המערכת ננעלת בלי למחוק את המידע.",
    body: "לכל עסק יש סטטוס מנוי. אם העסק פעיל ומשלם, הלקוחות יכולים להזמין ולקבוע תורים. אם העסק לא משלם, אפשר להעביר אותו למצב מושבת.\n\nבמצב מושבת, העסק לא מקבל הזמנות חדשות, אבל המידע נשמר. אם בעל העסק חוזר לשלם, אפשר לפתוח לו את השירות מחדש.",
    cards: withIcons([
      { title: "Active", description: "העסק פעיל והכול פתוח.", iconName: "BadgeCheck" },
      { title: "Past Due", description: "יש בעיית תשלום, אבל אפשר לתת זמן לתקן.", iconName: "Timer" },
      { title: "Suspended", description: "העסק נעול ולא מקבל פעולות חדשות.", iconName: "Lock" },
      { title: "Reactivated", description: "אחרי תשלום, העסק נפתח מחדש.", iconName: "RefreshCw" },
    ]),
    columns: 4,
  },
  {
    id: "links",
    number: 14,
    navLabel: "קישורים",
    headline: "כל עסק מקבל קישור שאפשר לשלוח ללקוחות.",
    body: "בעל העסק לא צריך להסביר הרבה. הוא שולח קישור, והלקוח נכנס לעמוד העסק.\n\nאם האפליקציה מותקנת, הקישור יכול לפתוח את החנות בתוך האפליקציה. אם היא לא מותקנת, אפשר להציג דף נחיתה עם אפשרות הורדה.\n\nבשלב בדיקות, הקישור יכול לעבוד דרך GitHub Pages. בעתיד הוא יעבוד דרך דומיין מקצועי כמו bizmi.app.",
    cards: withIcons([
      { title: "קישור זמני לדמו", description: "מתאים לבדיקות ומשקיעים.", iconName: "Globe" },
      { title: "קישור מקצועי בעתיד", description: "דומיין קצר וברור לעסק.", iconName: "Link2" },
      { title: "פתיחה באפליקציה", description: "אם האפליקציה מותקנת, אפשר לפתוח ישר את החנות.", iconName: "Smartphone" },
      { title: "דף הורדה", description: "אם אין אפליקציה, אפשר להציג הורדה או הסבר.", iconName: "Download" },
    ]),
    columns: 2,
  },
  {
    id: "security",
    number: 15,
    navLabel: "אבטחה",
    headline: "המערכת נבנית כך שכל עסק יראה רק את המידע שלו.",
    body: "במערכת שיש בה הרבה עסקים, אבטחה היא דבר מרכזי. בעל עסק אחד לא אמור לראות מידע של עסק אחר. לקוח לא אמור לראות מידע פרטי. ורק מנהל־על יכול לנהל את כלל העסקים.\n\nלכן הפעולות החשובות נבדקות בצד שרת ובדאטהבייס, ולא רק בכפתורים שעל המסך.",
    cards: withIcons([
      { title: "בעל עסק רואה רק את שלו", description: "כל עסק מבודד משאר העסקים.", iconName: "Shield" },
      { title: "Super Admin מוגן", description: "רק מנהל־על יכול לראות את כל המערכת.", iconName: "Key" },
      { title: "אין סודות באפליקציה", description: "מפתחות חזקים לא נמצאים בצד הלקוח.", iconName: "Lock" },
      { title: "חסימה אמיתית", description: "גם אם מישהו מנסה לעקוף כפתור, השרת בודק הרשאות.", iconName: "Ban" },
    ]),
    columns: 2,
    variant: "dark",
  },
  {
    id: "employees",
    number: 16,
    navLabel: "עובדים",
    headline: "בעתיד, בעל עסק יוכל להוסיף עובדים שיעזרו לו לנהל את העסק.",
    body: "לא כל עסק מנוהל על ידי אדם אחד. בהמשך, Bizmi יכולה לאפשר לבעל העסק להוסיף עובדים עם הרשאות מוגבלות.\n\nעובד יוכל לענות לפניות, לטפל בהזמנות, לעדכן סטטוס תור, או לראות רק את המשימות שהמנהל נתן לו. בעל העסק יישאר בשליטה מלאה ויוכל לראות מי מטפל במה.",
    cards: withIcons([
      { title: "הרשאות לעובדים", description: "כל עובד רואה רק מה שמותר לו.", iconName: "UserCog" },
      { title: "טיפול בפניות", description: "עובד יכול לענות ללקוחות במקום המנהל.", iconName: "MessageCircle" },
      { title: "ניהול תורים והזמנות", description: "אפשר לחלק עבודה בתוך העסק.", iconName: "Calendar" },
      { title: "מעקב תפקוד", description: "המנהל יוכל לראות מי טיפל במה ומה עדיין פתוח.", iconName: "BarChart3" },
    ]),
    columns: 2,
  },
  {
    id: "marketplace",
    number: 17,
    navLabel: "מרקטפלייס",
    headline: "בעתיד Bizmi יכולה להפוך גם לזירת מסחר בין עסקים קטנים לספקים.",
    body: "אחרי שיהיו הרבה עסקים במערכת, אפשר להוסיף שכבה חדשה: Marketplace עסקי.\n\nעסק קטן יוכל לפרסם בקשה לדיל או הצעת מחיר. ספקים וסיטונאים יוכלו להציע מחירים. העסק יוכל להשוות הצעות ולבחור את העסקה שמתאימה לו.\n\nכך Bizmi לא רק תעזור לעסק לקבל לקוחות, אלא גם תעזור לו לקנות טוב יותר מספקים.",
    cards: withIcons([
      { title: "עסק מבקש הצעה", description: "לדוגמה: \"אני צריך 100 קופסאות אריזה.\"", iconName: "Package" },
      { title: "ספקים מציעים מחיר", description: "כל ספק יכול להציע הצעה משלו.", iconName: "Handshake" },
      { title: "השוואת דילים", description: "העסק רואה מי נותן מחיר טוב יותר.", iconName: "TrendingUp" },
      { title: "הכנסה נוספת בעתיד", description: "אפשר להרוויח מעמלות, מנויי ספקים או קידום הצעות.", iconName: "Wallet" },
    ]),
    columns: 2,
    variant: "accent",
  },
  {
    id: "opportunity",
    number: 18,
    navLabel: "הזדמנות",
    headline: "עסקים קטנים קיימים בכל מקום — ורבים מהם עדיין עובדים בלי מערכת מסודרת.",
    body: "הקהל גדול: עסקים מהבית, נותני שירותים, חנויות קטנות, מאפיות, מספרות, מורים פרטיים, יועצים ועוד.\n\nהרבה מהם לא צריכים מערכת ענקית. הם צריכים משהו פשוט, זול, ברור ומהיר.\n\nBizmi יכולה להתחיל מכלי קטן ופשוט, ובהמשך לגדול לאקו־סיסטם רחב יותר לעסקים קטנים.",
    cards: withIcons([
      { title: "שוק רחב", description: "עסקים קטנים קיימים בכל עיר ובכל תחום.", iconName: "Globe" },
      { title: "בעיה יומיומית", description: "הבלגן בניהול לקוחות קורה כל יום.", iconName: "MessageCircle" },
      { title: "מוצר פשוט למכירה", description: "קל להסביר: קישור אחד ודשבורד אחד.", iconName: "Target" },
      { title: "אפשרות גדילה", description: "בהמשך: עובדים, סליקה, מרקטפלייס, ספקים ועוד.", iconName: "Rocket" },
    ]),
    columns: 2,
  },
  {
    id: "investment",
    number: 19,
    navLabel: "השקעה",
    headline: "אני מחפש השקעה מוקדמת כדי להפוך בסיס עובד למוצר אמיתי בשוק.",
    body: "המטרה היא לקחת את מה שכבר נבנה ולהפוך אותו למוצר יציב, יפה ופשוט שאפשר לבדוק עם עסקים אמיתיים.\n\nההשקעה תאפשר לי לעבוד על המיזם בצורה מרוכזת, לשפר את המוצר, לבדוק אותו מול עסקים, ולראות אם הם מוכנים לשלם.",
    cards: withIcons([
      { title: "השקעה מבוקשת", description: "$50,000", iconName: "Wallet" },
      { title: "אחוז מוצע", description: "15% מהמיזם / החברה שתוקם", iconName: "Handshake" },
      { title: "זמן עבודה", description: "כ־6 חודשים של פיתוח, בדיקות ושיווק ראשוני.", iconName: "Timer" },
      { title: "מטרה", description: "להגיע לעסקים אמיתיים, פיילוטים ראשונים ולקוחות משלמים.", iconName: "Target" },
    ]),
    columns: 2,
    variant: "dark",
  },
  {
    id: "use-of-funds",
    number: 20,
    navLabel: "תקציב",
    headline: "הכסף מיועד לקנות זמן עבודה, שיפור מוצר, ופיילוטים אמיתיים.",
    body: "ההשקעה לא מיועדת לרעיון באוויר. היא מיועדת לקחת בסיס שכבר נבנה ולהביא אותו לשלב שבו עסקים אמיתיים יכולים להשתמש בו.\n\nהכסף ילך לפיתוח, עיצוב, בדיקות, תשתיות, שיווק ראשוני והכנה לפיילוטים.",
    cards: withIcons([
      { title: "פיתוח מוצר", description: "השלמת פיצ׳רים, תיקוני באגים ושיפור יציבות.", iconName: "Zap" },
      { title: "עיצוב וחוויית משתמש", description: "להפוך את המערכת לפשוטה, יפה וברורה.", iconName: "Sparkles" },
      { title: "בדיקות עם עסקים", description: "להכניס עסקים אמיתיים וללמוד מהם.", iconName: "Users" },
      { title: "שיווק ראשוני", description: "להגיע לעסקים קטנים ולבדוק מי מוכן לשלם.", iconName: "TrendingUp" },
    ]),
    columns: 2,
  },
  {
    id: "roadmap",
    number: 21,
    navLabel: "6 חודשים",
    headline: "בתוך 6 חודשים המטרה היא להוכיח שיש עסקים שרוצים להשתמש ולשלם.",
    body: "היעד הוא לא רק לבנות אפליקציה יפה. היעד הוא לבדוק שעסקים אמיתיים מבינים את הערך, משתמשים במוצר, ומוכנים לשלם עליו.\n\nאם זה מצליח, אפשר להמשיך לצמיחה, לגיוס נוסף, או להרחבת המוצר.",
    cards: withIcons([
      { title: "10–20 עסקים בפיילוט", description: "בדיקה עם עסקים אמיתיים.", iconName: "Store" },
      { title: "3–5 עסקים משלמים ראשונים", description: "הוכחה ראשונה שיש נכונות לשלם.", iconName: "CreditCard" },
      { title: "שיפור לפי פידבק", description: "לא לבנות לפי דמיון, אלא לפי משתמשים.", iconName: "RefreshCw" },
      { title: "החלטה על המשך", description: "להבין אם ממשיכים לגיוס, מכירות או גדילה אורגנית.", iconName: "BarChart3" },
    ]),
    columns: 2,
    variant: "accent",
  },
  {
    id: "closing",
    number: 22,
    navLabel: "סיום",
    headline: "Bizmi נותנת לעסק קטן דרך פשוטה להיראות מקצועי, לקבל לקוחות, ולנהל הכול במקום אחד.",
    body: "עסקים קטנים לא צריכים עוד מערכת כבדה. הם צריכים כלי פשוט שעושה להם סדר.\n\nBizmi מתחילה מדבר בסיסי: קישור אחד, עמוד עסק אחד, ודשבורד אחד. אבל בעתיד היא יכולה להפוך לרשת עסקית שלמה שמחברת עסקים, עובדים, לקוחות וספקים.",
    cards: withIcons([
      { title: "היום", description: "דשבורד פשוט לעסק קטן.", iconName: "Store" },
      { title: "מחר", description: "מערכת עם עובדים, תשלומים וניהול מתקדם.", iconName: "TrendingUp" },
      { title: "בעתיד", description: "מרקטפלייס בין עסקים לספקים.", iconName: "Handshake" },
      { title: "החזון", description: "אקו־סיסטם פשוט לעסקים קטנים.", iconName: "Globe" },
    ]),
    columns: 4,
    variant: "dark",
  },
];

export const PANELS: PanelData[] = rawPanels.map((p, index) => ({ ...p, index }));

export const navLabels: Record<string, string> = Object.fromEntries(
  PANELS.map((p) => [p.id, p.navLabel])
);

export const pitchMeta = {
  productName: "Bizmi",
  contactEmail: "investors@bizmi.app",
  meetingUrl: "mailto:investors@bizmi.app",
};
