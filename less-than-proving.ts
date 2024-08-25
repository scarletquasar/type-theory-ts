// class Nat {}
// class Suc<N extends Nat> extends Nat {}
// class Zer extends Nat {}

// class Le<A extends Nat, B extends Nat> {}
// class ZeroLeSuc<M extends Nat, N extends Suc<M>> extends Le<Zer, N> {}
// class SucLeSuc<M extends Nat, N extends Nat> extends Le<Suc<M>, Suc<N>> {
//   constructor(public pred_proof: Le<M, N>) {
//     super();
//   }
// }

// type One = Suc<Zer>;
// type Two = Suc<One>;

// type Add<A extends Nat, B extends Nat> = B extends Zer ? A : Suc<Add<A, B>>;
// type Mul<A extends Nat, B extends Nat> = B extends Zer
//   ? Zer
//   : Add<A, Mul<A, B>>;
// type Exp<A extends Nat> = Mul<A, A>;

// class List<A> {}
// class Cons<A, X extends A, XS extends List<A>> extends List<A> {}
// class Nil<A> extends List<A> {}

// type Assume<T, U> = T extends U ? T : U;
// type GenericFunction = (...x: never[]) => unknown;

// abstract class Kind1 {
//   readonly Fst: unknown;
//   New: GenericFunction;
// }

// abstract class Kind2 {
//   readonly Fst: unknown;
//   readonly Snd: unknown;
//   New: GenericFunction;
// }

// abstract class Kind3 {
//   readonly Fst: unknown;
//   readonly Snd: unknown;
//   readonly Trd: unknown;
//   New: GenericFunction;
// }

// type Apply1<F extends Kind1, Fst> = ReturnType<
//   (F & {
//     readonly Fst: Fst;
//   })['New']
// >;

// type Apply2<F extends Kind2, Fst, Snd> = ReturnType<
//   (F & {
//     readonly Fst: Fst;
//     readonly Snd: Snd;
//   })['New']
// >;

// type Apply3<F extends Kind3, Fst, Snd, Trd> = ReturnType<
//   (F & {
//     readonly Fst: Fst;
//     readonly Snd: Snd;
//     readonly Trd: Trd;
//   })['New']
// >;

// type List_ind<A, S extends List<A>, Case_Cons extends Kind3, Case_Zero> =
//   // match S with
//   S extends Nil<A>
//     ? Case_Zero // case SNil -> Zero
//     : S extends Cons<A, infer X, infer XS>
//     ? Apply3<Case_Cons, A, X, XS> // case SCons({A}, X, XS) -> Cons({A}, X, XS)
//     : never;

// type Len_CaseZero = Zer;
// type Something = {
//   New: (
//     A: Assume<Len_CaseCons['Fst'], {}>,
//     x: Assume<Len_CaseCons['Snd'], Nat>,
//     xs: Assume<Len_CaseCons['Trd'], List<Nat>>,
//   ) => Suc<Len<Something['New']['A'], typeof xs>>;
// }
// type Len_CaseCons = Kind3 & Something;

// type Len<A, S extends List<A>> = List_ind<A, S, Len_CaseCons, Len_CaseZero>;

// class Eq<T, A extends T, B extends T> {}
// class refl<T, A extends T> extends Eq<T, A, A> {}

// let case_one: Le<Zer, Add<Two, Mul<Two, Exp<Two>>>> = new ZeroLeSuc();
// let case_two: Le<One, Two> = new SucLeSuc(new ZeroLeSuc());

// type Person = {
//   name: List;
//   prop_in_bounds: Le<Len<Person['name']>, Exp<Two>>;
// };

// let person: Person = {
//   name: new Cons<Zer, Cons<Zer, Cons<Zer, Nil>>>(),
//   prop_in_bounds: 10,
// };

// let is_equal: Eq<Nat, One, One> = new refl();