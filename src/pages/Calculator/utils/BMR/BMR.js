// Basal Metabolic Rate
export default class BMR {
  constructor(userInfo) {
    this.height = userInfo.height;
    this.weight = userInfo.weight;
    this.age = userInfo.age;
    this.gender = userInfo.gender;
    this.LBM = userInfo.LBM;
  }
  // Harris Benedict BMR formula (1919)
  originalHarrisBenedict() {
    if(this.gender === 'm') {
      return Math.round(66.5 + 13.7516 * this.weight + 5.0033 * this.height - 6.7550 * this.age)
    } else if(this.gender === 'f') {
      return Math.round(655.1 + 9.56 * this.weight + 1.85 * this.height - 4.676 * this.age)
    }
  }
  // Harris Benedict BMR formula revised by Rozan and Shizgan (1984)
  revisedHarrisBenedict() {
    if(this.gender === 'm') {
      return Math.round(88.362 + 13.397 * this.weight + 4.799 * this.height - 5.667 * this.age)
    } else if(this.gender === 'f') {
      return Math.round(447.593 + 9.247 * this.weight + 3.098 * this.height - 4.330 * this.age)
    }
  }
  // Miffin-St Jeor BMR formula (1990)
  mifflinStJeor() {
    if(this.gender === 'm') {
      return Math.round(10 * this.weight + 6.25 * this.height - 5 * this.age + 5)
    } else if(this.gender === 'f') {
      return Math.round(10 * this.weight + 6.25 * this.height - 5 * this.age - 161)
    }
  }
  // Katch-McArdle BMR formula (2001)
  katchMcArdle() {
    return Math.round(370 + (21.6 * this.LBM))
  }
  // Schofield BMR formula (1985)
  schofield() {
    if(this.gender === 'm') {
      if(this.age > 17 && this.age < 30) {
        return Math.round(15.057 * this.weight + 692.2);
      } else if(this.age > 29 && this.age <= 59) {
        return Math.round(11.472 * this.weight + 873.1);
      } else if(this.age >= 60) {
        return Math.round(11.711 * this.weight + 587.7);
      };
    } else if(this.gender === 'f') {
      if(this.age > 17 && this.age < 30) {
        return Math.round(14.818 * this.weight + 486.6);
      } else if(this.age > 29 && this.age < 59) {
        return Math.round(8.126 * this.weight + 845.6);
      } else if(this.age >= 60) {
        return Math.round(9.082 * this.weight + 658.5);
      }
    }
  }
};