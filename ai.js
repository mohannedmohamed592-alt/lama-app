// محرك الذكاء الاصطناعي ومستويات الصعوبة لتطبيق LAMMA
const LammaAI = {
  difficulty: "medium", // القيمة الافتراضية: 'easy' | 'medium' | 'hard'

  settings: {
    easy: {
      smartChance: 0.25,     // نسبة الاختيار الأفضل (25%)
      minDelay: 700,         // وقت التفكير بالمللي ثانية
      maxDelay: 1200,
      pointsRange: [5, 15]
    },
    medium: {
      smartChance: 0.60,     // نسبة الاختيار الأفضل (60%)
      minDelay: 500,
      maxDelay: 950,
      pointsRange: [10, 25]
    },
    hard: {
      smartChance: 0.90,     // نسبة الاختيار الأفضل (90%)
      minDelay: 350,
      maxDelay: 700,
      pointsRange: [15, 35]
    }
  },

  setDifficulty(level) {
    const normalized = String(level || "").toLowerCase();
    if (this.settings[normalized]) {
      this.difficulty = normalized;
      document.dispatchEvent(
        new CustomEvent("lamma:difficultyChanged", { detail: { difficulty
                              
