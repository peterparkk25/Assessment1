// Q2. OOP general programming
// In the real world, a man has a mouth. His mouth can do operations like open/close at the man's will.
// ● He can open and close his mouth as he wishes.
// ● Nobody can force a man to open/close his mouth.
// ● A doctor can ask a man to open/close his mouth and a man will do so.
// ● He refuses anyone else who asks him to open/close his mouth other than doctors
// Use OOP Designs to make needed classes with methods to meet those requirements. You can use any language or
// pseudo-code to write down your results.

class Man {
  protected openMouth(): string {
    return "mouth is open";
  }
  protected closeMouth(): string {
    return "mouth is closed";
  }
}

class Doctor extends Man {
  public openMouthPlease() {
    return this.openMouth();
  }

  public closeMouthPlease() {
    return this.closeMouth();
  }
}

let doctor = new Doctor(); // Only the doctor can ask the man to open/close his mouth
doctor.openMouthPlease(); // Opens Man's mouth
doctor.closeMouthPlease(); // Closes Man's mouth
