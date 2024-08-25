class Nat {}
class Suc<Num extends Nat> extends Nat {}
class Zero extends Nat {}

class Lt<Left extends Nat, Right extends Nat> {}

class ZeroLessThanSucZero<Base extends Nat, Next extends Suc<Base>> extends Lt<Zero, Next> {}

let proof: Lt<Zero, Suc<Zero>> = new ZeroLessThanSucZero();
let proff: Lt<Suc<Zero>, Zero> = new ZeroLessThanSucZero(); //typescript sucks for proofs