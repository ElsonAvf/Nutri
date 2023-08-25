// Lean Body Mass
export default class LBM {
  constructor(userInfo){
    this.height = userInfo.height;
    this.weight = userInfo.weight;
    this.gender = userInfo.gender;
  }
  //Boer formula LMB
  boer() {
    if(this.gender === 'm') {
      return (0.407 * this.weight) + (0.267 * this.height) - 19.2
    } else if(this.gender === 'f') {
      return (0.252 * this.weight) + (0.473 * this.height) - 48.3
    }
  }
  // Hume formula LMB
  hume() {
    if(this.gender === 'm') {
      return (0.32810 * this.weight) + (0.33929 * this.height) - 29.5336
    } else if(this.gender === 'f') {
      return (0.29569 * this.weight) + (0.41813 * this.height) - 43.2933
    }
  }
  // James formula LMB
  james() {
    if(this.gender === 'm') {
      return 1.1 * this.weight - 128 * (this.weight / this.height) ** 2
    } else if(this.gender === 'f') {
      return 1.07 * this.weight - 148 * (this.weight / this.height) ** 2
    }
  }
};