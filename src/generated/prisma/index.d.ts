
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model competicoes
 * 
 */
export type competicoes = $Result.DefaultSelection<Prisma.$competicoesPayload>
/**
 * Model contacto
 * 
 */
export type contacto = $Result.DefaultSelection<Prisma.$contactoPayload>
/**
 * Model contacto_modalidade
 * 
 */
export type contacto_modalidade = $Result.DefaultSelection<Prisma.$contacto_modalidadePayload>
/**
 * Model detalhes_modalidade
 * 
 */
export type detalhes_modalidade = $Result.DefaultSelection<Prisma.$detalhes_modalidadePayload>
/**
 * Model equipamento
 * 
 */
export type equipamento = $Result.DefaultSelection<Prisma.$equipamentoPayload>
/**
 * Model horarios
 * 
 */
export type horarios = $Result.DefaultSelection<Prisma.$horariosPayload>
/**
 * Model modalidades
 * 
 */
export type modalidades = $Result.DefaultSelection<Prisma.$modalidadesPayload>
/**
 * Model niveis
 * 
 */
export type niveis = $Result.DefaultSelection<Prisma.$niveisPayload>
/**
 * Model preco
 * 
 */
export type preco = $Result.DefaultSelection<Prisma.$precoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Competicoes
 * const competicoes = await prisma.competicoes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Competicoes
   * const competicoes = await prisma.competicoes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.competicoes`: Exposes CRUD operations for the **competicoes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competicoes
    * const competicoes = await prisma.competicoes.findMany()
    * ```
    */
  get competicoes(): Prisma.competicoesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacto`: Exposes CRUD operations for the **contacto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contactos
    * const contactos = await prisma.contacto.findMany()
    * ```
    */
  get contacto(): Prisma.contactoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacto_modalidade`: Exposes CRUD operations for the **contacto_modalidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacto_modalidades
    * const contacto_modalidades = await prisma.contacto_modalidade.findMany()
    * ```
    */
  get contacto_modalidade(): Prisma.contacto_modalidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalhes_modalidade`: Exposes CRUD operations for the **detalhes_modalidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalhes_modalidades
    * const detalhes_modalidades = await prisma.detalhes_modalidade.findMany()
    * ```
    */
  get detalhes_modalidade(): Prisma.detalhes_modalidadeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipamento`: Exposes CRUD operations for the **equipamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipamentos
    * const equipamentos = await prisma.equipamento.findMany()
    * ```
    */
  get equipamento(): Prisma.equipamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.horarios`: Exposes CRUD operations for the **horarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Horarios
    * const horarios = await prisma.horarios.findMany()
    * ```
    */
  get horarios(): Prisma.horariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modalidades`: Exposes CRUD operations for the **modalidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modalidades
    * const modalidades = await prisma.modalidades.findMany()
    * ```
    */
  get modalidades(): Prisma.modalidadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.niveis`: Exposes CRUD operations for the **niveis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Niveis
    * const niveis = await prisma.niveis.findMany()
    * ```
    */
  get niveis(): Prisma.niveisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preco`: Exposes CRUD operations for the **preco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Precos
    * const precos = await prisma.preco.findMany()
    * ```
    */
  get preco(): Prisma.precoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    competicoes: 'competicoes',
    contacto: 'contacto',
    contacto_modalidade: 'contacto_modalidade',
    detalhes_modalidade: 'detalhes_modalidade',
    equipamento: 'equipamento',
    horarios: 'horarios',
    modalidades: 'modalidades',
    niveis: 'niveis',
    preco: 'preco'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "competicoes" | "contacto" | "contacto_modalidade" | "detalhes_modalidade" | "equipamento" | "horarios" | "modalidades" | "niveis" | "preco"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      competicoes: {
        payload: Prisma.$competicoesPayload<ExtArgs>
        fields: Prisma.competicoesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.competicoesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.competicoesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>
          }
          findFirst: {
            args: Prisma.competicoesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.competicoesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>
          }
          findMany: {
            args: Prisma.competicoesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>[]
          }
          create: {
            args: Prisma.competicoesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>
          }
          createMany: {
            args: Prisma.competicoesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.competicoesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>[]
          }
          delete: {
            args: Prisma.competicoesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>
          }
          update: {
            args: Prisma.competicoesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>
          }
          deleteMany: {
            args: Prisma.competicoesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.competicoesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.competicoesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>[]
          }
          upsert: {
            args: Prisma.competicoesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$competicoesPayload>
          }
          aggregate: {
            args: Prisma.CompeticoesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompeticoes>
          }
          groupBy: {
            args: Prisma.competicoesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompeticoesGroupByOutputType>[]
          }
          count: {
            args: Prisma.competicoesCountArgs<ExtArgs>
            result: $Utils.Optional<CompeticoesCountAggregateOutputType> | number
          }
        }
      }
      contacto: {
        payload: Prisma.$contactoPayload<ExtArgs>
        fields: Prisma.contactoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          findFirst: {
            args: Prisma.contactoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          findMany: {
            args: Prisma.contactoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>[]
          }
          create: {
            args: Prisma.contactoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          createMany: {
            args: Prisma.contactoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contactoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>[]
          }
          delete: {
            args: Prisma.contactoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          update: {
            args: Prisma.contactoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          deleteMany: {
            args: Prisma.contactoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contactoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>[]
          }
          upsert: {
            args: Prisma.contactoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactoPayload>
          }
          aggregate: {
            args: Prisma.ContactoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacto>
          }
          groupBy: {
            args: Prisma.contactoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactoGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactoCountAggregateOutputType> | number
          }
        }
      }
      contacto_modalidade: {
        payload: Prisma.$contacto_modalidadePayload<ExtArgs>
        fields: Prisma.contacto_modalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contacto_modalidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contacto_modalidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>
          }
          findFirst: {
            args: Prisma.contacto_modalidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contacto_modalidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>
          }
          findMany: {
            args: Prisma.contacto_modalidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>[]
          }
          create: {
            args: Prisma.contacto_modalidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>
          }
          createMany: {
            args: Prisma.contacto_modalidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contacto_modalidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>[]
          }
          delete: {
            args: Prisma.contacto_modalidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>
          }
          update: {
            args: Prisma.contacto_modalidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>
          }
          deleteMany: {
            args: Prisma.contacto_modalidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contacto_modalidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contacto_modalidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>[]
          }
          upsert: {
            args: Prisma.contacto_modalidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contacto_modalidadePayload>
          }
          aggregate: {
            args: Prisma.Contacto_modalidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacto_modalidade>
          }
          groupBy: {
            args: Prisma.contacto_modalidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contacto_modalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.contacto_modalidadeCountArgs<ExtArgs>
            result: $Utils.Optional<Contacto_modalidadeCountAggregateOutputType> | number
          }
        }
      }
      detalhes_modalidade: {
        payload: Prisma.$detalhes_modalidadePayload<ExtArgs>
        fields: Prisma.detalhes_modalidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detalhes_modalidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detalhes_modalidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>
          }
          findFirst: {
            args: Prisma.detalhes_modalidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detalhes_modalidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>
          }
          findMany: {
            args: Prisma.detalhes_modalidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>[]
          }
          create: {
            args: Prisma.detalhes_modalidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>
          }
          createMany: {
            args: Prisma.detalhes_modalidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detalhes_modalidadeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>[]
          }
          delete: {
            args: Prisma.detalhes_modalidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>
          }
          update: {
            args: Prisma.detalhes_modalidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>
          }
          deleteMany: {
            args: Prisma.detalhes_modalidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detalhes_modalidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detalhes_modalidadeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>[]
          }
          upsert: {
            args: Prisma.detalhes_modalidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detalhes_modalidadePayload>
          }
          aggregate: {
            args: Prisma.Detalhes_modalidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalhes_modalidade>
          }
          groupBy: {
            args: Prisma.detalhes_modalidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detalhes_modalidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.detalhes_modalidadeCountArgs<ExtArgs>
            result: $Utils.Optional<Detalhes_modalidadeCountAggregateOutputType> | number
          }
        }
      }
      equipamento: {
        payload: Prisma.$equipamentoPayload<ExtArgs>
        fields: Prisma.equipamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.equipamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.equipamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          findFirst: {
            args: Prisma.equipamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.equipamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          findMany: {
            args: Prisma.equipamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          create: {
            args: Prisma.equipamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          createMany: {
            args: Prisma.equipamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.equipamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          delete: {
            args: Prisma.equipamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          update: {
            args: Prisma.equipamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          deleteMany: {
            args: Prisma.equipamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.equipamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.equipamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>[]
          }
          upsert: {
            args: Prisma.equipamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$equipamentoPayload>
          }
          aggregate: {
            args: Prisma.EquipamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipamento>
          }
          groupBy: {
            args: Prisma.equipamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.equipamentoCountArgs<ExtArgs>
            result: $Utils.Optional<EquipamentoCountAggregateOutputType> | number
          }
        }
      }
      horarios: {
        payload: Prisma.$horariosPayload<ExtArgs>
        fields: Prisma.horariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.horariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.horariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findFirst: {
            args: Prisma.horariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.horariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          findMany: {
            args: Prisma.horariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          create: {
            args: Prisma.horariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          createMany: {
            args: Prisma.horariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.horariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          delete: {
            args: Prisma.horariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          update: {
            args: Prisma.horariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          deleteMany: {
            args: Prisma.horariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.horariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.horariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>[]
          }
          upsert: {
            args: Prisma.horariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$horariosPayload>
          }
          aggregate: {
            args: Prisma.HorariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHorarios>
          }
          groupBy: {
            args: Prisma.horariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<HorariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.horariosCountArgs<ExtArgs>
            result: $Utils.Optional<HorariosCountAggregateOutputType> | number
          }
        }
      }
      modalidades: {
        payload: Prisma.$modalidadesPayload<ExtArgs>
        fields: Prisma.modalidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.modalidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.modalidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>
          }
          findFirst: {
            args: Prisma.modalidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.modalidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>
          }
          findMany: {
            args: Prisma.modalidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>[]
          }
          create: {
            args: Prisma.modalidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>
          }
          createMany: {
            args: Prisma.modalidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.modalidadesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>[]
          }
          delete: {
            args: Prisma.modalidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>
          }
          update: {
            args: Prisma.modalidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>
          }
          deleteMany: {
            args: Prisma.modalidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.modalidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.modalidadesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>[]
          }
          upsert: {
            args: Prisma.modalidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modalidadesPayload>
          }
          aggregate: {
            args: Prisma.ModalidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModalidades>
          }
          groupBy: {
            args: Prisma.modalidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModalidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.modalidadesCountArgs<ExtArgs>
            result: $Utils.Optional<ModalidadesCountAggregateOutputType> | number
          }
        }
      }
      niveis: {
        payload: Prisma.$niveisPayload<ExtArgs>
        fields: Prisma.niveisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.niveisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.niveisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          findFirst: {
            args: Prisma.niveisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.niveisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          findMany: {
            args: Prisma.niveisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          create: {
            args: Prisma.niveisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          createMany: {
            args: Prisma.niveisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.niveisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          delete: {
            args: Prisma.niveisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          update: {
            args: Prisma.niveisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          deleteMany: {
            args: Prisma.niveisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.niveisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.niveisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          upsert: {
            args: Prisma.niveisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          aggregate: {
            args: Prisma.NiveisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNiveis>
          }
          groupBy: {
            args: Prisma.niveisGroupByArgs<ExtArgs>
            result: $Utils.Optional<NiveisGroupByOutputType>[]
          }
          count: {
            args: Prisma.niveisCountArgs<ExtArgs>
            result: $Utils.Optional<NiveisCountAggregateOutputType> | number
          }
        }
      }
      preco: {
        payload: Prisma.$precoPayload<ExtArgs>
        fields: Prisma.precoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.precoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.precoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>
          }
          findFirst: {
            args: Prisma.precoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.precoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>
          }
          findMany: {
            args: Prisma.precoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>[]
          }
          create: {
            args: Prisma.precoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>
          }
          createMany: {
            args: Prisma.precoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.precoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>[]
          }
          delete: {
            args: Prisma.precoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>
          }
          update: {
            args: Prisma.precoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>
          }
          deleteMany: {
            args: Prisma.precoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.precoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.precoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>[]
          }
          upsert: {
            args: Prisma.precoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$precoPayload>
          }
          aggregate: {
            args: Prisma.PrecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreco>
          }
          groupBy: {
            args: Prisma.precoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.precoCountArgs<ExtArgs>
            result: $Utils.Optional<PrecoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    competicoes?: competicoesOmit
    contacto?: contactoOmit
    contacto_modalidade?: contacto_modalidadeOmit
    detalhes_modalidade?: detalhes_modalidadeOmit
    equipamento?: equipamentoOmit
    horarios?: horariosOmit
    modalidades?: modalidadesOmit
    niveis?: niveisOmit
    preco?: precoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ModalidadesCountOutputType
   */

  export type ModalidadesCountOutputType = {
    competicoes: number
    contacto_modalidade: number
    detalhes_modalidade: number
    equipamento: number
    horarios: number
    niveis: number
    preco: number
  }

  export type ModalidadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competicoes?: boolean | ModalidadesCountOutputTypeCountCompeticoesArgs
    contacto_modalidade?: boolean | ModalidadesCountOutputTypeCountContacto_modalidadeArgs
    detalhes_modalidade?: boolean | ModalidadesCountOutputTypeCountDetalhes_modalidadeArgs
    equipamento?: boolean | ModalidadesCountOutputTypeCountEquipamentoArgs
    horarios?: boolean | ModalidadesCountOutputTypeCountHorariosArgs
    niveis?: boolean | ModalidadesCountOutputTypeCountNiveisArgs
    preco?: boolean | ModalidadesCountOutputTypeCountPrecoArgs
  }

  // Custom InputTypes
  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModalidadesCountOutputType
     */
    select?: ModalidadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountCompeticoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competicoesWhereInput
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountContacto_modalidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contacto_modalidadeWhereInput
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountDetalhes_modalidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalhes_modalidadeWhereInput
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountEquipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountHorariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horariosWhereInput
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountNiveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: niveisWhereInput
  }

  /**
   * ModalidadesCountOutputType without action
   */
  export type ModalidadesCountOutputTypeCountPrecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: precoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model competicoes
   */

  export type AggregateCompeticoes = {
    _count: CompeticoesCountAggregateOutputType | null
    _avg: CompeticoesAvgAggregateOutputType | null
    _sum: CompeticoesSumAggregateOutputType | null
    _min: CompeticoesMinAggregateOutputType | null
    _max: CompeticoesMaxAggregateOutputType | null
  }

  export type CompeticoesAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type CompeticoesSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type CompeticoesMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    nome: string | null
  }

  export type CompeticoesMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    nome: string | null
  }

  export type CompeticoesCountAggregateOutputType = {
    id: number
    modalidade_id: number
    nome: number
    _all: number
  }


  export type CompeticoesAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type CompeticoesSumAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type CompeticoesMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    nome?: true
  }

  export type CompeticoesMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    nome?: true
  }

  export type CompeticoesCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    nome?: true
    _all?: true
  }

  export type CompeticoesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competicoes to aggregate.
     */
    where?: competicoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competicoes to fetch.
     */
    orderBy?: competicoesOrderByWithRelationInput | competicoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: competicoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competicoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competicoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned competicoes
    **/
    _count?: true | CompeticoesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompeticoesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompeticoesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompeticoesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompeticoesMaxAggregateInputType
  }

  export type GetCompeticoesAggregateType<T extends CompeticoesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompeticoes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompeticoes[P]>
      : GetScalarType<T[P], AggregateCompeticoes[P]>
  }




  export type competicoesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: competicoesWhereInput
    orderBy?: competicoesOrderByWithAggregationInput | competicoesOrderByWithAggregationInput[]
    by: CompeticoesScalarFieldEnum[] | CompeticoesScalarFieldEnum
    having?: competicoesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompeticoesCountAggregateInputType | true
    _avg?: CompeticoesAvgAggregateInputType
    _sum?: CompeticoesSumAggregateInputType
    _min?: CompeticoesMinAggregateInputType
    _max?: CompeticoesMaxAggregateInputType
  }

  export type CompeticoesGroupByOutputType = {
    id: number
    modalidade_id: number | null
    nome: string | null
    _count: CompeticoesCountAggregateOutputType | null
    _avg: CompeticoesAvgAggregateOutputType | null
    _sum: CompeticoesSumAggregateOutputType | null
    _min: CompeticoesMinAggregateOutputType | null
    _max: CompeticoesMaxAggregateOutputType | null
  }

  type GetCompeticoesGroupByPayload<T extends competicoesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompeticoesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompeticoesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompeticoesGroupByOutputType[P]>
            : GetScalarType<T[P], CompeticoesGroupByOutputType[P]>
        }
      >
    >


  export type competicoesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
    modalidades?: boolean | competicoes$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["competicoes"]>

  export type competicoesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
    modalidades?: boolean | competicoes$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["competicoes"]>

  export type competicoesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
    modalidades?: boolean | competicoes$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["competicoes"]>

  export type competicoesSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
  }

  export type competicoesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "nome", ExtArgs["result"]["competicoes"]>
  export type competicoesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | competicoes$modalidadesArgs<ExtArgs>
  }
  export type competicoesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | competicoes$modalidadesArgs<ExtArgs>
  }
  export type competicoesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | competicoes$modalidadesArgs<ExtArgs>
  }

  export type $competicoesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "competicoes"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number | null
      nome: string | null
    }, ExtArgs["result"]["competicoes"]>
    composites: {}
  }

  type competicoesGetPayload<S extends boolean | null | undefined | competicoesDefaultArgs> = $Result.GetResult<Prisma.$competicoesPayload, S>

  type competicoesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<competicoesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompeticoesCountAggregateInputType | true
    }

  export interface competicoesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['competicoes'], meta: { name: 'competicoes' } }
    /**
     * Find zero or one Competicoes that matches the filter.
     * @param {competicoesFindUniqueArgs} args - Arguments to find a Competicoes
     * @example
     * // Get one Competicoes
     * const competicoes = await prisma.competicoes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends competicoesFindUniqueArgs>(args: SelectSubset<T, competicoesFindUniqueArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competicoes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {competicoesFindUniqueOrThrowArgs} args - Arguments to find a Competicoes
     * @example
     * // Get one Competicoes
     * const competicoes = await prisma.competicoes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends competicoesFindUniqueOrThrowArgs>(args: SelectSubset<T, competicoesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competicoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competicoesFindFirstArgs} args - Arguments to find a Competicoes
     * @example
     * // Get one Competicoes
     * const competicoes = await prisma.competicoes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends competicoesFindFirstArgs>(args?: SelectSubset<T, competicoesFindFirstArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competicoes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competicoesFindFirstOrThrowArgs} args - Arguments to find a Competicoes
     * @example
     * // Get one Competicoes
     * const competicoes = await prisma.competicoes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends competicoesFindFirstOrThrowArgs>(args?: SelectSubset<T, competicoesFindFirstOrThrowArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competicoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competicoesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competicoes
     * const competicoes = await prisma.competicoes.findMany()
     * 
     * // Get first 10 Competicoes
     * const competicoes = await prisma.competicoes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competicoesWithIdOnly = await prisma.competicoes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends competicoesFindManyArgs>(args?: SelectSubset<T, competicoesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competicoes.
     * @param {competicoesCreateArgs} args - Arguments to create a Competicoes.
     * @example
     * // Create one Competicoes
     * const Competicoes = await prisma.competicoes.create({
     *   data: {
     *     // ... data to create a Competicoes
     *   }
     * })
     * 
     */
    create<T extends competicoesCreateArgs>(args: SelectSubset<T, competicoesCreateArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competicoes.
     * @param {competicoesCreateManyArgs} args - Arguments to create many Competicoes.
     * @example
     * // Create many Competicoes
     * const competicoes = await prisma.competicoes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends competicoesCreateManyArgs>(args?: SelectSubset<T, competicoesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competicoes and returns the data saved in the database.
     * @param {competicoesCreateManyAndReturnArgs} args - Arguments to create many Competicoes.
     * @example
     * // Create many Competicoes
     * const competicoes = await prisma.competicoes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competicoes and only return the `id`
     * const competicoesWithIdOnly = await prisma.competicoes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends competicoesCreateManyAndReturnArgs>(args?: SelectSubset<T, competicoesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competicoes.
     * @param {competicoesDeleteArgs} args - Arguments to delete one Competicoes.
     * @example
     * // Delete one Competicoes
     * const Competicoes = await prisma.competicoes.delete({
     *   where: {
     *     // ... filter to delete one Competicoes
     *   }
     * })
     * 
     */
    delete<T extends competicoesDeleteArgs>(args: SelectSubset<T, competicoesDeleteArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competicoes.
     * @param {competicoesUpdateArgs} args - Arguments to update one Competicoes.
     * @example
     * // Update one Competicoes
     * const competicoes = await prisma.competicoes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends competicoesUpdateArgs>(args: SelectSubset<T, competicoesUpdateArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competicoes.
     * @param {competicoesDeleteManyArgs} args - Arguments to filter Competicoes to delete.
     * @example
     * // Delete a few Competicoes
     * const { count } = await prisma.competicoes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends competicoesDeleteManyArgs>(args?: SelectSubset<T, competicoesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competicoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competicoesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competicoes
     * const competicoes = await prisma.competicoes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends competicoesUpdateManyArgs>(args: SelectSubset<T, competicoesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competicoes and returns the data updated in the database.
     * @param {competicoesUpdateManyAndReturnArgs} args - Arguments to update many Competicoes.
     * @example
     * // Update many Competicoes
     * const competicoes = await prisma.competicoes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competicoes and only return the `id`
     * const competicoesWithIdOnly = await prisma.competicoes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends competicoesUpdateManyAndReturnArgs>(args: SelectSubset<T, competicoesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competicoes.
     * @param {competicoesUpsertArgs} args - Arguments to update or create a Competicoes.
     * @example
     * // Update or create a Competicoes
     * const competicoes = await prisma.competicoes.upsert({
     *   create: {
     *     // ... data to create a Competicoes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competicoes we want to update
     *   }
     * })
     */
    upsert<T extends competicoesUpsertArgs>(args: SelectSubset<T, competicoesUpsertArgs<ExtArgs>>): Prisma__competicoesClient<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competicoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competicoesCountArgs} args - Arguments to filter Competicoes to count.
     * @example
     * // Count the number of Competicoes
     * const count = await prisma.competicoes.count({
     *   where: {
     *     // ... the filter for the Competicoes we want to count
     *   }
     * })
    **/
    count<T extends competicoesCountArgs>(
      args?: Subset<T, competicoesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompeticoesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competicoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompeticoesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompeticoesAggregateArgs>(args: Subset<T, CompeticoesAggregateArgs>): Prisma.PrismaPromise<GetCompeticoesAggregateType<T>>

    /**
     * Group by Competicoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {competicoesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends competicoesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: competicoesGroupByArgs['orderBy'] }
        : { orderBy?: competicoesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, competicoesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompeticoesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the competicoes model
   */
  readonly fields: competicoesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for competicoes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__competicoesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends competicoes$modalidadesArgs<ExtArgs> = {}>(args?: Subset<T, competicoes$modalidadesArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the competicoes model
   */
  interface competicoesFieldRefs {
    readonly id: FieldRef<"competicoes", 'Int'>
    readonly modalidade_id: FieldRef<"competicoes", 'Int'>
    readonly nome: FieldRef<"competicoes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * competicoes findUnique
   */
  export type competicoesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * Filter, which competicoes to fetch.
     */
    where: competicoesWhereUniqueInput
  }

  /**
   * competicoes findUniqueOrThrow
   */
  export type competicoesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * Filter, which competicoes to fetch.
     */
    where: competicoesWhereUniqueInput
  }

  /**
   * competicoes findFirst
   */
  export type competicoesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * Filter, which competicoes to fetch.
     */
    where?: competicoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competicoes to fetch.
     */
    orderBy?: competicoesOrderByWithRelationInput | competicoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competicoes.
     */
    cursor?: competicoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competicoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competicoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competicoes.
     */
    distinct?: CompeticoesScalarFieldEnum | CompeticoesScalarFieldEnum[]
  }

  /**
   * competicoes findFirstOrThrow
   */
  export type competicoesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * Filter, which competicoes to fetch.
     */
    where?: competicoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competicoes to fetch.
     */
    orderBy?: competicoesOrderByWithRelationInput | competicoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for competicoes.
     */
    cursor?: competicoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competicoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competicoes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of competicoes.
     */
    distinct?: CompeticoesScalarFieldEnum | CompeticoesScalarFieldEnum[]
  }

  /**
   * competicoes findMany
   */
  export type competicoesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * Filter, which competicoes to fetch.
     */
    where?: competicoesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of competicoes to fetch.
     */
    orderBy?: competicoesOrderByWithRelationInput | competicoesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing competicoes.
     */
    cursor?: competicoesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` competicoes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` competicoes.
     */
    skip?: number
    distinct?: CompeticoesScalarFieldEnum | CompeticoesScalarFieldEnum[]
  }

  /**
   * competicoes create
   */
  export type competicoesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * The data needed to create a competicoes.
     */
    data?: XOR<competicoesCreateInput, competicoesUncheckedCreateInput>
  }

  /**
   * competicoes createMany
   */
  export type competicoesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many competicoes.
     */
    data: competicoesCreateManyInput | competicoesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * competicoes createManyAndReturn
   */
  export type competicoesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * The data used to create many competicoes.
     */
    data: competicoesCreateManyInput | competicoesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * competicoes update
   */
  export type competicoesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * The data needed to update a competicoes.
     */
    data: XOR<competicoesUpdateInput, competicoesUncheckedUpdateInput>
    /**
     * Choose, which competicoes to update.
     */
    where: competicoesWhereUniqueInput
  }

  /**
   * competicoes updateMany
   */
  export type competicoesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update competicoes.
     */
    data: XOR<competicoesUpdateManyMutationInput, competicoesUncheckedUpdateManyInput>
    /**
     * Filter which competicoes to update
     */
    where?: competicoesWhereInput
    /**
     * Limit how many competicoes to update.
     */
    limit?: number
  }

  /**
   * competicoes updateManyAndReturn
   */
  export type competicoesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * The data used to update competicoes.
     */
    data: XOR<competicoesUpdateManyMutationInput, competicoesUncheckedUpdateManyInput>
    /**
     * Filter which competicoes to update
     */
    where?: competicoesWhereInput
    /**
     * Limit how many competicoes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * competicoes upsert
   */
  export type competicoesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * The filter to search for the competicoes to update in case it exists.
     */
    where: competicoesWhereUniqueInput
    /**
     * In case the competicoes found by the `where` argument doesn't exist, create a new competicoes with this data.
     */
    create: XOR<competicoesCreateInput, competicoesUncheckedCreateInput>
    /**
     * In case the competicoes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<competicoesUpdateInput, competicoesUncheckedUpdateInput>
  }

  /**
   * competicoes delete
   */
  export type competicoesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    /**
     * Filter which competicoes to delete.
     */
    where: competicoesWhereUniqueInput
  }

  /**
   * competicoes deleteMany
   */
  export type competicoesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which competicoes to delete
     */
    where?: competicoesWhereInput
    /**
     * Limit how many competicoes to delete.
     */
    limit?: number
  }

  /**
   * competicoes.modalidades
   */
  export type competicoes$modalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    where?: modalidadesWhereInput
  }

  /**
   * competicoes without action
   */
  export type competicoesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
  }


  /**
   * Model contacto
   */

  export type AggregateContacto = {
    _count: ContactoCountAggregateOutputType | null
    _avg: ContactoAvgAggregateOutputType | null
    _sum: ContactoSumAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  export type ContactoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactoSumAggregateOutputType = {
    id: number | null
  }

  export type ContactoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    assunto: string | null
    mensagem: string | null
    data: Date | null
  }

  export type ContactoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    assunto: string | null
    mensagem: string | null
    data: Date | null
  }

  export type ContactoCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    assunto: number
    mensagem: number
    data: number
    _all: number
  }


  export type ContactoAvgAggregateInputType = {
    id?: true
  }

  export type ContactoSumAggregateInputType = {
    id?: true
  }

  export type ContactoMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    assunto?: true
    mensagem?: true
    data?: true
  }

  export type ContactoMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    assunto?: true
    mensagem?: true
    data?: true
  }

  export type ContactoCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    assunto?: true
    mensagem?: true
    data?: true
    _all?: true
  }

  export type ContactoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacto to aggregate.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contactos
    **/
    _count?: true | ContactoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactoMaxAggregateInputType
  }

  export type GetContactoAggregateType<T extends ContactoAggregateArgs> = {
        [P in keyof T & keyof AggregateContacto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacto[P]>
      : GetScalarType<T[P], AggregateContacto[P]>
  }




  export type contactoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactoWhereInput
    orderBy?: contactoOrderByWithAggregationInput | contactoOrderByWithAggregationInput[]
    by: ContactoScalarFieldEnum[] | ContactoScalarFieldEnum
    having?: contactoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactoCountAggregateInputType | true
    _avg?: ContactoAvgAggregateInputType
    _sum?: ContactoSumAggregateInputType
    _min?: ContactoMinAggregateInputType
    _max?: ContactoMaxAggregateInputType
  }

  export type ContactoGroupByOutputType = {
    id: number
    nome: string
    email: string
    assunto: string
    mensagem: string
    data: Date | null
    _count: ContactoCountAggregateOutputType | null
    _avg: ContactoAvgAggregateOutputType | null
    _sum: ContactoSumAggregateOutputType | null
    _min: ContactoMinAggregateOutputType | null
    _max: ContactoMaxAggregateOutputType | null
  }

  type GetContactoGroupByPayload<T extends contactoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactoGroupByOutputType[P]>
        }
      >
    >


  export type contactoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    assunto?: boolean
    mensagem?: boolean
    data?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type contactoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    assunto?: boolean
    mensagem?: boolean
    data?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type contactoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    assunto?: boolean
    mensagem?: boolean
    data?: boolean
  }, ExtArgs["result"]["contacto"]>

  export type contactoSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    assunto?: boolean
    mensagem?: boolean
    data?: boolean
  }

  export type contactoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "assunto" | "mensagem" | "data", ExtArgs["result"]["contacto"]>

  export type $contactoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contacto"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      assunto: string
      mensagem: string
      data: Date | null
    }, ExtArgs["result"]["contacto"]>
    composites: {}
  }

  type contactoGetPayload<S extends boolean | null | undefined | contactoDefaultArgs> = $Result.GetResult<Prisma.$contactoPayload, S>

  type contactoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactoCountAggregateInputType | true
    }

  export interface contactoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contacto'], meta: { name: 'contacto' } }
    /**
     * Find zero or one Contacto that matches the filter.
     * @param {contactoFindUniqueArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactoFindUniqueArgs>(args: SelectSubset<T, contactoFindUniqueArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactoFindUniqueOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactoFindUniqueOrThrowArgs>(args: SelectSubset<T, contactoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoFindFirstArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactoFindFirstArgs>(args?: SelectSubset<T, contactoFindFirstArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoFindFirstOrThrowArgs} args - Arguments to find a Contacto
     * @example
     * // Get one Contacto
     * const contacto = await prisma.contacto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactoFindFirstOrThrowArgs>(args?: SelectSubset<T, contactoFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contactos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contactos
     * const contactos = await prisma.contacto.findMany()
     * 
     * // Get first 10 Contactos
     * const contactos = await prisma.contacto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactoWithIdOnly = await prisma.contacto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactoFindManyArgs>(args?: SelectSubset<T, contactoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacto.
     * @param {contactoCreateArgs} args - Arguments to create a Contacto.
     * @example
     * // Create one Contacto
     * const Contacto = await prisma.contacto.create({
     *   data: {
     *     // ... data to create a Contacto
     *   }
     * })
     * 
     */
    create<T extends contactoCreateArgs>(args: SelectSubset<T, contactoCreateArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contactos.
     * @param {contactoCreateManyArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactoCreateManyArgs>(args?: SelectSubset<T, contactoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contactos and returns the data saved in the database.
     * @param {contactoCreateManyAndReturnArgs} args - Arguments to create many Contactos.
     * @example
     * // Create many Contactos
     * const contacto = await prisma.contacto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contactoCreateManyAndReturnArgs>(args?: SelectSubset<T, contactoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacto.
     * @param {contactoDeleteArgs} args - Arguments to delete one Contacto.
     * @example
     * // Delete one Contacto
     * const Contacto = await prisma.contacto.delete({
     *   where: {
     *     // ... filter to delete one Contacto
     *   }
     * })
     * 
     */
    delete<T extends contactoDeleteArgs>(args: SelectSubset<T, contactoDeleteArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacto.
     * @param {contactoUpdateArgs} args - Arguments to update one Contacto.
     * @example
     * // Update one Contacto
     * const contacto = await prisma.contacto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactoUpdateArgs>(args: SelectSubset<T, contactoUpdateArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contactos.
     * @param {contactoDeleteManyArgs} args - Arguments to filter Contactos to delete.
     * @example
     * // Delete a few Contactos
     * const { count } = await prisma.contacto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactoDeleteManyArgs>(args?: SelectSubset<T, contactoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactoUpdateManyArgs>(args: SelectSubset<T, contactoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contactos and returns the data updated in the database.
     * @param {contactoUpdateManyAndReturnArgs} args - Arguments to update many Contactos.
     * @example
     * // Update many Contactos
     * const contacto = await prisma.contacto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contactos and only return the `id`
     * const contactoWithIdOnly = await prisma.contacto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contactoUpdateManyAndReturnArgs>(args: SelectSubset<T, contactoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacto.
     * @param {contactoUpsertArgs} args - Arguments to update or create a Contacto.
     * @example
     * // Update or create a Contacto
     * const contacto = await prisma.contacto.upsert({
     *   create: {
     *     // ... data to create a Contacto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacto we want to update
     *   }
     * })
     */
    upsert<T extends contactoUpsertArgs>(args: SelectSubset<T, contactoUpsertArgs<ExtArgs>>): Prisma__contactoClient<$Result.GetResult<Prisma.$contactoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contactos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoCountArgs} args - Arguments to filter Contactos to count.
     * @example
     * // Count the number of Contactos
     * const count = await prisma.contacto.count({
     *   where: {
     *     // ... the filter for the Contactos we want to count
     *   }
     * })
    **/
    count<T extends contactoCountArgs>(
      args?: Subset<T, contactoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactoAggregateArgs>(args: Subset<T, ContactoAggregateArgs>): Prisma.PrismaPromise<GetContactoAggregateType<T>>

    /**
     * Group by Contacto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contactoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactoGroupByArgs['orderBy'] }
        : { orderBy?: contactoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contactoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contacto model
   */
  readonly fields: contactoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contacto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contacto model
   */
  interface contactoFieldRefs {
    readonly id: FieldRef<"contacto", 'Int'>
    readonly nome: FieldRef<"contacto", 'String'>
    readonly email: FieldRef<"contacto", 'String'>
    readonly assunto: FieldRef<"contacto", 'String'>
    readonly mensagem: FieldRef<"contacto", 'String'>
    readonly data: FieldRef<"contacto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contacto findUnique
   */
  export type contactoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where: contactoWhereUniqueInput
  }

  /**
   * contacto findUniqueOrThrow
   */
  export type contactoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where: contactoWhereUniqueInput
  }

  /**
   * contacto findFirst
   */
  export type contactoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactos.
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * contacto findFirstOrThrow
   */
  export type contactoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * Filter, which contacto to fetch.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contactos.
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contactos.
     */
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * contacto findMany
   */
  export type contactoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * Filter, which contactos to fetch.
     */
    where?: contactoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contactos to fetch.
     */
    orderBy?: contactoOrderByWithRelationInput | contactoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contactos.
     */
    cursor?: contactoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contactos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contactos.
     */
    skip?: number
    distinct?: ContactoScalarFieldEnum | ContactoScalarFieldEnum[]
  }

  /**
   * contacto create
   */
  export type contactoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * The data needed to create a contacto.
     */
    data: XOR<contactoCreateInput, contactoUncheckedCreateInput>
  }

  /**
   * contacto createMany
   */
  export type contactoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contactos.
     */
    data: contactoCreateManyInput | contactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacto createManyAndReturn
   */
  export type contactoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * The data used to create many contactos.
     */
    data: contactoCreateManyInput | contactoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacto update
   */
  export type contactoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * The data needed to update a contacto.
     */
    data: XOR<contactoUpdateInput, contactoUncheckedUpdateInput>
    /**
     * Choose, which contacto to update.
     */
    where: contactoWhereUniqueInput
  }

  /**
   * contacto updateMany
   */
  export type contactoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contactos.
     */
    data: XOR<contactoUpdateManyMutationInput, contactoUncheckedUpdateManyInput>
    /**
     * Filter which contactos to update
     */
    where?: contactoWhereInput
    /**
     * Limit how many contactos to update.
     */
    limit?: number
  }

  /**
   * contacto updateManyAndReturn
   */
  export type contactoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * The data used to update contactos.
     */
    data: XOR<contactoUpdateManyMutationInput, contactoUncheckedUpdateManyInput>
    /**
     * Filter which contactos to update
     */
    where?: contactoWhereInput
    /**
     * Limit how many contactos to update.
     */
    limit?: number
  }

  /**
   * contacto upsert
   */
  export type contactoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * The filter to search for the contacto to update in case it exists.
     */
    where: contactoWhereUniqueInput
    /**
     * In case the contacto found by the `where` argument doesn't exist, create a new contacto with this data.
     */
    create: XOR<contactoCreateInput, contactoUncheckedCreateInput>
    /**
     * In case the contacto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactoUpdateInput, contactoUncheckedUpdateInput>
  }

  /**
   * contacto delete
   */
  export type contactoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
    /**
     * Filter which contacto to delete.
     */
    where: contactoWhereUniqueInput
  }

  /**
   * contacto deleteMany
   */
  export type contactoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contactos to delete
     */
    where?: contactoWhereInput
    /**
     * Limit how many contactos to delete.
     */
    limit?: number
  }

  /**
   * contacto without action
   */
  export type contactoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto
     */
    select?: contactoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto
     */
    omit?: contactoOmit<ExtArgs> | null
  }


  /**
   * Model contacto_modalidade
   */

  export type AggregateContacto_modalidade = {
    _count: Contacto_modalidadeCountAggregateOutputType | null
    _avg: Contacto_modalidadeAvgAggregateOutputType | null
    _sum: Contacto_modalidadeSumAggregateOutputType | null
    _min: Contacto_modalidadeMinAggregateOutputType | null
    _max: Contacto_modalidadeMaxAggregateOutputType | null
  }

  export type Contacto_modalidadeAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type Contacto_modalidadeSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type Contacto_modalidadeMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    responsavel: string | null
    telefone: string | null
    email: string | null
  }

  export type Contacto_modalidadeMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    responsavel: string | null
    telefone: string | null
    email: string | null
  }

  export type Contacto_modalidadeCountAggregateOutputType = {
    id: number
    modalidade_id: number
    responsavel: number
    telefone: number
    email: number
    _all: number
  }


  export type Contacto_modalidadeAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type Contacto_modalidadeSumAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type Contacto_modalidadeMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    responsavel?: true
    telefone?: true
    email?: true
  }

  export type Contacto_modalidadeMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    responsavel?: true
    telefone?: true
    email?: true
  }

  export type Contacto_modalidadeCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    responsavel?: true
    telefone?: true
    email?: true
    _all?: true
  }

  export type Contacto_modalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacto_modalidade to aggregate.
     */
    where?: contacto_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacto_modalidades to fetch.
     */
    orderBy?: contacto_modalidadeOrderByWithRelationInput | contacto_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contacto_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacto_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacto_modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacto_modalidades
    **/
    _count?: true | Contacto_modalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Contacto_modalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Contacto_modalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contacto_modalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contacto_modalidadeMaxAggregateInputType
  }

  export type GetContacto_modalidadeAggregateType<T extends Contacto_modalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateContacto_modalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacto_modalidade[P]>
      : GetScalarType<T[P], AggregateContacto_modalidade[P]>
  }




  export type contacto_modalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contacto_modalidadeWhereInput
    orderBy?: contacto_modalidadeOrderByWithAggregationInput | contacto_modalidadeOrderByWithAggregationInput[]
    by: Contacto_modalidadeScalarFieldEnum[] | Contacto_modalidadeScalarFieldEnum
    having?: contacto_modalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contacto_modalidadeCountAggregateInputType | true
    _avg?: Contacto_modalidadeAvgAggregateInputType
    _sum?: Contacto_modalidadeSumAggregateInputType
    _min?: Contacto_modalidadeMinAggregateInputType
    _max?: Contacto_modalidadeMaxAggregateInputType
  }

  export type Contacto_modalidadeGroupByOutputType = {
    id: number
    modalidade_id: number | null
    responsavel: string | null
    telefone: string | null
    email: string | null
    _count: Contacto_modalidadeCountAggregateOutputType | null
    _avg: Contacto_modalidadeAvgAggregateOutputType | null
    _sum: Contacto_modalidadeSumAggregateOutputType | null
    _min: Contacto_modalidadeMinAggregateOutputType | null
    _max: Contacto_modalidadeMaxAggregateOutputType | null
  }

  type GetContacto_modalidadeGroupByPayload<T extends contacto_modalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contacto_modalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contacto_modalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contacto_modalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], Contacto_modalidadeGroupByOutputType[P]>
        }
      >
    >


  export type contacto_modalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    responsavel?: boolean
    telefone?: boolean
    email?: boolean
    modalidades?: boolean | contacto_modalidade$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["contacto_modalidade"]>

  export type contacto_modalidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    responsavel?: boolean
    telefone?: boolean
    email?: boolean
    modalidades?: boolean | contacto_modalidade$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["contacto_modalidade"]>

  export type contacto_modalidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    responsavel?: boolean
    telefone?: boolean
    email?: boolean
    modalidades?: boolean | contacto_modalidade$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["contacto_modalidade"]>

  export type contacto_modalidadeSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    responsavel?: boolean
    telefone?: boolean
    email?: boolean
  }

  export type contacto_modalidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "responsavel" | "telefone" | "email", ExtArgs["result"]["contacto_modalidade"]>
  export type contacto_modalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | contacto_modalidade$modalidadesArgs<ExtArgs>
  }
  export type contacto_modalidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | contacto_modalidade$modalidadesArgs<ExtArgs>
  }
  export type contacto_modalidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | contacto_modalidade$modalidadesArgs<ExtArgs>
  }

  export type $contacto_modalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contacto_modalidade"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number | null
      responsavel: string | null
      telefone: string | null
      email: string | null
    }, ExtArgs["result"]["contacto_modalidade"]>
    composites: {}
  }

  type contacto_modalidadeGetPayload<S extends boolean | null | undefined | contacto_modalidadeDefaultArgs> = $Result.GetResult<Prisma.$contacto_modalidadePayload, S>

  type contacto_modalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contacto_modalidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contacto_modalidadeCountAggregateInputType | true
    }

  export interface contacto_modalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contacto_modalidade'], meta: { name: 'contacto_modalidade' } }
    /**
     * Find zero or one Contacto_modalidade that matches the filter.
     * @param {contacto_modalidadeFindUniqueArgs} args - Arguments to find a Contacto_modalidade
     * @example
     * // Get one Contacto_modalidade
     * const contacto_modalidade = await prisma.contacto_modalidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contacto_modalidadeFindUniqueArgs>(args: SelectSubset<T, contacto_modalidadeFindUniqueArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacto_modalidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contacto_modalidadeFindUniqueOrThrowArgs} args - Arguments to find a Contacto_modalidade
     * @example
     * // Get one Contacto_modalidade
     * const contacto_modalidade = await prisma.contacto_modalidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contacto_modalidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, contacto_modalidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto_modalidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contacto_modalidadeFindFirstArgs} args - Arguments to find a Contacto_modalidade
     * @example
     * // Get one Contacto_modalidade
     * const contacto_modalidade = await prisma.contacto_modalidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contacto_modalidadeFindFirstArgs>(args?: SelectSubset<T, contacto_modalidadeFindFirstArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacto_modalidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contacto_modalidadeFindFirstOrThrowArgs} args - Arguments to find a Contacto_modalidade
     * @example
     * // Get one Contacto_modalidade
     * const contacto_modalidade = await prisma.contacto_modalidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contacto_modalidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, contacto_modalidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacto_modalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contacto_modalidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacto_modalidades
     * const contacto_modalidades = await prisma.contacto_modalidade.findMany()
     * 
     * // Get first 10 Contacto_modalidades
     * const contacto_modalidades = await prisma.contacto_modalidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contacto_modalidadeWithIdOnly = await prisma.contacto_modalidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contacto_modalidadeFindManyArgs>(args?: SelectSubset<T, contacto_modalidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacto_modalidade.
     * @param {contacto_modalidadeCreateArgs} args - Arguments to create a Contacto_modalidade.
     * @example
     * // Create one Contacto_modalidade
     * const Contacto_modalidade = await prisma.contacto_modalidade.create({
     *   data: {
     *     // ... data to create a Contacto_modalidade
     *   }
     * })
     * 
     */
    create<T extends contacto_modalidadeCreateArgs>(args: SelectSubset<T, contacto_modalidadeCreateArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacto_modalidades.
     * @param {contacto_modalidadeCreateManyArgs} args - Arguments to create many Contacto_modalidades.
     * @example
     * // Create many Contacto_modalidades
     * const contacto_modalidade = await prisma.contacto_modalidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contacto_modalidadeCreateManyArgs>(args?: SelectSubset<T, contacto_modalidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacto_modalidades and returns the data saved in the database.
     * @param {contacto_modalidadeCreateManyAndReturnArgs} args - Arguments to create many Contacto_modalidades.
     * @example
     * // Create many Contacto_modalidades
     * const contacto_modalidade = await prisma.contacto_modalidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacto_modalidades and only return the `id`
     * const contacto_modalidadeWithIdOnly = await prisma.contacto_modalidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contacto_modalidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, contacto_modalidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacto_modalidade.
     * @param {contacto_modalidadeDeleteArgs} args - Arguments to delete one Contacto_modalidade.
     * @example
     * // Delete one Contacto_modalidade
     * const Contacto_modalidade = await prisma.contacto_modalidade.delete({
     *   where: {
     *     // ... filter to delete one Contacto_modalidade
     *   }
     * })
     * 
     */
    delete<T extends contacto_modalidadeDeleteArgs>(args: SelectSubset<T, contacto_modalidadeDeleteArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacto_modalidade.
     * @param {contacto_modalidadeUpdateArgs} args - Arguments to update one Contacto_modalidade.
     * @example
     * // Update one Contacto_modalidade
     * const contacto_modalidade = await prisma.contacto_modalidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contacto_modalidadeUpdateArgs>(args: SelectSubset<T, contacto_modalidadeUpdateArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacto_modalidades.
     * @param {contacto_modalidadeDeleteManyArgs} args - Arguments to filter Contacto_modalidades to delete.
     * @example
     * // Delete a few Contacto_modalidades
     * const { count } = await prisma.contacto_modalidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contacto_modalidadeDeleteManyArgs>(args?: SelectSubset<T, contacto_modalidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacto_modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contacto_modalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacto_modalidades
     * const contacto_modalidade = await prisma.contacto_modalidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contacto_modalidadeUpdateManyArgs>(args: SelectSubset<T, contacto_modalidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacto_modalidades and returns the data updated in the database.
     * @param {contacto_modalidadeUpdateManyAndReturnArgs} args - Arguments to update many Contacto_modalidades.
     * @example
     * // Update many Contacto_modalidades
     * const contacto_modalidade = await prisma.contacto_modalidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacto_modalidades and only return the `id`
     * const contacto_modalidadeWithIdOnly = await prisma.contacto_modalidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contacto_modalidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, contacto_modalidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacto_modalidade.
     * @param {contacto_modalidadeUpsertArgs} args - Arguments to update or create a Contacto_modalidade.
     * @example
     * // Update or create a Contacto_modalidade
     * const contacto_modalidade = await prisma.contacto_modalidade.upsert({
     *   create: {
     *     // ... data to create a Contacto_modalidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacto_modalidade we want to update
     *   }
     * })
     */
    upsert<T extends contacto_modalidadeUpsertArgs>(args: SelectSubset<T, contacto_modalidadeUpsertArgs<ExtArgs>>): Prisma__contacto_modalidadeClient<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacto_modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contacto_modalidadeCountArgs} args - Arguments to filter Contacto_modalidades to count.
     * @example
     * // Count the number of Contacto_modalidades
     * const count = await prisma.contacto_modalidade.count({
     *   where: {
     *     // ... the filter for the Contacto_modalidades we want to count
     *   }
     * })
    **/
    count<T extends contacto_modalidadeCountArgs>(
      args?: Subset<T, contacto_modalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contacto_modalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacto_modalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contacto_modalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contacto_modalidadeAggregateArgs>(args: Subset<T, Contacto_modalidadeAggregateArgs>): Prisma.PrismaPromise<GetContacto_modalidadeAggregateType<T>>

    /**
     * Group by Contacto_modalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contacto_modalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contacto_modalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contacto_modalidadeGroupByArgs['orderBy'] }
        : { orderBy?: contacto_modalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contacto_modalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContacto_modalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contacto_modalidade model
   */
  readonly fields: contacto_modalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contacto_modalidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contacto_modalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends contacto_modalidade$modalidadesArgs<ExtArgs> = {}>(args?: Subset<T, contacto_modalidade$modalidadesArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contacto_modalidade model
   */
  interface contacto_modalidadeFieldRefs {
    readonly id: FieldRef<"contacto_modalidade", 'Int'>
    readonly modalidade_id: FieldRef<"contacto_modalidade", 'Int'>
    readonly responsavel: FieldRef<"contacto_modalidade", 'String'>
    readonly telefone: FieldRef<"contacto_modalidade", 'String'>
    readonly email: FieldRef<"contacto_modalidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contacto_modalidade findUnique
   */
  export type contacto_modalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which contacto_modalidade to fetch.
     */
    where: contacto_modalidadeWhereUniqueInput
  }

  /**
   * contacto_modalidade findUniqueOrThrow
   */
  export type contacto_modalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which contacto_modalidade to fetch.
     */
    where: contacto_modalidadeWhereUniqueInput
  }

  /**
   * contacto_modalidade findFirst
   */
  export type contacto_modalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which contacto_modalidade to fetch.
     */
    where?: contacto_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacto_modalidades to fetch.
     */
    orderBy?: contacto_modalidadeOrderByWithRelationInput | contacto_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacto_modalidades.
     */
    cursor?: contacto_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacto_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacto_modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacto_modalidades.
     */
    distinct?: Contacto_modalidadeScalarFieldEnum | Contacto_modalidadeScalarFieldEnum[]
  }

  /**
   * contacto_modalidade findFirstOrThrow
   */
  export type contacto_modalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which contacto_modalidade to fetch.
     */
    where?: contacto_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacto_modalidades to fetch.
     */
    orderBy?: contacto_modalidadeOrderByWithRelationInput | contacto_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacto_modalidades.
     */
    cursor?: contacto_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacto_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacto_modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacto_modalidades.
     */
    distinct?: Contacto_modalidadeScalarFieldEnum | Contacto_modalidadeScalarFieldEnum[]
  }

  /**
   * contacto_modalidade findMany
   */
  export type contacto_modalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which contacto_modalidades to fetch.
     */
    where?: contacto_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacto_modalidades to fetch.
     */
    orderBy?: contacto_modalidadeOrderByWithRelationInput | contacto_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacto_modalidades.
     */
    cursor?: contacto_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacto_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacto_modalidades.
     */
    skip?: number
    distinct?: Contacto_modalidadeScalarFieldEnum | Contacto_modalidadeScalarFieldEnum[]
  }

  /**
   * contacto_modalidade create
   */
  export type contacto_modalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a contacto_modalidade.
     */
    data?: XOR<contacto_modalidadeCreateInput, contacto_modalidadeUncheckedCreateInput>
  }

  /**
   * contacto_modalidade createMany
   */
  export type contacto_modalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacto_modalidades.
     */
    data: contacto_modalidadeCreateManyInput | contacto_modalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contacto_modalidade createManyAndReturn
   */
  export type contacto_modalidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * The data used to create many contacto_modalidades.
     */
    data: contacto_modalidadeCreateManyInput | contacto_modalidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * contacto_modalidade update
   */
  export type contacto_modalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a contacto_modalidade.
     */
    data: XOR<contacto_modalidadeUpdateInput, contacto_modalidadeUncheckedUpdateInput>
    /**
     * Choose, which contacto_modalidade to update.
     */
    where: contacto_modalidadeWhereUniqueInput
  }

  /**
   * contacto_modalidade updateMany
   */
  export type contacto_modalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacto_modalidades.
     */
    data: XOR<contacto_modalidadeUpdateManyMutationInput, contacto_modalidadeUncheckedUpdateManyInput>
    /**
     * Filter which contacto_modalidades to update
     */
    where?: contacto_modalidadeWhereInput
    /**
     * Limit how many contacto_modalidades to update.
     */
    limit?: number
  }

  /**
   * contacto_modalidade updateManyAndReturn
   */
  export type contacto_modalidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * The data used to update contacto_modalidades.
     */
    data: XOR<contacto_modalidadeUpdateManyMutationInput, contacto_modalidadeUncheckedUpdateManyInput>
    /**
     * Filter which contacto_modalidades to update
     */
    where?: contacto_modalidadeWhereInput
    /**
     * Limit how many contacto_modalidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * contacto_modalidade upsert
   */
  export type contacto_modalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the contacto_modalidade to update in case it exists.
     */
    where: contacto_modalidadeWhereUniqueInput
    /**
     * In case the contacto_modalidade found by the `where` argument doesn't exist, create a new contacto_modalidade with this data.
     */
    create: XOR<contacto_modalidadeCreateInput, contacto_modalidadeUncheckedCreateInput>
    /**
     * In case the contacto_modalidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contacto_modalidadeUpdateInput, contacto_modalidadeUncheckedUpdateInput>
  }

  /**
   * contacto_modalidade delete
   */
  export type contacto_modalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    /**
     * Filter which contacto_modalidade to delete.
     */
    where: contacto_modalidadeWhereUniqueInput
  }

  /**
   * contacto_modalidade deleteMany
   */
  export type contacto_modalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacto_modalidades to delete
     */
    where?: contacto_modalidadeWhereInput
    /**
     * Limit how many contacto_modalidades to delete.
     */
    limit?: number
  }

  /**
   * contacto_modalidade.modalidades
   */
  export type contacto_modalidade$modalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    where?: modalidadesWhereInput
  }

  /**
   * contacto_modalidade without action
   */
  export type contacto_modalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
  }


  /**
   * Model detalhes_modalidade
   */

  export type AggregateDetalhes_modalidade = {
    _count: Detalhes_modalidadeCountAggregateOutputType | null
    _avg: Detalhes_modalidadeAvgAggregateOutputType | null
    _sum: Detalhes_modalidadeSumAggregateOutputType | null
    _min: Detalhes_modalidadeMinAggregateOutputType | null
    _max: Detalhes_modalidadeMaxAggregateOutputType | null
  }

  export type Detalhes_modalidadeAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type Detalhes_modalidadeSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type Detalhes_modalidadeMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    introducao: string | null
    metodologia: string | null
    avaliacao: string | null
    progressao: string | null
  }

  export type Detalhes_modalidadeMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    introducao: string | null
    metodologia: string | null
    avaliacao: string | null
    progressao: string | null
  }

  export type Detalhes_modalidadeCountAggregateOutputType = {
    id: number
    modalidade_id: number
    introducao: number
    metodologia: number
    avaliacao: number
    progressao: number
    _all: number
  }


  export type Detalhes_modalidadeAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type Detalhes_modalidadeSumAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type Detalhes_modalidadeMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    introducao?: true
    metodologia?: true
    avaliacao?: true
    progressao?: true
  }

  export type Detalhes_modalidadeMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    introducao?: true
    metodologia?: true
    avaliacao?: true
    progressao?: true
  }

  export type Detalhes_modalidadeCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    introducao?: true
    metodologia?: true
    avaliacao?: true
    progressao?: true
    _all?: true
  }

  export type Detalhes_modalidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalhes_modalidade to aggregate.
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalhes_modalidades to fetch.
     */
    orderBy?: detalhes_modalidadeOrderByWithRelationInput | detalhes_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detalhes_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalhes_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalhes_modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detalhes_modalidades
    **/
    _count?: true | Detalhes_modalidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detalhes_modalidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detalhes_modalidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detalhes_modalidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detalhes_modalidadeMaxAggregateInputType
  }

  export type GetDetalhes_modalidadeAggregateType<T extends Detalhes_modalidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalhes_modalidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalhes_modalidade[P]>
      : GetScalarType<T[P], AggregateDetalhes_modalidade[P]>
  }




  export type detalhes_modalidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detalhes_modalidadeWhereInput
    orderBy?: detalhes_modalidadeOrderByWithAggregationInput | detalhes_modalidadeOrderByWithAggregationInput[]
    by: Detalhes_modalidadeScalarFieldEnum[] | Detalhes_modalidadeScalarFieldEnum
    having?: detalhes_modalidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detalhes_modalidadeCountAggregateInputType | true
    _avg?: Detalhes_modalidadeAvgAggregateInputType
    _sum?: Detalhes_modalidadeSumAggregateInputType
    _min?: Detalhes_modalidadeMinAggregateInputType
    _max?: Detalhes_modalidadeMaxAggregateInputType
  }

  export type Detalhes_modalidadeGroupByOutputType = {
    id: number
    modalidade_id: number | null
    introducao: string | null
    metodologia: string | null
    avaliacao: string | null
    progressao: string | null
    _count: Detalhes_modalidadeCountAggregateOutputType | null
    _avg: Detalhes_modalidadeAvgAggregateOutputType | null
    _sum: Detalhes_modalidadeSumAggregateOutputType | null
    _min: Detalhes_modalidadeMinAggregateOutputType | null
    _max: Detalhes_modalidadeMaxAggregateOutputType | null
  }

  type GetDetalhes_modalidadeGroupByPayload<T extends detalhes_modalidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detalhes_modalidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detalhes_modalidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detalhes_modalidadeGroupByOutputType[P]>
            : GetScalarType<T[P], Detalhes_modalidadeGroupByOutputType[P]>
        }
      >
    >


  export type detalhes_modalidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    introducao?: boolean
    metodologia?: boolean
    avaliacao?: boolean
    progressao?: boolean
    modalidades?: boolean | detalhes_modalidade$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["detalhes_modalidade"]>

  export type detalhes_modalidadeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    introducao?: boolean
    metodologia?: boolean
    avaliacao?: boolean
    progressao?: boolean
    modalidades?: boolean | detalhes_modalidade$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["detalhes_modalidade"]>

  export type detalhes_modalidadeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    introducao?: boolean
    metodologia?: boolean
    avaliacao?: boolean
    progressao?: boolean
    modalidades?: boolean | detalhes_modalidade$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["detalhes_modalidade"]>

  export type detalhes_modalidadeSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    introducao?: boolean
    metodologia?: boolean
    avaliacao?: boolean
    progressao?: boolean
  }

  export type detalhes_modalidadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "introducao" | "metodologia" | "avaliacao" | "progressao", ExtArgs["result"]["detalhes_modalidade"]>
  export type detalhes_modalidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | detalhes_modalidade$modalidadesArgs<ExtArgs>
  }
  export type detalhes_modalidadeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | detalhes_modalidade$modalidadesArgs<ExtArgs>
  }
  export type detalhes_modalidadeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | detalhes_modalidade$modalidadesArgs<ExtArgs>
  }

  export type $detalhes_modalidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detalhes_modalidade"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number | null
      introducao: string | null
      metodologia: string | null
      avaliacao: string | null
      progressao: string | null
    }, ExtArgs["result"]["detalhes_modalidade"]>
    composites: {}
  }

  type detalhes_modalidadeGetPayload<S extends boolean | null | undefined | detalhes_modalidadeDefaultArgs> = $Result.GetResult<Prisma.$detalhes_modalidadePayload, S>

  type detalhes_modalidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detalhes_modalidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detalhes_modalidadeCountAggregateInputType | true
    }

  export interface detalhes_modalidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detalhes_modalidade'], meta: { name: 'detalhes_modalidade' } }
    /**
     * Find zero or one Detalhes_modalidade that matches the filter.
     * @param {detalhes_modalidadeFindUniqueArgs} args - Arguments to find a Detalhes_modalidade
     * @example
     * // Get one Detalhes_modalidade
     * const detalhes_modalidade = await prisma.detalhes_modalidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detalhes_modalidadeFindUniqueArgs>(args: SelectSubset<T, detalhes_modalidadeFindUniqueArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalhes_modalidade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detalhes_modalidadeFindUniqueOrThrowArgs} args - Arguments to find a Detalhes_modalidade
     * @example
     * // Get one Detalhes_modalidade
     * const detalhes_modalidade = await prisma.detalhes_modalidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detalhes_modalidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, detalhes_modalidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalhes_modalidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalhes_modalidadeFindFirstArgs} args - Arguments to find a Detalhes_modalidade
     * @example
     * // Get one Detalhes_modalidade
     * const detalhes_modalidade = await prisma.detalhes_modalidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detalhes_modalidadeFindFirstArgs>(args?: SelectSubset<T, detalhes_modalidadeFindFirstArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalhes_modalidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalhes_modalidadeFindFirstOrThrowArgs} args - Arguments to find a Detalhes_modalidade
     * @example
     * // Get one Detalhes_modalidade
     * const detalhes_modalidade = await prisma.detalhes_modalidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detalhes_modalidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, detalhes_modalidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalhes_modalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalhes_modalidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalhes_modalidades
     * const detalhes_modalidades = await prisma.detalhes_modalidade.findMany()
     * 
     * // Get first 10 Detalhes_modalidades
     * const detalhes_modalidades = await prisma.detalhes_modalidade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detalhes_modalidadeWithIdOnly = await prisma.detalhes_modalidade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detalhes_modalidadeFindManyArgs>(args?: SelectSubset<T, detalhes_modalidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalhes_modalidade.
     * @param {detalhes_modalidadeCreateArgs} args - Arguments to create a Detalhes_modalidade.
     * @example
     * // Create one Detalhes_modalidade
     * const Detalhes_modalidade = await prisma.detalhes_modalidade.create({
     *   data: {
     *     // ... data to create a Detalhes_modalidade
     *   }
     * })
     * 
     */
    create<T extends detalhes_modalidadeCreateArgs>(args: SelectSubset<T, detalhes_modalidadeCreateArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalhes_modalidades.
     * @param {detalhes_modalidadeCreateManyArgs} args - Arguments to create many Detalhes_modalidades.
     * @example
     * // Create many Detalhes_modalidades
     * const detalhes_modalidade = await prisma.detalhes_modalidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detalhes_modalidadeCreateManyArgs>(args?: SelectSubset<T, detalhes_modalidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalhes_modalidades and returns the data saved in the database.
     * @param {detalhes_modalidadeCreateManyAndReturnArgs} args - Arguments to create many Detalhes_modalidades.
     * @example
     * // Create many Detalhes_modalidades
     * const detalhes_modalidade = await prisma.detalhes_modalidade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalhes_modalidades and only return the `id`
     * const detalhes_modalidadeWithIdOnly = await prisma.detalhes_modalidade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detalhes_modalidadeCreateManyAndReturnArgs>(args?: SelectSubset<T, detalhes_modalidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalhes_modalidade.
     * @param {detalhes_modalidadeDeleteArgs} args - Arguments to delete one Detalhes_modalidade.
     * @example
     * // Delete one Detalhes_modalidade
     * const Detalhes_modalidade = await prisma.detalhes_modalidade.delete({
     *   where: {
     *     // ... filter to delete one Detalhes_modalidade
     *   }
     * })
     * 
     */
    delete<T extends detalhes_modalidadeDeleteArgs>(args: SelectSubset<T, detalhes_modalidadeDeleteArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalhes_modalidade.
     * @param {detalhes_modalidadeUpdateArgs} args - Arguments to update one Detalhes_modalidade.
     * @example
     * // Update one Detalhes_modalidade
     * const detalhes_modalidade = await prisma.detalhes_modalidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detalhes_modalidadeUpdateArgs>(args: SelectSubset<T, detalhes_modalidadeUpdateArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalhes_modalidades.
     * @param {detalhes_modalidadeDeleteManyArgs} args - Arguments to filter Detalhes_modalidades to delete.
     * @example
     * // Delete a few Detalhes_modalidades
     * const { count } = await prisma.detalhes_modalidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detalhes_modalidadeDeleteManyArgs>(args?: SelectSubset<T, detalhes_modalidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalhes_modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalhes_modalidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalhes_modalidades
     * const detalhes_modalidade = await prisma.detalhes_modalidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detalhes_modalidadeUpdateManyArgs>(args: SelectSubset<T, detalhes_modalidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalhes_modalidades and returns the data updated in the database.
     * @param {detalhes_modalidadeUpdateManyAndReturnArgs} args - Arguments to update many Detalhes_modalidades.
     * @example
     * // Update many Detalhes_modalidades
     * const detalhes_modalidade = await prisma.detalhes_modalidade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalhes_modalidades and only return the `id`
     * const detalhes_modalidadeWithIdOnly = await prisma.detalhes_modalidade.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detalhes_modalidadeUpdateManyAndReturnArgs>(args: SelectSubset<T, detalhes_modalidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalhes_modalidade.
     * @param {detalhes_modalidadeUpsertArgs} args - Arguments to update or create a Detalhes_modalidade.
     * @example
     * // Update or create a Detalhes_modalidade
     * const detalhes_modalidade = await prisma.detalhes_modalidade.upsert({
     *   create: {
     *     // ... data to create a Detalhes_modalidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalhes_modalidade we want to update
     *   }
     * })
     */
    upsert<T extends detalhes_modalidadeUpsertArgs>(args: SelectSubset<T, detalhes_modalidadeUpsertArgs<ExtArgs>>): Prisma__detalhes_modalidadeClient<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalhes_modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalhes_modalidadeCountArgs} args - Arguments to filter Detalhes_modalidades to count.
     * @example
     * // Count the number of Detalhes_modalidades
     * const count = await prisma.detalhes_modalidade.count({
     *   where: {
     *     // ... the filter for the Detalhes_modalidades we want to count
     *   }
     * })
    **/
    count<T extends detalhes_modalidadeCountArgs>(
      args?: Subset<T, detalhes_modalidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detalhes_modalidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalhes_modalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detalhes_modalidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Detalhes_modalidadeAggregateArgs>(args: Subset<T, Detalhes_modalidadeAggregateArgs>): Prisma.PrismaPromise<GetDetalhes_modalidadeAggregateType<T>>

    /**
     * Group by Detalhes_modalidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detalhes_modalidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends detalhes_modalidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detalhes_modalidadeGroupByArgs['orderBy'] }
        : { orderBy?: detalhes_modalidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, detalhes_modalidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalhes_modalidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detalhes_modalidade model
   */
  readonly fields: detalhes_modalidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detalhes_modalidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detalhes_modalidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends detalhes_modalidade$modalidadesArgs<ExtArgs> = {}>(args?: Subset<T, detalhes_modalidade$modalidadesArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the detalhes_modalidade model
   */
  interface detalhes_modalidadeFieldRefs {
    readonly id: FieldRef<"detalhes_modalidade", 'Int'>
    readonly modalidade_id: FieldRef<"detalhes_modalidade", 'Int'>
    readonly introducao: FieldRef<"detalhes_modalidade", 'String'>
    readonly metodologia: FieldRef<"detalhes_modalidade", 'String'>
    readonly avaliacao: FieldRef<"detalhes_modalidade", 'String'>
    readonly progressao: FieldRef<"detalhes_modalidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * detalhes_modalidade findUnique
   */
  export type detalhes_modalidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which detalhes_modalidade to fetch.
     */
    where: detalhes_modalidadeWhereUniqueInput
  }

  /**
   * detalhes_modalidade findUniqueOrThrow
   */
  export type detalhes_modalidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which detalhes_modalidade to fetch.
     */
    where: detalhes_modalidadeWhereUniqueInput
  }

  /**
   * detalhes_modalidade findFirst
   */
  export type detalhes_modalidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which detalhes_modalidade to fetch.
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalhes_modalidades to fetch.
     */
    orderBy?: detalhes_modalidadeOrderByWithRelationInput | detalhes_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalhes_modalidades.
     */
    cursor?: detalhes_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalhes_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalhes_modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalhes_modalidades.
     */
    distinct?: Detalhes_modalidadeScalarFieldEnum | Detalhes_modalidadeScalarFieldEnum[]
  }

  /**
   * detalhes_modalidade findFirstOrThrow
   */
  export type detalhes_modalidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which detalhes_modalidade to fetch.
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalhes_modalidades to fetch.
     */
    orderBy?: detalhes_modalidadeOrderByWithRelationInput | detalhes_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detalhes_modalidades.
     */
    cursor?: detalhes_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalhes_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalhes_modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detalhes_modalidades.
     */
    distinct?: Detalhes_modalidadeScalarFieldEnum | Detalhes_modalidadeScalarFieldEnum[]
  }

  /**
   * detalhes_modalidade findMany
   */
  export type detalhes_modalidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * Filter, which detalhes_modalidades to fetch.
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detalhes_modalidades to fetch.
     */
    orderBy?: detalhes_modalidadeOrderByWithRelationInput | detalhes_modalidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detalhes_modalidades.
     */
    cursor?: detalhes_modalidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detalhes_modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detalhes_modalidades.
     */
    skip?: number
    distinct?: Detalhes_modalidadeScalarFieldEnum | Detalhes_modalidadeScalarFieldEnum[]
  }

  /**
   * detalhes_modalidade create
   */
  export type detalhes_modalidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a detalhes_modalidade.
     */
    data?: XOR<detalhes_modalidadeCreateInput, detalhes_modalidadeUncheckedCreateInput>
  }

  /**
   * detalhes_modalidade createMany
   */
  export type detalhes_modalidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detalhes_modalidades.
     */
    data: detalhes_modalidadeCreateManyInput | detalhes_modalidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detalhes_modalidade createManyAndReturn
   */
  export type detalhes_modalidadeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * The data used to create many detalhes_modalidades.
     */
    data: detalhes_modalidadeCreateManyInput | detalhes_modalidadeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalhes_modalidade update
   */
  export type detalhes_modalidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a detalhes_modalidade.
     */
    data: XOR<detalhes_modalidadeUpdateInput, detalhes_modalidadeUncheckedUpdateInput>
    /**
     * Choose, which detalhes_modalidade to update.
     */
    where: detalhes_modalidadeWhereUniqueInput
  }

  /**
   * detalhes_modalidade updateMany
   */
  export type detalhes_modalidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detalhes_modalidades.
     */
    data: XOR<detalhes_modalidadeUpdateManyMutationInput, detalhes_modalidadeUncheckedUpdateManyInput>
    /**
     * Filter which detalhes_modalidades to update
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * Limit how many detalhes_modalidades to update.
     */
    limit?: number
  }

  /**
   * detalhes_modalidade updateManyAndReturn
   */
  export type detalhes_modalidadeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * The data used to update detalhes_modalidades.
     */
    data: XOR<detalhes_modalidadeUpdateManyMutationInput, detalhes_modalidadeUncheckedUpdateManyInput>
    /**
     * Filter which detalhes_modalidades to update
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * Limit how many detalhes_modalidades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detalhes_modalidade upsert
   */
  export type detalhes_modalidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the detalhes_modalidade to update in case it exists.
     */
    where: detalhes_modalidadeWhereUniqueInput
    /**
     * In case the detalhes_modalidade found by the `where` argument doesn't exist, create a new detalhes_modalidade with this data.
     */
    create: XOR<detalhes_modalidadeCreateInput, detalhes_modalidadeUncheckedCreateInput>
    /**
     * In case the detalhes_modalidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detalhes_modalidadeUpdateInput, detalhes_modalidadeUncheckedUpdateInput>
  }

  /**
   * detalhes_modalidade delete
   */
  export type detalhes_modalidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    /**
     * Filter which detalhes_modalidade to delete.
     */
    where: detalhes_modalidadeWhereUniqueInput
  }

  /**
   * detalhes_modalidade deleteMany
   */
  export type detalhes_modalidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detalhes_modalidades to delete
     */
    where?: detalhes_modalidadeWhereInput
    /**
     * Limit how many detalhes_modalidades to delete.
     */
    limit?: number
  }

  /**
   * detalhes_modalidade.modalidades
   */
  export type detalhes_modalidade$modalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    where?: modalidadesWhereInput
  }

  /**
   * detalhes_modalidade without action
   */
  export type detalhes_modalidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
  }


  /**
   * Model equipamento
   */

  export type AggregateEquipamento = {
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  export type EquipamentoAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type EquipamentoSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type EquipamentoMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    nome: string | null
  }

  export type EquipamentoMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    nome: string | null
  }

  export type EquipamentoCountAggregateOutputType = {
    id: number
    modalidade_id: number
    nome: number
    _all: number
  }


  export type EquipamentoAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type EquipamentoSumAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type EquipamentoMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    nome?: true
  }

  export type EquipamentoMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    nome?: true
  }

  export type EquipamentoCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    nome?: true
    _all?: true
  }

  export type EquipamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipamento to aggregate.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned equipamentos
    **/
    _count?: true | EquipamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipamentoMaxAggregateInputType
  }

  export type GetEquipamentoAggregateType<T extends EquipamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipamento[P]>
      : GetScalarType<T[P], AggregateEquipamento[P]>
  }




  export type equipamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithAggregationInput | equipamentoOrderByWithAggregationInput[]
    by: EquipamentoScalarFieldEnum[] | EquipamentoScalarFieldEnum
    having?: equipamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipamentoCountAggregateInputType | true
    _avg?: EquipamentoAvgAggregateInputType
    _sum?: EquipamentoSumAggregateInputType
    _min?: EquipamentoMinAggregateInputType
    _max?: EquipamentoMaxAggregateInputType
  }

  export type EquipamentoGroupByOutputType = {
    id: number
    modalidade_id: number | null
    nome: string | null
    _count: EquipamentoCountAggregateOutputType | null
    _avg: EquipamentoAvgAggregateOutputType | null
    _sum: EquipamentoSumAggregateOutputType | null
    _min: EquipamentoMinAggregateOutputType | null
    _max: EquipamentoMaxAggregateOutputType | null
  }

  type GetEquipamentoGroupByPayload<T extends equipamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
            : GetScalarType<T[P], EquipamentoGroupByOutputType[P]>
        }
      >
    >


  export type equipamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
    modalidades?: boolean | equipamento$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type equipamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
    modalidades?: boolean | equipamento$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type equipamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
    modalidades?: boolean | equipamento$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["equipamento"]>

  export type equipamentoSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    nome?: boolean
  }

  export type equipamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "nome", ExtArgs["result"]["equipamento"]>
  export type equipamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | equipamento$modalidadesArgs<ExtArgs>
  }
  export type equipamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | equipamento$modalidadesArgs<ExtArgs>
  }
  export type equipamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | equipamento$modalidadesArgs<ExtArgs>
  }

  export type $equipamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "equipamento"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number | null
      nome: string | null
    }, ExtArgs["result"]["equipamento"]>
    composites: {}
  }

  type equipamentoGetPayload<S extends boolean | null | undefined | equipamentoDefaultArgs> = $Result.GetResult<Prisma.$equipamentoPayload, S>

  type equipamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<equipamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipamentoCountAggregateInputType | true
    }

  export interface equipamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['equipamento'], meta: { name: 'equipamento' } }
    /**
     * Find zero or one Equipamento that matches the filter.
     * @param {equipamentoFindUniqueArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends equipamentoFindUniqueArgs>(args: SelectSubset<T, equipamentoFindUniqueArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {equipamentoFindUniqueOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends equipamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, equipamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindFirstArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends equipamentoFindFirstArgs>(args?: SelectSubset<T, equipamentoFindFirstArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindFirstOrThrowArgs} args - Arguments to find a Equipamento
     * @example
     * // Get one Equipamento
     * const equipamento = await prisma.equipamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends equipamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, equipamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipamentos
     * const equipamentos = await prisma.equipamento.findMany()
     * 
     * // Get first 10 Equipamentos
     * const equipamentos = await prisma.equipamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends equipamentoFindManyArgs>(args?: SelectSubset<T, equipamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipamento.
     * @param {equipamentoCreateArgs} args - Arguments to create a Equipamento.
     * @example
     * // Create one Equipamento
     * const Equipamento = await prisma.equipamento.create({
     *   data: {
     *     // ... data to create a Equipamento
     *   }
     * })
     * 
     */
    create<T extends equipamentoCreateArgs>(args: SelectSubset<T, equipamentoCreateArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipamentos.
     * @param {equipamentoCreateManyArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends equipamentoCreateManyArgs>(args?: SelectSubset<T, equipamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipamentos and returns the data saved in the database.
     * @param {equipamentoCreateManyAndReturnArgs} args - Arguments to create many Equipamentos.
     * @example
     * // Create many Equipamentos
     * const equipamento = await prisma.equipamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipamentos and only return the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends equipamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, equipamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipamento.
     * @param {equipamentoDeleteArgs} args - Arguments to delete one Equipamento.
     * @example
     * // Delete one Equipamento
     * const Equipamento = await prisma.equipamento.delete({
     *   where: {
     *     // ... filter to delete one Equipamento
     *   }
     * })
     * 
     */
    delete<T extends equipamentoDeleteArgs>(args: SelectSubset<T, equipamentoDeleteArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipamento.
     * @param {equipamentoUpdateArgs} args - Arguments to update one Equipamento.
     * @example
     * // Update one Equipamento
     * const equipamento = await prisma.equipamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends equipamentoUpdateArgs>(args: SelectSubset<T, equipamentoUpdateArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipamentos.
     * @param {equipamentoDeleteManyArgs} args - Arguments to filter Equipamentos to delete.
     * @example
     * // Delete a few Equipamentos
     * const { count } = await prisma.equipamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends equipamentoDeleteManyArgs>(args?: SelectSubset<T, equipamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends equipamentoUpdateManyArgs>(args: SelectSubset<T, equipamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipamentos and returns the data updated in the database.
     * @param {equipamentoUpdateManyAndReturnArgs} args - Arguments to update many Equipamentos.
     * @example
     * // Update many Equipamentos
     * const equipamento = await prisma.equipamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipamentos and only return the `id`
     * const equipamentoWithIdOnly = await prisma.equipamento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends equipamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, equipamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipamento.
     * @param {equipamentoUpsertArgs} args - Arguments to update or create a Equipamento.
     * @example
     * // Update or create a Equipamento
     * const equipamento = await prisma.equipamento.upsert({
     *   create: {
     *     // ... data to create a Equipamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipamento we want to update
     *   }
     * })
     */
    upsert<T extends equipamentoUpsertArgs>(args: SelectSubset<T, equipamentoUpsertArgs<ExtArgs>>): Prisma__equipamentoClient<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoCountArgs} args - Arguments to filter Equipamentos to count.
     * @example
     * // Count the number of Equipamentos
     * const count = await prisma.equipamento.count({
     *   where: {
     *     // ... the filter for the Equipamentos we want to count
     *   }
     * })
    **/
    count<T extends equipamentoCountArgs>(
      args?: Subset<T, equipamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipamentoAggregateArgs>(args: Subset<T, EquipamentoAggregateArgs>): Prisma.PrismaPromise<GetEquipamentoAggregateType<T>>

    /**
     * Group by Equipamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {equipamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends equipamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: equipamentoGroupByArgs['orderBy'] }
        : { orderBy?: equipamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, equipamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the equipamento model
   */
  readonly fields: equipamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for equipamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__equipamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends equipamento$modalidadesArgs<ExtArgs> = {}>(args?: Subset<T, equipamento$modalidadesArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the equipamento model
   */
  interface equipamentoFieldRefs {
    readonly id: FieldRef<"equipamento", 'Int'>
    readonly modalidade_id: FieldRef<"equipamento", 'Int'>
    readonly nome: FieldRef<"equipamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * equipamento findUnique
   */
  export type equipamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento findUniqueOrThrow
   */
  export type equipamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento findFirst
   */
  export type equipamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento findFirstOrThrow
   */
  export type equipamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamento to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of equipamentos.
     */
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento findMany
   */
  export type equipamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter, which equipamentos to fetch.
     */
    where?: equipamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of equipamentos to fetch.
     */
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing equipamentos.
     */
    cursor?: equipamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` equipamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` equipamentos.
     */
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * equipamento create
   */
  export type equipamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a equipamento.
     */
    data?: XOR<equipamentoCreateInput, equipamentoUncheckedCreateInput>
  }

  /**
   * equipamento createMany
   */
  export type equipamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many equipamentos.
     */
    data: equipamentoCreateManyInput | equipamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * equipamento createManyAndReturn
   */
  export type equipamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * The data used to create many equipamentos.
     */
    data: equipamentoCreateManyInput | equipamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * equipamento update
   */
  export type equipamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a equipamento.
     */
    data: XOR<equipamentoUpdateInput, equipamentoUncheckedUpdateInput>
    /**
     * Choose, which equipamento to update.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento updateMany
   */
  export type equipamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update equipamentos.
     */
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyInput>
    /**
     * Filter which equipamentos to update
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to update.
     */
    limit?: number
  }

  /**
   * equipamento updateManyAndReturn
   */
  export type equipamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * The data used to update equipamentos.
     */
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyInput>
    /**
     * Filter which equipamentos to update
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * equipamento upsert
   */
  export type equipamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the equipamento to update in case it exists.
     */
    where: equipamentoWhereUniqueInput
    /**
     * In case the equipamento found by the `where` argument doesn't exist, create a new equipamento with this data.
     */
    create: XOR<equipamentoCreateInput, equipamentoUncheckedCreateInput>
    /**
     * In case the equipamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<equipamentoUpdateInput, equipamentoUncheckedUpdateInput>
  }

  /**
   * equipamento delete
   */
  export type equipamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    /**
     * Filter which equipamento to delete.
     */
    where: equipamentoWhereUniqueInput
  }

  /**
   * equipamento deleteMany
   */
  export type equipamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which equipamentos to delete
     */
    where?: equipamentoWhereInput
    /**
     * Limit how many equipamentos to delete.
     */
    limit?: number
  }

  /**
   * equipamento.modalidades
   */
  export type equipamento$modalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    where?: modalidadesWhereInput
  }

  /**
   * equipamento without action
   */
  export type equipamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
  }


  /**
   * Model horarios
   */

  export type AggregateHorarios = {
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  export type HorariosAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type HorariosSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type HorariosMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    dia: string | null
    inicio: Date | null
    fim: Date | null
    nivel: string | null
    grupo: string | null
  }

  export type HorariosMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    dia: string | null
    inicio: Date | null
    fim: Date | null
    nivel: string | null
    grupo: string | null
  }

  export type HorariosCountAggregateOutputType = {
    id: number
    modalidade_id: number
    dia: number
    inicio: number
    fim: number
    nivel: number
    grupo: number
    _all: number
  }


  export type HorariosAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type HorariosSumAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type HorariosMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    dia?: true
    inicio?: true
    fim?: true
    nivel?: true
    grupo?: true
  }

  export type HorariosMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    dia?: true
    inicio?: true
    fim?: true
    nivel?: true
    grupo?: true
  }

  export type HorariosCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    dia?: true
    inicio?: true
    fim?: true
    nivel?: true
    grupo?: true
    _all?: true
  }

  export type HorariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to aggregate.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned horarios
    **/
    _count?: true | HorariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HorariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HorariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HorariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HorariosMaxAggregateInputType
  }

  export type GetHorariosAggregateType<T extends HorariosAggregateArgs> = {
        [P in keyof T & keyof AggregateHorarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHorarios[P]>
      : GetScalarType<T[P], AggregateHorarios[P]>
  }




  export type horariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: horariosWhereInput
    orderBy?: horariosOrderByWithAggregationInput | horariosOrderByWithAggregationInput[]
    by: HorariosScalarFieldEnum[] | HorariosScalarFieldEnum
    having?: horariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HorariosCountAggregateInputType | true
    _avg?: HorariosAvgAggregateInputType
    _sum?: HorariosSumAggregateInputType
    _min?: HorariosMinAggregateInputType
    _max?: HorariosMaxAggregateInputType
  }

  export type HorariosGroupByOutputType = {
    id: number
    modalidade_id: number | null
    dia: string | null
    inicio: Date | null
    fim: Date | null
    nivel: string | null
    grupo: string | null
    _count: HorariosCountAggregateOutputType | null
    _avg: HorariosAvgAggregateOutputType | null
    _sum: HorariosSumAggregateOutputType | null
    _min: HorariosMinAggregateOutputType | null
    _max: HorariosMaxAggregateOutputType | null
  }

  type GetHorariosGroupByPayload<T extends horariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HorariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HorariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HorariosGroupByOutputType[P]>
            : GetScalarType<T[P], HorariosGroupByOutputType[P]>
        }
      >
    >


  export type horariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    dia?: boolean
    inicio?: boolean
    fim?: boolean
    nivel?: boolean
    grupo?: boolean
    modalidades?: boolean | horarios$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["horarios"]>

  export type horariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    dia?: boolean
    inicio?: boolean
    fim?: boolean
    nivel?: boolean
    grupo?: boolean
    modalidades?: boolean | horarios$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["horarios"]>

  export type horariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    dia?: boolean
    inicio?: boolean
    fim?: boolean
    nivel?: boolean
    grupo?: boolean
    modalidades?: boolean | horarios$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["horarios"]>

  export type horariosSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    dia?: boolean
    inicio?: boolean
    fim?: boolean
    nivel?: boolean
    grupo?: boolean
  }

  export type horariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "dia" | "inicio" | "fim" | "nivel" | "grupo", ExtArgs["result"]["horarios"]>
  export type horariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | horarios$modalidadesArgs<ExtArgs>
  }
  export type horariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | horarios$modalidadesArgs<ExtArgs>
  }
  export type horariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | horarios$modalidadesArgs<ExtArgs>
  }

  export type $horariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "horarios"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number | null
      dia: string | null
      inicio: Date | null
      fim: Date | null
      nivel: string | null
      grupo: string | null
    }, ExtArgs["result"]["horarios"]>
    composites: {}
  }

  type horariosGetPayload<S extends boolean | null | undefined | horariosDefaultArgs> = $Result.GetResult<Prisma.$horariosPayload, S>

  type horariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<horariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HorariosCountAggregateInputType | true
    }

  export interface horariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['horarios'], meta: { name: 'horarios' } }
    /**
     * Find zero or one Horarios that matches the filter.
     * @param {horariosFindUniqueArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends horariosFindUniqueArgs>(args: SelectSubset<T, horariosFindUniqueArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Horarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {horariosFindUniqueOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends horariosFindUniqueOrThrowArgs>(args: SelectSubset<T, horariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends horariosFindFirstArgs>(args?: SelectSubset<T, horariosFindFirstArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Horarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindFirstOrThrowArgs} args - Arguments to find a Horarios
     * @example
     * // Get one Horarios
     * const horarios = await prisma.horarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends horariosFindFirstOrThrowArgs>(args?: SelectSubset<T, horariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Horarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Horarios
     * const horarios = await prisma.horarios.findMany()
     * 
     * // Get first 10 Horarios
     * const horarios = await prisma.horarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const horariosWithIdOnly = await prisma.horarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends horariosFindManyArgs>(args?: SelectSubset<T, horariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Horarios.
     * @param {horariosCreateArgs} args - Arguments to create a Horarios.
     * @example
     * // Create one Horarios
     * const Horarios = await prisma.horarios.create({
     *   data: {
     *     // ... data to create a Horarios
     *   }
     * })
     * 
     */
    create<T extends horariosCreateArgs>(args: SelectSubset<T, horariosCreateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Horarios.
     * @param {horariosCreateManyArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends horariosCreateManyArgs>(args?: SelectSubset<T, horariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Horarios and returns the data saved in the database.
     * @param {horariosCreateManyAndReturnArgs} args - Arguments to create many Horarios.
     * @example
     * // Create many Horarios
     * const horarios = await prisma.horarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Horarios and only return the `id`
     * const horariosWithIdOnly = await prisma.horarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends horariosCreateManyAndReturnArgs>(args?: SelectSubset<T, horariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Horarios.
     * @param {horariosDeleteArgs} args - Arguments to delete one Horarios.
     * @example
     * // Delete one Horarios
     * const Horarios = await prisma.horarios.delete({
     *   where: {
     *     // ... filter to delete one Horarios
     *   }
     * })
     * 
     */
    delete<T extends horariosDeleteArgs>(args: SelectSubset<T, horariosDeleteArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Horarios.
     * @param {horariosUpdateArgs} args - Arguments to update one Horarios.
     * @example
     * // Update one Horarios
     * const horarios = await prisma.horarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends horariosUpdateArgs>(args: SelectSubset<T, horariosUpdateArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Horarios.
     * @param {horariosDeleteManyArgs} args - Arguments to filter Horarios to delete.
     * @example
     * // Delete a few Horarios
     * const { count } = await prisma.horarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends horariosDeleteManyArgs>(args?: SelectSubset<T, horariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends horariosUpdateManyArgs>(args: SelectSubset<T, horariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Horarios and returns the data updated in the database.
     * @param {horariosUpdateManyAndReturnArgs} args - Arguments to update many Horarios.
     * @example
     * // Update many Horarios
     * const horarios = await prisma.horarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Horarios and only return the `id`
     * const horariosWithIdOnly = await prisma.horarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends horariosUpdateManyAndReturnArgs>(args: SelectSubset<T, horariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Horarios.
     * @param {horariosUpsertArgs} args - Arguments to update or create a Horarios.
     * @example
     * // Update or create a Horarios
     * const horarios = await prisma.horarios.upsert({
     *   create: {
     *     // ... data to create a Horarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Horarios we want to update
     *   }
     * })
     */
    upsert<T extends horariosUpsertArgs>(args: SelectSubset<T, horariosUpsertArgs<ExtArgs>>): Prisma__horariosClient<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosCountArgs} args - Arguments to filter Horarios to count.
     * @example
     * // Count the number of Horarios
     * const count = await prisma.horarios.count({
     *   where: {
     *     // ... the filter for the Horarios we want to count
     *   }
     * })
    **/
    count<T extends horariosCountArgs>(
      args?: Subset<T, horariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HorariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HorariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HorariosAggregateArgs>(args: Subset<T, HorariosAggregateArgs>): Prisma.PrismaPromise<GetHorariosAggregateType<T>>

    /**
     * Group by Horarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {horariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends horariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: horariosGroupByArgs['orderBy'] }
        : { orderBy?: horariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, horariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHorariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the horarios model
   */
  readonly fields: horariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for horarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__horariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends horarios$modalidadesArgs<ExtArgs> = {}>(args?: Subset<T, horarios$modalidadesArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the horarios model
   */
  interface horariosFieldRefs {
    readonly id: FieldRef<"horarios", 'Int'>
    readonly modalidade_id: FieldRef<"horarios", 'Int'>
    readonly dia: FieldRef<"horarios", 'String'>
    readonly inicio: FieldRef<"horarios", 'DateTime'>
    readonly fim: FieldRef<"horarios", 'DateTime'>
    readonly nivel: FieldRef<"horarios", 'String'>
    readonly grupo: FieldRef<"horarios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * horarios findUnique
   */
  export type horariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findUniqueOrThrow
   */
  export type horariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios findFirst
   */
  export type horariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findFirstOrThrow
   */
  export type horariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of horarios.
     */
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios findMany
   */
  export type horariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter, which horarios to fetch.
     */
    where?: horariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of horarios to fetch.
     */
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing horarios.
     */
    cursor?: horariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` horarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` horarios.
     */
    skip?: number
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * horarios create
   */
  export type horariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The data needed to create a horarios.
     */
    data?: XOR<horariosCreateInput, horariosUncheckedCreateInput>
  }

  /**
   * horarios createMany
   */
  export type horariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many horarios.
     */
    data: horariosCreateManyInput | horariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * horarios createManyAndReturn
   */
  export type horariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The data used to create many horarios.
     */
    data: horariosCreateManyInput | horariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * horarios update
   */
  export type horariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The data needed to update a horarios.
     */
    data: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
    /**
     * Choose, which horarios to update.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios updateMany
   */
  export type horariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update horarios.
     */
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to update.
     */
    limit?: number
  }

  /**
   * horarios updateManyAndReturn
   */
  export type horariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * The data used to update horarios.
     */
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyInput>
    /**
     * Filter which horarios to update
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * horarios upsert
   */
  export type horariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * The filter to search for the horarios to update in case it exists.
     */
    where: horariosWhereUniqueInput
    /**
     * In case the horarios found by the `where` argument doesn't exist, create a new horarios with this data.
     */
    create: XOR<horariosCreateInput, horariosUncheckedCreateInput>
    /**
     * In case the horarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<horariosUpdateInput, horariosUncheckedUpdateInput>
  }

  /**
   * horarios delete
   */
  export type horariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    /**
     * Filter which horarios to delete.
     */
    where: horariosWhereUniqueInput
  }

  /**
   * horarios deleteMany
   */
  export type horariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which horarios to delete
     */
    where?: horariosWhereInput
    /**
     * Limit how many horarios to delete.
     */
    limit?: number
  }

  /**
   * horarios.modalidades
   */
  export type horarios$modalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    where?: modalidadesWhereInput
  }

  /**
   * horarios without action
   */
  export type horariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
  }


  /**
   * Model modalidades
   */

  export type AggregateModalidades = {
    _count: ModalidadesCountAggregateOutputType | null
    _avg: ModalidadesAvgAggregateOutputType | null
    _sum: ModalidadesSumAggregateOutputType | null
    _min: ModalidadesMinAggregateOutputType | null
    _max: ModalidadesMaxAggregateOutputType | null
  }

  export type ModalidadesAvgAggregateOutputType = {
    id: number | null
    idade_minima: number | null
    idade_maxima: number | null
  }

  export type ModalidadesSumAggregateOutputType = {
    id: number | null
    idade_minima: number | null
    idade_maxima: number | null
  }

  export type ModalidadesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    slug: string | null
    icone: string | null
    descricao: string | null
    ativo: boolean | null
    categoria: string | null
    idade_minima: number | null
    idade_maxima: number | null
  }

  export type ModalidadesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    slug: string | null
    icone: string | null
    descricao: string | null
    ativo: boolean | null
    categoria: string | null
    idade_minima: number | null
    idade_maxima: number | null
  }

  export type ModalidadesCountAggregateOutputType = {
    id: number
    nome: number
    slug: number
    icone: number
    descricao: number
    ativo: number
    categoria: number
    idade_minima: number
    idade_maxima: number
    _all: number
  }


  export type ModalidadesAvgAggregateInputType = {
    id?: true
    idade_minima?: true
    idade_maxima?: true
  }

  export type ModalidadesSumAggregateInputType = {
    id?: true
    idade_minima?: true
    idade_maxima?: true
  }

  export type ModalidadesMinAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    icone?: true
    descricao?: true
    ativo?: true
    categoria?: true
    idade_minima?: true
    idade_maxima?: true
  }

  export type ModalidadesMaxAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    icone?: true
    descricao?: true
    ativo?: true
    categoria?: true
    idade_minima?: true
    idade_maxima?: true
  }

  export type ModalidadesCountAggregateInputType = {
    id?: true
    nome?: true
    slug?: true
    icone?: true
    descricao?: true
    ativo?: true
    categoria?: true
    idade_minima?: true
    idade_maxima?: true
    _all?: true
  }

  export type ModalidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modalidades to aggregate.
     */
    where?: modalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modalidades to fetch.
     */
    orderBy?: modalidadesOrderByWithRelationInput | modalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: modalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modalidades
    **/
    _count?: true | ModalidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModalidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModalidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModalidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModalidadesMaxAggregateInputType
  }

  export type GetModalidadesAggregateType<T extends ModalidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateModalidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModalidades[P]>
      : GetScalarType<T[P], AggregateModalidades[P]>
  }




  export type modalidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: modalidadesWhereInput
    orderBy?: modalidadesOrderByWithAggregationInput | modalidadesOrderByWithAggregationInput[]
    by: ModalidadesScalarFieldEnum[] | ModalidadesScalarFieldEnum
    having?: modalidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModalidadesCountAggregateInputType | true
    _avg?: ModalidadesAvgAggregateInputType
    _sum?: ModalidadesSumAggregateInputType
    _min?: ModalidadesMinAggregateInputType
    _max?: ModalidadesMaxAggregateInputType
  }

  export type ModalidadesGroupByOutputType = {
    id: number
    nome: string
    slug: string
    icone: string | null
    descricao: string | null
    ativo: boolean
    categoria: string | null
    idade_minima: number
    idade_maxima: number | null
    _count: ModalidadesCountAggregateOutputType | null
    _avg: ModalidadesAvgAggregateOutputType | null
    _sum: ModalidadesSumAggregateOutputType | null
    _min: ModalidadesMinAggregateOutputType | null
    _max: ModalidadesMaxAggregateOutputType | null
  }

  type GetModalidadesGroupByPayload<T extends modalidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModalidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModalidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModalidadesGroupByOutputType[P]>
            : GetScalarType<T[P], ModalidadesGroupByOutputType[P]>
        }
      >
    >


  export type modalidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    slug?: boolean
    icone?: boolean
    descricao?: boolean
    ativo?: boolean
    categoria?: boolean
    idade_minima?: boolean
    idade_maxima?: boolean
    competicoes?: boolean | modalidades$competicoesArgs<ExtArgs>
    contacto_modalidade?: boolean | modalidades$contacto_modalidadeArgs<ExtArgs>
    detalhes_modalidade?: boolean | modalidades$detalhes_modalidadeArgs<ExtArgs>
    equipamento?: boolean | modalidades$equipamentoArgs<ExtArgs>
    horarios?: boolean | modalidades$horariosArgs<ExtArgs>
    niveis?: boolean | modalidades$niveisArgs<ExtArgs>
    preco?: boolean | modalidades$precoArgs<ExtArgs>
    _count?: boolean | ModalidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modalidades"]>

  export type modalidadesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    slug?: boolean
    icone?: boolean
    descricao?: boolean
    ativo?: boolean
    categoria?: boolean
    idade_minima?: boolean
    idade_maxima?: boolean
  }, ExtArgs["result"]["modalidades"]>

  export type modalidadesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    slug?: boolean
    icone?: boolean
    descricao?: boolean
    ativo?: boolean
    categoria?: boolean
    idade_minima?: boolean
    idade_maxima?: boolean
  }, ExtArgs["result"]["modalidades"]>

  export type modalidadesSelectScalar = {
    id?: boolean
    nome?: boolean
    slug?: boolean
    icone?: boolean
    descricao?: boolean
    ativo?: boolean
    categoria?: boolean
    idade_minima?: boolean
    idade_maxima?: boolean
  }

  export type modalidadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "slug" | "icone" | "descricao" | "ativo" | "categoria" | "idade_minima" | "idade_maxima", ExtArgs["result"]["modalidades"]>
  export type modalidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competicoes?: boolean | modalidades$competicoesArgs<ExtArgs>
    contacto_modalidade?: boolean | modalidades$contacto_modalidadeArgs<ExtArgs>
    detalhes_modalidade?: boolean | modalidades$detalhes_modalidadeArgs<ExtArgs>
    equipamento?: boolean | modalidades$equipamentoArgs<ExtArgs>
    horarios?: boolean | modalidades$horariosArgs<ExtArgs>
    niveis?: boolean | modalidades$niveisArgs<ExtArgs>
    preco?: boolean | modalidades$precoArgs<ExtArgs>
    _count?: boolean | ModalidadesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type modalidadesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type modalidadesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $modalidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "modalidades"
    objects: {
      competicoes: Prisma.$competicoesPayload<ExtArgs>[]
      contacto_modalidade: Prisma.$contacto_modalidadePayload<ExtArgs>[]
      detalhes_modalidade: Prisma.$detalhes_modalidadePayload<ExtArgs>[]
      equipamento: Prisma.$equipamentoPayload<ExtArgs>[]
      horarios: Prisma.$horariosPayload<ExtArgs>[]
      niveis: Prisma.$niveisPayload<ExtArgs>[]
      preco: Prisma.$precoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      slug: string
      icone: string | null
      descricao: string | null
      ativo: boolean
      categoria: string | null
      idade_minima: number
      idade_maxima: number | null
    }, ExtArgs["result"]["modalidades"]>
    composites: {}
  }

  type modalidadesGetPayload<S extends boolean | null | undefined | modalidadesDefaultArgs> = $Result.GetResult<Prisma.$modalidadesPayload, S>

  type modalidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<modalidadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModalidadesCountAggregateInputType | true
    }

  export interface modalidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['modalidades'], meta: { name: 'modalidades' } }
    /**
     * Find zero or one Modalidades that matches the filter.
     * @param {modalidadesFindUniqueArgs} args - Arguments to find a Modalidades
     * @example
     * // Get one Modalidades
     * const modalidades = await prisma.modalidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends modalidadesFindUniqueArgs>(args: SelectSubset<T, modalidadesFindUniqueArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Modalidades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {modalidadesFindUniqueOrThrowArgs} args - Arguments to find a Modalidades
     * @example
     * // Get one Modalidades
     * const modalidades = await prisma.modalidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends modalidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, modalidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modalidadesFindFirstArgs} args - Arguments to find a Modalidades
     * @example
     * // Get one Modalidades
     * const modalidades = await prisma.modalidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends modalidadesFindFirstArgs>(args?: SelectSubset<T, modalidadesFindFirstArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Modalidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modalidadesFindFirstOrThrowArgs} args - Arguments to find a Modalidades
     * @example
     * // Get one Modalidades
     * const modalidades = await prisma.modalidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends modalidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, modalidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modalidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modalidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modalidades
     * const modalidades = await prisma.modalidades.findMany()
     * 
     * // Get first 10 Modalidades
     * const modalidades = await prisma.modalidades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modalidadesWithIdOnly = await prisma.modalidades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends modalidadesFindManyArgs>(args?: SelectSubset<T, modalidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Modalidades.
     * @param {modalidadesCreateArgs} args - Arguments to create a Modalidades.
     * @example
     * // Create one Modalidades
     * const Modalidades = await prisma.modalidades.create({
     *   data: {
     *     // ... data to create a Modalidades
     *   }
     * })
     * 
     */
    create<T extends modalidadesCreateArgs>(args: SelectSubset<T, modalidadesCreateArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modalidades.
     * @param {modalidadesCreateManyArgs} args - Arguments to create many Modalidades.
     * @example
     * // Create many Modalidades
     * const modalidades = await prisma.modalidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends modalidadesCreateManyArgs>(args?: SelectSubset<T, modalidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modalidades and returns the data saved in the database.
     * @param {modalidadesCreateManyAndReturnArgs} args - Arguments to create many Modalidades.
     * @example
     * // Create many Modalidades
     * const modalidades = await prisma.modalidades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modalidades and only return the `id`
     * const modalidadesWithIdOnly = await prisma.modalidades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends modalidadesCreateManyAndReturnArgs>(args?: SelectSubset<T, modalidadesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Modalidades.
     * @param {modalidadesDeleteArgs} args - Arguments to delete one Modalidades.
     * @example
     * // Delete one Modalidades
     * const Modalidades = await prisma.modalidades.delete({
     *   where: {
     *     // ... filter to delete one Modalidades
     *   }
     * })
     * 
     */
    delete<T extends modalidadesDeleteArgs>(args: SelectSubset<T, modalidadesDeleteArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Modalidades.
     * @param {modalidadesUpdateArgs} args - Arguments to update one Modalidades.
     * @example
     * // Update one Modalidades
     * const modalidades = await prisma.modalidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends modalidadesUpdateArgs>(args: SelectSubset<T, modalidadesUpdateArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modalidades.
     * @param {modalidadesDeleteManyArgs} args - Arguments to filter Modalidades to delete.
     * @example
     * // Delete a few Modalidades
     * const { count } = await prisma.modalidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends modalidadesDeleteManyArgs>(args?: SelectSubset<T, modalidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modalidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modalidades
     * const modalidades = await prisma.modalidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends modalidadesUpdateManyArgs>(args: SelectSubset<T, modalidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modalidades and returns the data updated in the database.
     * @param {modalidadesUpdateManyAndReturnArgs} args - Arguments to update many Modalidades.
     * @example
     * // Update many Modalidades
     * const modalidades = await prisma.modalidades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modalidades and only return the `id`
     * const modalidadesWithIdOnly = await prisma.modalidades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends modalidadesUpdateManyAndReturnArgs>(args: SelectSubset<T, modalidadesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Modalidades.
     * @param {modalidadesUpsertArgs} args - Arguments to update or create a Modalidades.
     * @example
     * // Update or create a Modalidades
     * const modalidades = await prisma.modalidades.upsert({
     *   create: {
     *     // ... data to create a Modalidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Modalidades we want to update
     *   }
     * })
     */
    upsert<T extends modalidadesUpsertArgs>(args: SelectSubset<T, modalidadesUpsertArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modalidadesCountArgs} args - Arguments to filter Modalidades to count.
     * @example
     * // Count the number of Modalidades
     * const count = await prisma.modalidades.count({
     *   where: {
     *     // ... the filter for the Modalidades we want to count
     *   }
     * })
    **/
    count<T extends modalidadesCountArgs>(
      args?: Subset<T, modalidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModalidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModalidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModalidadesAggregateArgs>(args: Subset<T, ModalidadesAggregateArgs>): Prisma.PrismaPromise<GetModalidadesAggregateType<T>>

    /**
     * Group by Modalidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {modalidadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends modalidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: modalidadesGroupByArgs['orderBy'] }
        : { orderBy?: modalidadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, modalidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModalidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the modalidades model
   */
  readonly fields: modalidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for modalidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__modalidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competicoes<T extends modalidades$competicoesArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$competicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$competicoesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacto_modalidade<T extends modalidades$contacto_modalidadeArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$contacto_modalidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contacto_modalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalhes_modalidade<T extends modalidades$detalhes_modalidadeArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$detalhes_modalidadeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detalhes_modalidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipamento<T extends modalidades$equipamentoArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$equipamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$equipamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    horarios<T extends modalidades$horariosArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$horariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$horariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    niveis<T extends modalidades$niveisArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$niveisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preco<T extends modalidades$precoArgs<ExtArgs> = {}>(args?: Subset<T, modalidades$precoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the modalidades model
   */
  interface modalidadesFieldRefs {
    readonly id: FieldRef<"modalidades", 'Int'>
    readonly nome: FieldRef<"modalidades", 'String'>
    readonly slug: FieldRef<"modalidades", 'String'>
    readonly icone: FieldRef<"modalidades", 'String'>
    readonly descricao: FieldRef<"modalidades", 'String'>
    readonly ativo: FieldRef<"modalidades", 'Boolean'>
    readonly categoria: FieldRef<"modalidades", 'String'>
    readonly idade_minima: FieldRef<"modalidades", 'Int'>
    readonly idade_maxima: FieldRef<"modalidades", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * modalidades findUnique
   */
  export type modalidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * Filter, which modalidades to fetch.
     */
    where: modalidadesWhereUniqueInput
  }

  /**
   * modalidades findUniqueOrThrow
   */
  export type modalidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * Filter, which modalidades to fetch.
     */
    where: modalidadesWhereUniqueInput
  }

  /**
   * modalidades findFirst
   */
  export type modalidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * Filter, which modalidades to fetch.
     */
    where?: modalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modalidades to fetch.
     */
    orderBy?: modalidadesOrderByWithRelationInput | modalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modalidades.
     */
    cursor?: modalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modalidades.
     */
    distinct?: ModalidadesScalarFieldEnum | ModalidadesScalarFieldEnum[]
  }

  /**
   * modalidades findFirstOrThrow
   */
  export type modalidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * Filter, which modalidades to fetch.
     */
    where?: modalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modalidades to fetch.
     */
    orderBy?: modalidadesOrderByWithRelationInput | modalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modalidades.
     */
    cursor?: modalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modalidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modalidades.
     */
    distinct?: ModalidadesScalarFieldEnum | ModalidadesScalarFieldEnum[]
  }

  /**
   * modalidades findMany
   */
  export type modalidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * Filter, which modalidades to fetch.
     */
    where?: modalidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modalidades to fetch.
     */
    orderBy?: modalidadesOrderByWithRelationInput | modalidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modalidades.
     */
    cursor?: modalidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modalidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modalidades.
     */
    skip?: number
    distinct?: ModalidadesScalarFieldEnum | ModalidadesScalarFieldEnum[]
  }

  /**
   * modalidades create
   */
  export type modalidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a modalidades.
     */
    data: XOR<modalidadesCreateInput, modalidadesUncheckedCreateInput>
  }

  /**
   * modalidades createMany
   */
  export type modalidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modalidades.
     */
    data: modalidadesCreateManyInput | modalidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modalidades createManyAndReturn
   */
  export type modalidadesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * The data used to create many modalidades.
     */
    data: modalidadesCreateManyInput | modalidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * modalidades update
   */
  export type modalidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a modalidades.
     */
    data: XOR<modalidadesUpdateInput, modalidadesUncheckedUpdateInput>
    /**
     * Choose, which modalidades to update.
     */
    where: modalidadesWhereUniqueInput
  }

  /**
   * modalidades updateMany
   */
  export type modalidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modalidades.
     */
    data: XOR<modalidadesUpdateManyMutationInput, modalidadesUncheckedUpdateManyInput>
    /**
     * Filter which modalidades to update
     */
    where?: modalidadesWhereInput
    /**
     * Limit how many modalidades to update.
     */
    limit?: number
  }

  /**
   * modalidades updateManyAndReturn
   */
  export type modalidadesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * The data used to update modalidades.
     */
    data: XOR<modalidadesUpdateManyMutationInput, modalidadesUncheckedUpdateManyInput>
    /**
     * Filter which modalidades to update
     */
    where?: modalidadesWhereInput
    /**
     * Limit how many modalidades to update.
     */
    limit?: number
  }

  /**
   * modalidades upsert
   */
  export type modalidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the modalidades to update in case it exists.
     */
    where: modalidadesWhereUniqueInput
    /**
     * In case the modalidades found by the `where` argument doesn't exist, create a new modalidades with this data.
     */
    create: XOR<modalidadesCreateInput, modalidadesUncheckedCreateInput>
    /**
     * In case the modalidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<modalidadesUpdateInput, modalidadesUncheckedUpdateInput>
  }

  /**
   * modalidades delete
   */
  export type modalidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    /**
     * Filter which modalidades to delete.
     */
    where: modalidadesWhereUniqueInput
  }

  /**
   * modalidades deleteMany
   */
  export type modalidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modalidades to delete
     */
    where?: modalidadesWhereInput
    /**
     * Limit how many modalidades to delete.
     */
    limit?: number
  }

  /**
   * modalidades.competicoes
   */
  export type modalidades$competicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the competicoes
     */
    select?: competicoesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the competicoes
     */
    omit?: competicoesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: competicoesInclude<ExtArgs> | null
    where?: competicoesWhereInput
    orderBy?: competicoesOrderByWithRelationInput | competicoesOrderByWithRelationInput[]
    cursor?: competicoesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompeticoesScalarFieldEnum | CompeticoesScalarFieldEnum[]
  }

  /**
   * modalidades.contacto_modalidade
   */
  export type modalidades$contacto_modalidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contacto_modalidade
     */
    select?: contacto_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contacto_modalidade
     */
    omit?: contacto_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contacto_modalidadeInclude<ExtArgs> | null
    where?: contacto_modalidadeWhereInput
    orderBy?: contacto_modalidadeOrderByWithRelationInput | contacto_modalidadeOrderByWithRelationInput[]
    cursor?: contacto_modalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Contacto_modalidadeScalarFieldEnum | Contacto_modalidadeScalarFieldEnum[]
  }

  /**
   * modalidades.detalhes_modalidade
   */
  export type modalidades$detalhes_modalidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detalhes_modalidade
     */
    select?: detalhes_modalidadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detalhes_modalidade
     */
    omit?: detalhes_modalidadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detalhes_modalidadeInclude<ExtArgs> | null
    where?: detalhes_modalidadeWhereInput
    orderBy?: detalhes_modalidadeOrderByWithRelationInput | detalhes_modalidadeOrderByWithRelationInput[]
    cursor?: detalhes_modalidadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detalhes_modalidadeScalarFieldEnum | Detalhes_modalidadeScalarFieldEnum[]
  }

  /**
   * modalidades.equipamento
   */
  export type modalidades$equipamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the equipamento
     */
    select?: equipamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the equipamento
     */
    omit?: equipamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: equipamentoInclude<ExtArgs> | null
    where?: equipamentoWhereInput
    orderBy?: equipamentoOrderByWithRelationInput | equipamentoOrderByWithRelationInput[]
    cursor?: equipamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipamentoScalarFieldEnum | EquipamentoScalarFieldEnum[]
  }

  /**
   * modalidades.horarios
   */
  export type modalidades$horariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the horarios
     */
    select?: horariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the horarios
     */
    omit?: horariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: horariosInclude<ExtArgs> | null
    where?: horariosWhereInput
    orderBy?: horariosOrderByWithRelationInput | horariosOrderByWithRelationInput[]
    cursor?: horariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HorariosScalarFieldEnum | HorariosScalarFieldEnum[]
  }

  /**
   * modalidades.niveis
   */
  export type modalidades$niveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    where?: niveisWhereInput
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    cursor?: niveisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * modalidades.preco
   */
  export type modalidades$precoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    where?: precoWhereInput
    orderBy?: precoOrderByWithRelationInput | precoOrderByWithRelationInput[]
    cursor?: precoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * modalidades without action
   */
  export type modalidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
  }


  /**
   * Model niveis
   */

  export type AggregateNiveis = {
    _count: NiveisCountAggregateOutputType | null
    _avg: NiveisAvgAggregateOutputType | null
    _sum: NiveisSumAggregateOutputType | null
    _min: NiveisMinAggregateOutputType | null
    _max: NiveisMaxAggregateOutputType | null
  }

  export type NiveisAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type NiveisSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
  }

  export type NiveisMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    descricao: string | null
  }

  export type NiveisMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    descricao: string | null
  }

  export type NiveisCountAggregateOutputType = {
    id: number
    modalidade_id: number
    descricao: number
    _all: number
  }


  export type NiveisAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type NiveisSumAggregateInputType = {
    id?: true
    modalidade_id?: true
  }

  export type NiveisMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    descricao?: true
  }

  export type NiveisMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    descricao?: true
  }

  export type NiveisCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    descricao?: true
    _all?: true
  }

  export type NiveisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which niveis to aggregate.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned niveis
    **/
    _count?: true | NiveisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NiveisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NiveisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NiveisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NiveisMaxAggregateInputType
  }

  export type GetNiveisAggregateType<T extends NiveisAggregateArgs> = {
        [P in keyof T & keyof AggregateNiveis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNiveis[P]>
      : GetScalarType<T[P], AggregateNiveis[P]>
  }




  export type niveisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: niveisWhereInput
    orderBy?: niveisOrderByWithAggregationInput | niveisOrderByWithAggregationInput[]
    by: NiveisScalarFieldEnum[] | NiveisScalarFieldEnum
    having?: niveisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NiveisCountAggregateInputType | true
    _avg?: NiveisAvgAggregateInputType
    _sum?: NiveisSumAggregateInputType
    _min?: NiveisMinAggregateInputType
    _max?: NiveisMaxAggregateInputType
  }

  export type NiveisGroupByOutputType = {
    id: number
    modalidade_id: number | null
    descricao: string | null
    _count: NiveisCountAggregateOutputType | null
    _avg: NiveisAvgAggregateOutputType | null
    _sum: NiveisSumAggregateOutputType | null
    _min: NiveisMinAggregateOutputType | null
    _max: NiveisMaxAggregateOutputType | null
  }

  type GetNiveisGroupByPayload<T extends niveisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NiveisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NiveisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NiveisGroupByOutputType[P]>
            : GetScalarType<T[P], NiveisGroupByOutputType[P]>
        }
      >
    >


  export type niveisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    descricao?: boolean
    modalidades?: boolean | niveis$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    descricao?: boolean
    modalidades?: boolean | niveis$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    descricao?: boolean
    modalidades?: boolean | niveis$modalidadesArgs<ExtArgs>
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    descricao?: boolean
  }

  export type niveisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "descricao", ExtArgs["result"]["niveis"]>
  export type niveisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | niveis$modalidadesArgs<ExtArgs>
  }
  export type niveisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | niveis$modalidadesArgs<ExtArgs>
  }
  export type niveisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | niveis$modalidadesArgs<ExtArgs>
  }

  export type $niveisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "niveis"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number | null
      descricao: string | null
    }, ExtArgs["result"]["niveis"]>
    composites: {}
  }

  type niveisGetPayload<S extends boolean | null | undefined | niveisDefaultArgs> = $Result.GetResult<Prisma.$niveisPayload, S>

  type niveisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<niveisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NiveisCountAggregateInputType | true
    }

  export interface niveisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['niveis'], meta: { name: 'niveis' } }
    /**
     * Find zero or one Niveis that matches the filter.
     * @param {niveisFindUniqueArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends niveisFindUniqueArgs>(args: SelectSubset<T, niveisFindUniqueArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Niveis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {niveisFindUniqueOrThrowArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends niveisFindUniqueOrThrowArgs>(args: SelectSubset<T, niveisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Niveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindFirstArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends niveisFindFirstArgs>(args?: SelectSubset<T, niveisFindFirstArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Niveis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindFirstOrThrowArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends niveisFindFirstOrThrowArgs>(args?: SelectSubset<T, niveisFindFirstOrThrowArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Niveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Niveis
     * const niveis = await prisma.niveis.findMany()
     * 
     * // Get first 10 Niveis
     * const niveis = await prisma.niveis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const niveisWithIdOnly = await prisma.niveis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends niveisFindManyArgs>(args?: SelectSubset<T, niveisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Niveis.
     * @param {niveisCreateArgs} args - Arguments to create a Niveis.
     * @example
     * // Create one Niveis
     * const Niveis = await prisma.niveis.create({
     *   data: {
     *     // ... data to create a Niveis
     *   }
     * })
     * 
     */
    create<T extends niveisCreateArgs>(args: SelectSubset<T, niveisCreateArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Niveis.
     * @param {niveisCreateManyArgs} args - Arguments to create many Niveis.
     * @example
     * // Create many Niveis
     * const niveis = await prisma.niveis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends niveisCreateManyArgs>(args?: SelectSubset<T, niveisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Niveis and returns the data saved in the database.
     * @param {niveisCreateManyAndReturnArgs} args - Arguments to create many Niveis.
     * @example
     * // Create many Niveis
     * const niveis = await prisma.niveis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Niveis and only return the `id`
     * const niveisWithIdOnly = await prisma.niveis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends niveisCreateManyAndReturnArgs>(args?: SelectSubset<T, niveisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Niveis.
     * @param {niveisDeleteArgs} args - Arguments to delete one Niveis.
     * @example
     * // Delete one Niveis
     * const Niveis = await prisma.niveis.delete({
     *   where: {
     *     // ... filter to delete one Niveis
     *   }
     * })
     * 
     */
    delete<T extends niveisDeleteArgs>(args: SelectSubset<T, niveisDeleteArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Niveis.
     * @param {niveisUpdateArgs} args - Arguments to update one Niveis.
     * @example
     * // Update one Niveis
     * const niveis = await prisma.niveis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends niveisUpdateArgs>(args: SelectSubset<T, niveisUpdateArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Niveis.
     * @param {niveisDeleteManyArgs} args - Arguments to filter Niveis to delete.
     * @example
     * // Delete a few Niveis
     * const { count } = await prisma.niveis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends niveisDeleteManyArgs>(args?: SelectSubset<T, niveisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Niveis
     * const niveis = await prisma.niveis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends niveisUpdateManyArgs>(args: SelectSubset<T, niveisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Niveis and returns the data updated in the database.
     * @param {niveisUpdateManyAndReturnArgs} args - Arguments to update many Niveis.
     * @example
     * // Update many Niveis
     * const niveis = await prisma.niveis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Niveis and only return the `id`
     * const niveisWithIdOnly = await prisma.niveis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends niveisUpdateManyAndReturnArgs>(args: SelectSubset<T, niveisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Niveis.
     * @param {niveisUpsertArgs} args - Arguments to update or create a Niveis.
     * @example
     * // Update or create a Niveis
     * const niveis = await prisma.niveis.upsert({
     *   create: {
     *     // ... data to create a Niveis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Niveis we want to update
     *   }
     * })
     */
    upsert<T extends niveisUpsertArgs>(args: SelectSubset<T, niveisUpsertArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisCountArgs} args - Arguments to filter Niveis to count.
     * @example
     * // Count the number of Niveis
     * const count = await prisma.niveis.count({
     *   where: {
     *     // ... the filter for the Niveis we want to count
     *   }
     * })
    **/
    count<T extends niveisCountArgs>(
      args?: Subset<T, niveisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NiveisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiveisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NiveisAggregateArgs>(args: Subset<T, NiveisAggregateArgs>): Prisma.PrismaPromise<GetNiveisAggregateType<T>>

    /**
     * Group by Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends niveisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: niveisGroupByArgs['orderBy'] }
        : { orderBy?: niveisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, niveisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNiveisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the niveis model
   */
  readonly fields: niveisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for niveis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__niveisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends niveis$modalidadesArgs<ExtArgs> = {}>(args?: Subset<T, niveis$modalidadesArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the niveis model
   */
  interface niveisFieldRefs {
    readonly id: FieldRef<"niveis", 'Int'>
    readonly modalidade_id: FieldRef<"niveis", 'Int'>
    readonly descricao: FieldRef<"niveis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * niveis findUnique
   */
  export type niveisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis findUniqueOrThrow
   */
  export type niveisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis findFirst
   */
  export type niveisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of niveis.
     */
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis findFirstOrThrow
   */
  export type niveisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of niveis.
     */
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis findMany
   */
  export type niveisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis create
   */
  export type niveisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The data needed to create a niveis.
     */
    data?: XOR<niveisCreateInput, niveisUncheckedCreateInput>
  }

  /**
   * niveis createMany
   */
  export type niveisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many niveis.
     */
    data: niveisCreateManyInput | niveisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * niveis createManyAndReturn
   */
  export type niveisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * The data used to create many niveis.
     */
    data: niveisCreateManyInput | niveisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * niveis update
   */
  export type niveisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The data needed to update a niveis.
     */
    data: XOR<niveisUpdateInput, niveisUncheckedUpdateInput>
    /**
     * Choose, which niveis to update.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis updateMany
   */
  export type niveisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update niveis.
     */
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyInput>
    /**
     * Filter which niveis to update
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to update.
     */
    limit?: number
  }

  /**
   * niveis updateManyAndReturn
   */
  export type niveisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * The data used to update niveis.
     */
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyInput>
    /**
     * Filter which niveis to update
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * niveis upsert
   */
  export type niveisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The filter to search for the niveis to update in case it exists.
     */
    where: niveisWhereUniqueInput
    /**
     * In case the niveis found by the `where` argument doesn't exist, create a new niveis with this data.
     */
    create: XOR<niveisCreateInput, niveisUncheckedCreateInput>
    /**
     * In case the niveis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<niveisUpdateInput, niveisUncheckedUpdateInput>
  }

  /**
   * niveis delete
   */
  export type niveisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter which niveis to delete.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis deleteMany
   */
  export type niveisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which niveis to delete
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to delete.
     */
    limit?: number
  }

  /**
   * niveis.modalidades
   */
  export type niveis$modalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the modalidades
     */
    select?: modalidadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the modalidades
     */
    omit?: modalidadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: modalidadesInclude<ExtArgs> | null
    where?: modalidadesWhereInput
  }

  /**
   * niveis without action
   */
  export type niveisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
  }


  /**
   * Model preco
   */

  export type AggregatePreco = {
    _count: PrecoCountAggregateOutputType | null
    _avg: PrecoAvgAggregateOutputType | null
    _sum: PrecoSumAggregateOutputType | null
    _min: PrecoMinAggregateOutputType | null
    _max: PrecoMaxAggregateOutputType | null
  }

  export type PrecoAvgAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    mensalidade: Decimal | null
    inscricao: Decimal | null
    equipamento: Decimal | null
  }

  export type PrecoSumAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    mensalidade: Decimal | null
    inscricao: Decimal | null
    equipamento: Decimal | null
  }

  export type PrecoMinAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    mensalidade: Decimal | null
    inscricao: Decimal | null
    equipamento: Decimal | null
  }

  export type PrecoMaxAggregateOutputType = {
    id: number | null
    modalidade_id: number | null
    mensalidade: Decimal | null
    inscricao: Decimal | null
    equipamento: Decimal | null
  }

  export type PrecoCountAggregateOutputType = {
    id: number
    modalidade_id: number
    mensalidade: number
    inscricao: number
    equipamento: number
    _all: number
  }


  export type PrecoAvgAggregateInputType = {
    id?: true
    modalidade_id?: true
    mensalidade?: true
    inscricao?: true
    equipamento?: true
  }

  export type PrecoSumAggregateInputType = {
    id?: true
    modalidade_id?: true
    mensalidade?: true
    inscricao?: true
    equipamento?: true
  }

  export type PrecoMinAggregateInputType = {
    id?: true
    modalidade_id?: true
    mensalidade?: true
    inscricao?: true
    equipamento?: true
  }

  export type PrecoMaxAggregateInputType = {
    id?: true
    modalidade_id?: true
    mensalidade?: true
    inscricao?: true
    equipamento?: true
  }

  export type PrecoCountAggregateInputType = {
    id?: true
    modalidade_id?: true
    mensalidade?: true
    inscricao?: true
    equipamento?: true
    _all?: true
  }

  export type PrecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preco to aggregate.
     */
    where?: precoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of precos to fetch.
     */
    orderBy?: precoOrderByWithRelationInput | precoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: precoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` precos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned precos
    **/
    _count?: true | PrecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrecoMaxAggregateInputType
  }

  export type GetPrecoAggregateType<T extends PrecoAggregateArgs> = {
        [P in keyof T & keyof AggregatePreco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreco[P]>
      : GetScalarType<T[P], AggregatePreco[P]>
  }




  export type precoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: precoWhereInput
    orderBy?: precoOrderByWithAggregationInput | precoOrderByWithAggregationInput[]
    by: PrecoScalarFieldEnum[] | PrecoScalarFieldEnum
    having?: precoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrecoCountAggregateInputType | true
    _avg?: PrecoAvgAggregateInputType
    _sum?: PrecoSumAggregateInputType
    _min?: PrecoMinAggregateInputType
    _max?: PrecoMaxAggregateInputType
  }

  export type PrecoGroupByOutputType = {
    id: number
    modalidade_id: number
    mensalidade: Decimal
    inscricao: Decimal
    equipamento: Decimal | null
    _count: PrecoCountAggregateOutputType | null
    _avg: PrecoAvgAggregateOutputType | null
    _sum: PrecoSumAggregateOutputType | null
    _min: PrecoMinAggregateOutputType | null
    _max: PrecoMaxAggregateOutputType | null
  }

  type GetPrecoGroupByPayload<T extends precoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrecoGroupByOutputType[P]>
            : GetScalarType<T[P], PrecoGroupByOutputType[P]>
        }
      >
    >


  export type precoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    mensalidade?: boolean
    inscricao?: boolean
    equipamento?: boolean
    modalidades?: boolean | modalidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preco"]>

  export type precoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    mensalidade?: boolean
    inscricao?: boolean
    equipamento?: boolean
    modalidades?: boolean | modalidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preco"]>

  export type precoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modalidade_id?: boolean
    mensalidade?: boolean
    inscricao?: boolean
    equipamento?: boolean
    modalidades?: boolean | modalidadesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preco"]>

  export type precoSelectScalar = {
    id?: boolean
    modalidade_id?: boolean
    mensalidade?: boolean
    inscricao?: boolean
    equipamento?: boolean
  }

  export type precoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modalidade_id" | "mensalidade" | "inscricao" | "equipamento", ExtArgs["result"]["preco"]>
  export type precoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | modalidadesDefaultArgs<ExtArgs>
  }
  export type precoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | modalidadesDefaultArgs<ExtArgs>
  }
  export type precoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modalidades?: boolean | modalidadesDefaultArgs<ExtArgs>
  }

  export type $precoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preco"
    objects: {
      modalidades: Prisma.$modalidadesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modalidade_id: number
      mensalidade: Prisma.Decimal
      inscricao: Prisma.Decimal
      equipamento: Prisma.Decimal | null
    }, ExtArgs["result"]["preco"]>
    composites: {}
  }

  type precoGetPayload<S extends boolean | null | undefined | precoDefaultArgs> = $Result.GetResult<Prisma.$precoPayload, S>

  type precoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<precoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrecoCountAggregateInputType | true
    }

  export interface precoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preco'], meta: { name: 'preco' } }
    /**
     * Find zero or one Preco that matches the filter.
     * @param {precoFindUniqueArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends precoFindUniqueArgs>(args: SelectSubset<T, precoFindUniqueArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {precoFindUniqueOrThrowArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends precoFindUniqueOrThrowArgs>(args: SelectSubset<T, precoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {precoFindFirstArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends precoFindFirstArgs>(args?: SelectSubset<T, precoFindFirstArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {precoFindFirstOrThrowArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends precoFindFirstOrThrowArgs>(args?: SelectSubset<T, precoFindFirstOrThrowArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Precos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {precoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Precos
     * const precos = await prisma.preco.findMany()
     * 
     * // Get first 10 Precos
     * const precos = await prisma.preco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const precoWithIdOnly = await prisma.preco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends precoFindManyArgs>(args?: SelectSubset<T, precoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preco.
     * @param {precoCreateArgs} args - Arguments to create a Preco.
     * @example
     * // Create one Preco
     * const Preco = await prisma.preco.create({
     *   data: {
     *     // ... data to create a Preco
     *   }
     * })
     * 
     */
    create<T extends precoCreateArgs>(args: SelectSubset<T, precoCreateArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Precos.
     * @param {precoCreateManyArgs} args - Arguments to create many Precos.
     * @example
     * // Create many Precos
     * const preco = await prisma.preco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends precoCreateManyArgs>(args?: SelectSubset<T, precoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Precos and returns the data saved in the database.
     * @param {precoCreateManyAndReturnArgs} args - Arguments to create many Precos.
     * @example
     * // Create many Precos
     * const preco = await prisma.preco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Precos and only return the `id`
     * const precoWithIdOnly = await prisma.preco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends precoCreateManyAndReturnArgs>(args?: SelectSubset<T, precoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preco.
     * @param {precoDeleteArgs} args - Arguments to delete one Preco.
     * @example
     * // Delete one Preco
     * const Preco = await prisma.preco.delete({
     *   where: {
     *     // ... filter to delete one Preco
     *   }
     * })
     * 
     */
    delete<T extends precoDeleteArgs>(args: SelectSubset<T, precoDeleteArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preco.
     * @param {precoUpdateArgs} args - Arguments to update one Preco.
     * @example
     * // Update one Preco
     * const preco = await prisma.preco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends precoUpdateArgs>(args: SelectSubset<T, precoUpdateArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Precos.
     * @param {precoDeleteManyArgs} args - Arguments to filter Precos to delete.
     * @example
     * // Delete a few Precos
     * const { count } = await prisma.preco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends precoDeleteManyArgs>(args?: SelectSubset<T, precoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {precoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Precos
     * const preco = await prisma.preco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends precoUpdateManyArgs>(args: SelectSubset<T, precoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precos and returns the data updated in the database.
     * @param {precoUpdateManyAndReturnArgs} args - Arguments to update many Precos.
     * @example
     * // Update many Precos
     * const preco = await prisma.preco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Precos and only return the `id`
     * const precoWithIdOnly = await prisma.preco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends precoUpdateManyAndReturnArgs>(args: SelectSubset<T, precoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preco.
     * @param {precoUpsertArgs} args - Arguments to update or create a Preco.
     * @example
     * // Update or create a Preco
     * const preco = await prisma.preco.upsert({
     *   create: {
     *     // ... data to create a Preco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preco we want to update
     *   }
     * })
     */
    upsert<T extends precoUpsertArgs>(args: SelectSubset<T, precoUpsertArgs<ExtArgs>>): Prisma__precoClient<$Result.GetResult<Prisma.$precoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Precos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {precoCountArgs} args - Arguments to filter Precos to count.
     * @example
     * // Count the number of Precos
     * const count = await prisma.preco.count({
     *   where: {
     *     // ... the filter for the Precos we want to count
     *   }
     * })
    **/
    count<T extends precoCountArgs>(
      args?: Subset<T, precoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrecoAggregateArgs>(args: Subset<T, PrecoAggregateArgs>): Prisma.PrismaPromise<GetPrecoAggregateType<T>>

    /**
     * Group by Preco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {precoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends precoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: precoGroupByArgs['orderBy'] }
        : { orderBy?: precoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, precoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preco model
   */
  readonly fields: precoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__precoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    modalidades<T extends modalidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, modalidadesDefaultArgs<ExtArgs>>): Prisma__modalidadesClient<$Result.GetResult<Prisma.$modalidadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the preco model
   */
  interface precoFieldRefs {
    readonly id: FieldRef<"preco", 'Int'>
    readonly modalidade_id: FieldRef<"preco", 'Int'>
    readonly mensalidade: FieldRef<"preco", 'Decimal'>
    readonly inscricao: FieldRef<"preco", 'Decimal'>
    readonly equipamento: FieldRef<"preco", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * preco findUnique
   */
  export type precoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * Filter, which preco to fetch.
     */
    where: precoWhereUniqueInput
  }

  /**
   * preco findUniqueOrThrow
   */
  export type precoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * Filter, which preco to fetch.
     */
    where: precoWhereUniqueInput
  }

  /**
   * preco findFirst
   */
  export type precoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * Filter, which preco to fetch.
     */
    where?: precoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of precos to fetch.
     */
    orderBy?: precoOrderByWithRelationInput | precoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for precos.
     */
    cursor?: precoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` precos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of precos.
     */
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * preco findFirstOrThrow
   */
  export type precoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * Filter, which preco to fetch.
     */
    where?: precoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of precos to fetch.
     */
    orderBy?: precoOrderByWithRelationInput | precoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for precos.
     */
    cursor?: precoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` precos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of precos.
     */
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * preco findMany
   */
  export type precoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * Filter, which precos to fetch.
     */
    where?: precoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of precos to fetch.
     */
    orderBy?: precoOrderByWithRelationInput | precoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing precos.
     */
    cursor?: precoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` precos.
     */
    skip?: number
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * preco create
   */
  export type precoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * The data needed to create a preco.
     */
    data: XOR<precoCreateInput, precoUncheckedCreateInput>
  }

  /**
   * preco createMany
   */
  export type precoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many precos.
     */
    data: precoCreateManyInput | precoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preco createManyAndReturn
   */
  export type precoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * The data used to create many precos.
     */
    data: precoCreateManyInput | precoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * preco update
   */
  export type precoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * The data needed to update a preco.
     */
    data: XOR<precoUpdateInput, precoUncheckedUpdateInput>
    /**
     * Choose, which preco to update.
     */
    where: precoWhereUniqueInput
  }

  /**
   * preco updateMany
   */
  export type precoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update precos.
     */
    data: XOR<precoUpdateManyMutationInput, precoUncheckedUpdateManyInput>
    /**
     * Filter which precos to update
     */
    where?: precoWhereInput
    /**
     * Limit how many precos to update.
     */
    limit?: number
  }

  /**
   * preco updateManyAndReturn
   */
  export type precoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * The data used to update precos.
     */
    data: XOR<precoUpdateManyMutationInput, precoUncheckedUpdateManyInput>
    /**
     * Filter which precos to update
     */
    where?: precoWhereInput
    /**
     * Limit how many precos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * preco upsert
   */
  export type precoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * The filter to search for the preco to update in case it exists.
     */
    where: precoWhereUniqueInput
    /**
     * In case the preco found by the `where` argument doesn't exist, create a new preco with this data.
     */
    create: XOR<precoCreateInput, precoUncheckedCreateInput>
    /**
     * In case the preco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<precoUpdateInput, precoUncheckedUpdateInput>
  }

  /**
   * preco delete
   */
  export type precoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
    /**
     * Filter which preco to delete.
     */
    where: precoWhereUniqueInput
  }

  /**
   * preco deleteMany
   */
  export type precoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which precos to delete
     */
    where?: precoWhereInput
    /**
     * Limit how many precos to delete.
     */
    limit?: number
  }

  /**
   * preco without action
   */
  export type precoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preco
     */
    select?: precoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preco
     */
    omit?: precoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: precoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompeticoesScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    nome: 'nome'
  };

  export type CompeticoesScalarFieldEnum = (typeof CompeticoesScalarFieldEnum)[keyof typeof CompeticoesScalarFieldEnum]


  export const ContactoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    assunto: 'assunto',
    mensagem: 'mensagem',
    data: 'data'
  };

  export type ContactoScalarFieldEnum = (typeof ContactoScalarFieldEnum)[keyof typeof ContactoScalarFieldEnum]


  export const Contacto_modalidadeScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    responsavel: 'responsavel',
    telefone: 'telefone',
    email: 'email'
  };

  export type Contacto_modalidadeScalarFieldEnum = (typeof Contacto_modalidadeScalarFieldEnum)[keyof typeof Contacto_modalidadeScalarFieldEnum]


  export const Detalhes_modalidadeScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    introducao: 'introducao',
    metodologia: 'metodologia',
    avaliacao: 'avaliacao',
    progressao: 'progressao'
  };

  export type Detalhes_modalidadeScalarFieldEnum = (typeof Detalhes_modalidadeScalarFieldEnum)[keyof typeof Detalhes_modalidadeScalarFieldEnum]


  export const EquipamentoScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    nome: 'nome'
  };

  export type EquipamentoScalarFieldEnum = (typeof EquipamentoScalarFieldEnum)[keyof typeof EquipamentoScalarFieldEnum]


  export const HorariosScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    dia: 'dia',
    inicio: 'inicio',
    fim: 'fim',
    nivel: 'nivel',
    grupo: 'grupo'
  };

  export type HorariosScalarFieldEnum = (typeof HorariosScalarFieldEnum)[keyof typeof HorariosScalarFieldEnum]


  export const ModalidadesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    slug: 'slug',
    icone: 'icone',
    descricao: 'descricao',
    ativo: 'ativo',
    categoria: 'categoria',
    idade_minima: 'idade_minima',
    idade_maxima: 'idade_maxima'
  };

  export type ModalidadesScalarFieldEnum = (typeof ModalidadesScalarFieldEnum)[keyof typeof ModalidadesScalarFieldEnum]


  export const NiveisScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    descricao: 'descricao'
  };

  export type NiveisScalarFieldEnum = (typeof NiveisScalarFieldEnum)[keyof typeof NiveisScalarFieldEnum]


  export const PrecoScalarFieldEnum: {
    id: 'id',
    modalidade_id: 'modalidade_id',
    mensalidade: 'mensalidade',
    inscricao: 'inscricao',
    equipamento: 'equipamento'
  };

  export type PrecoScalarFieldEnum = (typeof PrecoScalarFieldEnum)[keyof typeof PrecoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type competicoesWhereInput = {
    AND?: competicoesWhereInput | competicoesWhereInput[]
    OR?: competicoesWhereInput[]
    NOT?: competicoesWhereInput | competicoesWhereInput[]
    id?: IntFilter<"competicoes"> | number
    modalidade_id?: IntNullableFilter<"competicoes"> | number | null
    nome?: StringNullableFilter<"competicoes"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }

  export type competicoesOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type competicoesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: competicoesWhereInput | competicoesWhereInput[]
    OR?: competicoesWhereInput[]
    NOT?: competicoesWhereInput | competicoesWhereInput[]
    modalidade_id?: IntNullableFilter<"competicoes"> | number | null
    nome?: StringNullableFilter<"competicoes"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }, "id">

  export type competicoesOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: competicoesCountOrderByAggregateInput
    _avg?: competicoesAvgOrderByAggregateInput
    _max?: competicoesMaxOrderByAggregateInput
    _min?: competicoesMinOrderByAggregateInput
    _sum?: competicoesSumOrderByAggregateInput
  }

  export type competicoesScalarWhereWithAggregatesInput = {
    AND?: competicoesScalarWhereWithAggregatesInput | competicoesScalarWhereWithAggregatesInput[]
    OR?: competicoesScalarWhereWithAggregatesInput[]
    NOT?: competicoesScalarWhereWithAggregatesInput | competicoesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"competicoes"> | number
    modalidade_id?: IntNullableWithAggregatesFilter<"competicoes"> | number | null
    nome?: StringNullableWithAggregatesFilter<"competicoes"> | string | null
  }

  export type contactoWhereInput = {
    AND?: contactoWhereInput | contactoWhereInput[]
    OR?: contactoWhereInput[]
    NOT?: contactoWhereInput | contactoWhereInput[]
    id?: IntFilter<"contacto"> | number
    nome?: StringFilter<"contacto"> | string
    email?: StringFilter<"contacto"> | string
    assunto?: StringFilter<"contacto"> | string
    mensagem?: StringFilter<"contacto"> | string
    data?: DateTimeNullableFilter<"contacto"> | Date | string | null
  }

  export type contactoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    data?: SortOrderInput | SortOrder
  }

  export type contactoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactoWhereInput | contactoWhereInput[]
    OR?: contactoWhereInput[]
    NOT?: contactoWhereInput | contactoWhereInput[]
    nome?: StringFilter<"contacto"> | string
    email?: StringFilter<"contacto"> | string
    assunto?: StringFilter<"contacto"> | string
    mensagem?: StringFilter<"contacto"> | string
    data?: DateTimeNullableFilter<"contacto"> | Date | string | null
  }, "id">

  export type contactoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    data?: SortOrderInput | SortOrder
    _count?: contactoCountOrderByAggregateInput
    _avg?: contactoAvgOrderByAggregateInput
    _max?: contactoMaxOrderByAggregateInput
    _min?: contactoMinOrderByAggregateInput
    _sum?: contactoSumOrderByAggregateInput
  }

  export type contactoScalarWhereWithAggregatesInput = {
    AND?: contactoScalarWhereWithAggregatesInput | contactoScalarWhereWithAggregatesInput[]
    OR?: contactoScalarWhereWithAggregatesInput[]
    NOT?: contactoScalarWhereWithAggregatesInput | contactoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contacto"> | number
    nome?: StringWithAggregatesFilter<"contacto"> | string
    email?: StringWithAggregatesFilter<"contacto"> | string
    assunto?: StringWithAggregatesFilter<"contacto"> | string
    mensagem?: StringWithAggregatesFilter<"contacto"> | string
    data?: DateTimeNullableWithAggregatesFilter<"contacto"> | Date | string | null
  }

  export type contacto_modalidadeWhereInput = {
    AND?: contacto_modalidadeWhereInput | contacto_modalidadeWhereInput[]
    OR?: contacto_modalidadeWhereInput[]
    NOT?: contacto_modalidadeWhereInput | contacto_modalidadeWhereInput[]
    id?: IntFilter<"contacto_modalidade"> | number
    modalidade_id?: IntNullableFilter<"contacto_modalidade"> | number | null
    responsavel?: StringNullableFilter<"contacto_modalidade"> | string | null
    telefone?: StringNullableFilter<"contacto_modalidade"> | string | null
    email?: StringNullableFilter<"contacto_modalidade"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }

  export type contacto_modalidadeOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    responsavel?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type contacto_modalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contacto_modalidadeWhereInput | contacto_modalidadeWhereInput[]
    OR?: contacto_modalidadeWhereInput[]
    NOT?: contacto_modalidadeWhereInput | contacto_modalidadeWhereInput[]
    modalidade_id?: IntNullableFilter<"contacto_modalidade"> | number | null
    responsavel?: StringNullableFilter<"contacto_modalidade"> | string | null
    telefone?: StringNullableFilter<"contacto_modalidade"> | string | null
    email?: StringNullableFilter<"contacto_modalidade"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }, "id">

  export type contacto_modalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    responsavel?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: contacto_modalidadeCountOrderByAggregateInput
    _avg?: contacto_modalidadeAvgOrderByAggregateInput
    _max?: contacto_modalidadeMaxOrderByAggregateInput
    _min?: contacto_modalidadeMinOrderByAggregateInput
    _sum?: contacto_modalidadeSumOrderByAggregateInput
  }

  export type contacto_modalidadeScalarWhereWithAggregatesInput = {
    AND?: contacto_modalidadeScalarWhereWithAggregatesInput | contacto_modalidadeScalarWhereWithAggregatesInput[]
    OR?: contacto_modalidadeScalarWhereWithAggregatesInput[]
    NOT?: contacto_modalidadeScalarWhereWithAggregatesInput | contacto_modalidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contacto_modalidade"> | number
    modalidade_id?: IntNullableWithAggregatesFilter<"contacto_modalidade"> | number | null
    responsavel?: StringNullableWithAggregatesFilter<"contacto_modalidade"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"contacto_modalidade"> | string | null
    email?: StringNullableWithAggregatesFilter<"contacto_modalidade"> | string | null
  }

  export type detalhes_modalidadeWhereInput = {
    AND?: detalhes_modalidadeWhereInput | detalhes_modalidadeWhereInput[]
    OR?: detalhes_modalidadeWhereInput[]
    NOT?: detalhes_modalidadeWhereInput | detalhes_modalidadeWhereInput[]
    id?: IntFilter<"detalhes_modalidade"> | number
    modalidade_id?: IntNullableFilter<"detalhes_modalidade"> | number | null
    introducao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    metodologia?: StringNullableFilter<"detalhes_modalidade"> | string | null
    avaliacao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    progressao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }

  export type detalhes_modalidadeOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    introducao?: SortOrderInput | SortOrder
    metodologia?: SortOrderInput | SortOrder
    avaliacao?: SortOrderInput | SortOrder
    progressao?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type detalhes_modalidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detalhes_modalidadeWhereInput | detalhes_modalidadeWhereInput[]
    OR?: detalhes_modalidadeWhereInput[]
    NOT?: detalhes_modalidadeWhereInput | detalhes_modalidadeWhereInput[]
    modalidade_id?: IntNullableFilter<"detalhes_modalidade"> | number | null
    introducao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    metodologia?: StringNullableFilter<"detalhes_modalidade"> | string | null
    avaliacao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    progressao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }, "id">

  export type detalhes_modalidadeOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    introducao?: SortOrderInput | SortOrder
    metodologia?: SortOrderInput | SortOrder
    avaliacao?: SortOrderInput | SortOrder
    progressao?: SortOrderInput | SortOrder
    _count?: detalhes_modalidadeCountOrderByAggregateInput
    _avg?: detalhes_modalidadeAvgOrderByAggregateInput
    _max?: detalhes_modalidadeMaxOrderByAggregateInput
    _min?: detalhes_modalidadeMinOrderByAggregateInput
    _sum?: detalhes_modalidadeSumOrderByAggregateInput
  }

  export type detalhes_modalidadeScalarWhereWithAggregatesInput = {
    AND?: detalhes_modalidadeScalarWhereWithAggregatesInput | detalhes_modalidadeScalarWhereWithAggregatesInput[]
    OR?: detalhes_modalidadeScalarWhereWithAggregatesInput[]
    NOT?: detalhes_modalidadeScalarWhereWithAggregatesInput | detalhes_modalidadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detalhes_modalidade"> | number
    modalidade_id?: IntNullableWithAggregatesFilter<"detalhes_modalidade"> | number | null
    introducao?: StringNullableWithAggregatesFilter<"detalhes_modalidade"> | string | null
    metodologia?: StringNullableWithAggregatesFilter<"detalhes_modalidade"> | string | null
    avaliacao?: StringNullableWithAggregatesFilter<"detalhes_modalidade"> | string | null
    progressao?: StringNullableWithAggregatesFilter<"detalhes_modalidade"> | string | null
  }

  export type equipamentoWhereInput = {
    AND?: equipamentoWhereInput | equipamentoWhereInput[]
    OR?: equipamentoWhereInput[]
    NOT?: equipamentoWhereInput | equipamentoWhereInput[]
    id?: IntFilter<"equipamento"> | number
    modalidade_id?: IntNullableFilter<"equipamento"> | number | null
    nome?: StringNullableFilter<"equipamento"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }

  export type equipamentoOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type equipamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: equipamentoWhereInput | equipamentoWhereInput[]
    OR?: equipamentoWhereInput[]
    NOT?: equipamentoWhereInput | equipamentoWhereInput[]
    modalidade_id?: IntNullableFilter<"equipamento"> | number | null
    nome?: StringNullableFilter<"equipamento"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }, "id">

  export type equipamentoOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: equipamentoCountOrderByAggregateInput
    _avg?: equipamentoAvgOrderByAggregateInput
    _max?: equipamentoMaxOrderByAggregateInput
    _min?: equipamentoMinOrderByAggregateInput
    _sum?: equipamentoSumOrderByAggregateInput
  }

  export type equipamentoScalarWhereWithAggregatesInput = {
    AND?: equipamentoScalarWhereWithAggregatesInput | equipamentoScalarWhereWithAggregatesInput[]
    OR?: equipamentoScalarWhereWithAggregatesInput[]
    NOT?: equipamentoScalarWhereWithAggregatesInput | equipamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"equipamento"> | number
    modalidade_id?: IntNullableWithAggregatesFilter<"equipamento"> | number | null
    nome?: StringNullableWithAggregatesFilter<"equipamento"> | string | null
  }

  export type horariosWhereInput = {
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    id?: IntFilter<"horarios"> | number
    modalidade_id?: IntNullableFilter<"horarios"> | number | null
    dia?: StringNullableFilter<"horarios"> | string | null
    inicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    fim?: DateTimeNullableFilter<"horarios"> | Date | string | null
    nivel?: StringNullableFilter<"horarios"> | string | null
    grupo?: StringNullableFilter<"horarios"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }

  export type horariosOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    dia?: SortOrderInput | SortOrder
    inicio?: SortOrderInput | SortOrder
    fim?: SortOrderInput | SortOrder
    nivel?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type horariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: horariosWhereInput | horariosWhereInput[]
    OR?: horariosWhereInput[]
    NOT?: horariosWhereInput | horariosWhereInput[]
    modalidade_id?: IntNullableFilter<"horarios"> | number | null
    dia?: StringNullableFilter<"horarios"> | string | null
    inicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    fim?: DateTimeNullableFilter<"horarios"> | Date | string | null
    nivel?: StringNullableFilter<"horarios"> | string | null
    grupo?: StringNullableFilter<"horarios"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }, "id">

  export type horariosOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    dia?: SortOrderInput | SortOrder
    inicio?: SortOrderInput | SortOrder
    fim?: SortOrderInput | SortOrder
    nivel?: SortOrderInput | SortOrder
    grupo?: SortOrderInput | SortOrder
    _count?: horariosCountOrderByAggregateInput
    _avg?: horariosAvgOrderByAggregateInput
    _max?: horariosMaxOrderByAggregateInput
    _min?: horariosMinOrderByAggregateInput
    _sum?: horariosSumOrderByAggregateInput
  }

  export type horariosScalarWhereWithAggregatesInput = {
    AND?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    OR?: horariosScalarWhereWithAggregatesInput[]
    NOT?: horariosScalarWhereWithAggregatesInput | horariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"horarios"> | number
    modalidade_id?: IntNullableWithAggregatesFilter<"horarios"> | number | null
    dia?: StringNullableWithAggregatesFilter<"horarios"> | string | null
    inicio?: DateTimeNullableWithAggregatesFilter<"horarios"> | Date | string | null
    fim?: DateTimeNullableWithAggregatesFilter<"horarios"> | Date | string | null
    nivel?: StringNullableWithAggregatesFilter<"horarios"> | string | null
    grupo?: StringNullableWithAggregatesFilter<"horarios"> | string | null
  }

  export type modalidadesWhereInput = {
    AND?: modalidadesWhereInput | modalidadesWhereInput[]
    OR?: modalidadesWhereInput[]
    NOT?: modalidadesWhereInput | modalidadesWhereInput[]
    id?: IntFilter<"modalidades"> | number
    nome?: StringFilter<"modalidades"> | string
    slug?: StringFilter<"modalidades"> | string
    icone?: StringNullableFilter<"modalidades"> | string | null
    descricao?: StringNullableFilter<"modalidades"> | string | null
    ativo?: BoolFilter<"modalidades"> | boolean
    categoria?: StringNullableFilter<"modalidades"> | string | null
    idade_minima?: IntFilter<"modalidades"> | number
    idade_maxima?: IntNullableFilter<"modalidades"> | number | null
    competicoes?: CompeticoesListRelationFilter
    contacto_modalidade?: Contacto_modalidadeListRelationFilter
    detalhes_modalidade?: Detalhes_modalidadeListRelationFilter
    equipamento?: EquipamentoListRelationFilter
    horarios?: HorariosListRelationFilter
    niveis?: NiveisListRelationFilter
    preco?: PrecoListRelationFilter
  }

  export type modalidadesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    icone?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    categoria?: SortOrderInput | SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrderInput | SortOrder
    competicoes?: competicoesOrderByRelationAggregateInput
    contacto_modalidade?: contacto_modalidadeOrderByRelationAggregateInput
    detalhes_modalidade?: detalhes_modalidadeOrderByRelationAggregateInput
    equipamento?: equipamentoOrderByRelationAggregateInput
    horarios?: horariosOrderByRelationAggregateInput
    niveis?: niveisOrderByRelationAggregateInput
    preco?: precoOrderByRelationAggregateInput
  }

  export type modalidadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: modalidadesWhereInput | modalidadesWhereInput[]
    OR?: modalidadesWhereInput[]
    NOT?: modalidadesWhereInput | modalidadesWhereInput[]
    nome?: StringFilter<"modalidades"> | string
    icone?: StringNullableFilter<"modalidades"> | string | null
    descricao?: StringNullableFilter<"modalidades"> | string | null
    ativo?: BoolFilter<"modalidades"> | boolean
    categoria?: StringNullableFilter<"modalidades"> | string | null
    idade_minima?: IntFilter<"modalidades"> | number
    idade_maxima?: IntNullableFilter<"modalidades"> | number | null
    competicoes?: CompeticoesListRelationFilter
    contacto_modalidade?: Contacto_modalidadeListRelationFilter
    detalhes_modalidade?: Detalhes_modalidadeListRelationFilter
    equipamento?: EquipamentoListRelationFilter
    horarios?: HorariosListRelationFilter
    niveis?: NiveisListRelationFilter
    preco?: PrecoListRelationFilter
  }, "id" | "slug">

  export type modalidadesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    icone?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    categoria?: SortOrderInput | SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrderInput | SortOrder
    _count?: modalidadesCountOrderByAggregateInput
    _avg?: modalidadesAvgOrderByAggregateInput
    _max?: modalidadesMaxOrderByAggregateInput
    _min?: modalidadesMinOrderByAggregateInput
    _sum?: modalidadesSumOrderByAggregateInput
  }

  export type modalidadesScalarWhereWithAggregatesInput = {
    AND?: modalidadesScalarWhereWithAggregatesInput | modalidadesScalarWhereWithAggregatesInput[]
    OR?: modalidadesScalarWhereWithAggregatesInput[]
    NOT?: modalidadesScalarWhereWithAggregatesInput | modalidadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"modalidades"> | number
    nome?: StringWithAggregatesFilter<"modalidades"> | string
    slug?: StringWithAggregatesFilter<"modalidades"> | string
    icone?: StringNullableWithAggregatesFilter<"modalidades"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"modalidades"> | string | null
    ativo?: BoolWithAggregatesFilter<"modalidades"> | boolean
    categoria?: StringNullableWithAggregatesFilter<"modalidades"> | string | null
    idade_minima?: IntWithAggregatesFilter<"modalidades"> | number
    idade_maxima?: IntNullableWithAggregatesFilter<"modalidades"> | number | null
  }

  export type niveisWhereInput = {
    AND?: niveisWhereInput | niveisWhereInput[]
    OR?: niveisWhereInput[]
    NOT?: niveisWhereInput | niveisWhereInput[]
    id?: IntFilter<"niveis"> | number
    modalidade_id?: IntNullableFilter<"niveis"> | number | null
    descricao?: StringNullableFilter<"niveis"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }

  export type niveisOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type niveisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: niveisWhereInput | niveisWhereInput[]
    OR?: niveisWhereInput[]
    NOT?: niveisWhereInput | niveisWhereInput[]
    modalidade_id?: IntNullableFilter<"niveis"> | number | null
    descricao?: StringNullableFilter<"niveis"> | string | null
    modalidades?: XOR<ModalidadesNullableScalarRelationFilter, modalidadesWhereInput> | null
  }, "id">

  export type niveisOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: niveisCountOrderByAggregateInput
    _avg?: niveisAvgOrderByAggregateInput
    _max?: niveisMaxOrderByAggregateInput
    _min?: niveisMinOrderByAggregateInput
    _sum?: niveisSumOrderByAggregateInput
  }

  export type niveisScalarWhereWithAggregatesInput = {
    AND?: niveisScalarWhereWithAggregatesInput | niveisScalarWhereWithAggregatesInput[]
    OR?: niveisScalarWhereWithAggregatesInput[]
    NOT?: niveisScalarWhereWithAggregatesInput | niveisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"niveis"> | number
    modalidade_id?: IntNullableWithAggregatesFilter<"niveis"> | number | null
    descricao?: StringNullableWithAggregatesFilter<"niveis"> | string | null
  }

  export type precoWhereInput = {
    AND?: precoWhereInput | precoWhereInput[]
    OR?: precoWhereInput[]
    NOT?: precoWhereInput | precoWhereInput[]
    id?: IntFilter<"preco"> | number
    modalidade_id?: IntFilter<"preco"> | number
    mensalidade?: DecimalFilter<"preco"> | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFilter<"preco"> | Decimal | DecimalJsLike | number | string
    equipamento?: DecimalNullableFilter<"preco"> | Decimal | DecimalJsLike | number | string | null
    modalidades?: XOR<ModalidadesScalarRelationFilter, modalidadesWhereInput>
  }

  export type precoOrderByWithRelationInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrderInput | SortOrder
    modalidades?: modalidadesOrderByWithRelationInput
  }

  export type precoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: precoWhereInput | precoWhereInput[]
    OR?: precoWhereInput[]
    NOT?: precoWhereInput | precoWhereInput[]
    modalidade_id?: IntFilter<"preco"> | number
    mensalidade?: DecimalFilter<"preco"> | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFilter<"preco"> | Decimal | DecimalJsLike | number | string
    equipamento?: DecimalNullableFilter<"preco"> | Decimal | DecimalJsLike | number | string | null
    modalidades?: XOR<ModalidadesScalarRelationFilter, modalidadesWhereInput>
  }, "id">

  export type precoOrderByWithAggregationInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrderInput | SortOrder
    _count?: precoCountOrderByAggregateInput
    _avg?: precoAvgOrderByAggregateInput
    _max?: precoMaxOrderByAggregateInput
    _min?: precoMinOrderByAggregateInput
    _sum?: precoSumOrderByAggregateInput
  }

  export type precoScalarWhereWithAggregatesInput = {
    AND?: precoScalarWhereWithAggregatesInput | precoScalarWhereWithAggregatesInput[]
    OR?: precoScalarWhereWithAggregatesInput[]
    NOT?: precoScalarWhereWithAggregatesInput | precoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"preco"> | number
    modalidade_id?: IntWithAggregatesFilter<"preco"> | number
    mensalidade?: DecimalWithAggregatesFilter<"preco"> | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalWithAggregatesFilter<"preco"> | Decimal | DecimalJsLike | number | string
    equipamento?: DecimalNullableWithAggregatesFilter<"preco"> | Decimal | DecimalJsLike | number | string | null
  }

  export type competicoesCreateInput = {
    nome?: string | null
    modalidades?: modalidadesCreateNestedOneWithoutCompeticoesInput
  }

  export type competicoesUncheckedCreateInput = {
    id?: number
    modalidade_id?: number | null
    nome?: string | null
  }

  export type competicoesUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    modalidades?: modalidadesUpdateOneWithoutCompeticoesNestedInput
  }

  export type competicoesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type competicoesCreateManyInput = {
    id?: number
    modalidade_id?: number | null
    nome?: string | null
  }

  export type competicoesUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type competicoesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contactoCreateInput = {
    nome: string
    email: string
    assunto: string
    mensagem: string
    data?: Date | string | null
  }

  export type contactoUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    assunto: string
    mensagem: string
    data?: Date | string | null
  }

  export type contactoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactoCreateManyInput = {
    id?: number
    nome: string
    email: string
    assunto: string
    mensagem: string
    data?: Date | string | null
  }

  export type contactoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contactoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    assunto?: StringFieldUpdateOperationsInput | string
    mensagem?: StringFieldUpdateOperationsInput | string
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type contacto_modalidadeCreateInput = {
    responsavel?: string | null
    telefone?: string | null
    email?: string | null
    modalidades?: modalidadesCreateNestedOneWithoutContacto_modalidadeInput
  }

  export type contacto_modalidadeUncheckedCreateInput = {
    id?: number
    modalidade_id?: number | null
    responsavel?: string | null
    telefone?: string | null
    email?: string | null
  }

  export type contacto_modalidadeUpdateInput = {
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    modalidades?: modalidadesUpdateOneWithoutContacto_modalidadeNestedInput
  }

  export type contacto_modalidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contacto_modalidadeCreateManyInput = {
    id?: number
    modalidade_id?: number | null
    responsavel?: string | null
    telefone?: string | null
    email?: string | null
  }

  export type contacto_modalidadeUpdateManyMutationInput = {
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contacto_modalidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalhes_modalidadeCreateInput = {
    introducao?: string | null
    metodologia?: string | null
    avaliacao?: string | null
    progressao?: string | null
    modalidades?: modalidadesCreateNestedOneWithoutDetalhes_modalidadeInput
  }

  export type detalhes_modalidadeUncheckedCreateInput = {
    id?: number
    modalidade_id?: number | null
    introducao?: string | null
    metodologia?: string | null
    avaliacao?: string | null
    progressao?: string | null
  }

  export type detalhes_modalidadeUpdateInput = {
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
    modalidades?: modalidadesUpdateOneWithoutDetalhes_modalidadeNestedInput
  }

  export type detalhes_modalidadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalhes_modalidadeCreateManyInput = {
    id?: number
    modalidade_id?: number | null
    introducao?: string | null
    metodologia?: string | null
    avaliacao?: string | null
    progressao?: string | null
  }

  export type detalhes_modalidadeUpdateManyMutationInput = {
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalhes_modalidadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoCreateInput = {
    nome?: string | null
    modalidades?: modalidadesCreateNestedOneWithoutEquipamentoInput
  }

  export type equipamentoUncheckedCreateInput = {
    id?: number
    modalidade_id?: number | null
    nome?: string | null
  }

  export type equipamentoUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    modalidades?: modalidadesUpdateOneWithoutEquipamentoNestedInput
  }

  export type equipamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoCreateManyInput = {
    id?: number
    modalidade_id?: number | null
    nome?: string | null
  }

  export type equipamentoUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horariosCreateInput = {
    dia?: string | null
    inicio?: Date | string | null
    fim?: Date | string | null
    nivel?: string | null
    grupo?: string | null
    modalidades?: modalidadesCreateNestedOneWithoutHorariosInput
  }

  export type horariosUncheckedCreateInput = {
    id?: number
    modalidade_id?: number | null
    dia?: string | null
    inicio?: Date | string | null
    fim?: Date | string | null
    nivel?: string | null
    grupo?: string | null
  }

  export type horariosUpdateInput = {
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
    modalidades?: modalidadesUpdateOneWithoutHorariosNestedInput
  }

  export type horariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horariosCreateManyInput = {
    id?: number
    modalidade_id?: number | null
    dia?: string | null
    inicio?: Date | string | null
    fim?: Date | string | null
    nivel?: string | null
    grupo?: string | null
  }

  export type horariosUpdateManyMutationInput = {
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type modalidadesCreateInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesCreateManyInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
  }

  export type modalidadesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type modalidadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type niveisCreateInput = {
    descricao?: string | null
    modalidades?: modalidadesCreateNestedOneWithoutNiveisInput
  }

  export type niveisUncheckedCreateInput = {
    id?: number
    modalidade_id?: number | null
    descricao?: string | null
  }

  export type niveisUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    modalidades?: modalidadesUpdateOneWithoutNiveisNestedInput
  }

  export type niveisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type niveisCreateManyInput = {
    id?: number
    modalidade_id?: number | null
    descricao?: string | null
  }

  export type niveisUpdateManyMutationInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type niveisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: NullableIntFieldUpdateOperationsInput | number | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type precoCreateInput = {
    mensalidade: Decimal | DecimalJsLike | number | string
    inscricao: Decimal | DecimalJsLike | number | string
    equipamento?: Decimal | DecimalJsLike | number | string | null
    modalidades: modalidadesCreateNestedOneWithoutPrecoInput
  }

  export type precoUncheckedCreateInput = {
    id?: number
    modalidade_id: number
    mensalidade: Decimal | DecimalJsLike | number | string
    inscricao: Decimal | DecimalJsLike | number | string
    equipamento?: Decimal | DecimalJsLike | number | string | null
  }

  export type precoUpdateInput = {
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    modalidades?: modalidadesUpdateOneRequiredWithoutPrecoNestedInput
  }

  export type precoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: IntFieldUpdateOperationsInput | number
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type precoCreateManyInput = {
    id?: number
    modalidade_id: number
    mensalidade: Decimal | DecimalJsLike | number | string
    inscricao: Decimal | DecimalJsLike | number | string
    equipamento?: Decimal | DecimalJsLike | number | string | null
  }

  export type precoUpdateManyMutationInput = {
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type precoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modalidade_id?: IntFieldUpdateOperationsInput | number
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ModalidadesNullableScalarRelationFilter = {
    is?: modalidadesWhereInput | null
    isNot?: modalidadesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type competicoesCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    nome?: SortOrder
  }

  export type competicoesAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type competicoesMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    nome?: SortOrder
  }

  export type competicoesMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    nome?: SortOrder
  }

  export type competicoesSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type contactoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    data?: SortOrder
  }

  export type contactoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    data?: SortOrder
  }

  export type contactoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    assunto?: SortOrder
    mensagem?: SortOrder
    data?: SortOrder
  }

  export type contactoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type contacto_modalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type contacto_modalidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type contacto_modalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type contacto_modalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    responsavel?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
  }

  export type contacto_modalidadeSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type detalhes_modalidadeCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    introducao?: SortOrder
    metodologia?: SortOrder
    avaliacao?: SortOrder
    progressao?: SortOrder
  }

  export type detalhes_modalidadeAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type detalhes_modalidadeMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    introducao?: SortOrder
    metodologia?: SortOrder
    avaliacao?: SortOrder
    progressao?: SortOrder
  }

  export type detalhes_modalidadeMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    introducao?: SortOrder
    metodologia?: SortOrder
    avaliacao?: SortOrder
    progressao?: SortOrder
  }

  export type detalhes_modalidadeSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type equipamentoCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    nome?: SortOrder
  }

  export type equipamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type equipamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    nome?: SortOrder
  }

  export type equipamentoMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    nome?: SortOrder
  }

  export type equipamentoSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type horariosCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    dia?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    nivel?: SortOrder
    grupo?: SortOrder
  }

  export type horariosAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type horariosMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    dia?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    nivel?: SortOrder
    grupo?: SortOrder
  }

  export type horariosMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    dia?: SortOrder
    inicio?: SortOrder
    fim?: SortOrder
    nivel?: SortOrder
    grupo?: SortOrder
  }

  export type horariosSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompeticoesListRelationFilter = {
    every?: competicoesWhereInput
    some?: competicoesWhereInput
    none?: competicoesWhereInput
  }

  export type Contacto_modalidadeListRelationFilter = {
    every?: contacto_modalidadeWhereInput
    some?: contacto_modalidadeWhereInput
    none?: contacto_modalidadeWhereInput
  }

  export type Detalhes_modalidadeListRelationFilter = {
    every?: detalhes_modalidadeWhereInput
    some?: detalhes_modalidadeWhereInput
    none?: detalhes_modalidadeWhereInput
  }

  export type EquipamentoListRelationFilter = {
    every?: equipamentoWhereInput
    some?: equipamentoWhereInput
    none?: equipamentoWhereInput
  }

  export type HorariosListRelationFilter = {
    every?: horariosWhereInput
    some?: horariosWhereInput
    none?: horariosWhereInput
  }

  export type NiveisListRelationFilter = {
    every?: niveisWhereInput
    some?: niveisWhereInput
    none?: niveisWhereInput
  }

  export type PrecoListRelationFilter = {
    every?: precoWhereInput
    some?: precoWhereInput
    none?: precoWhereInput
  }

  export type competicoesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contacto_modalidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type detalhes_modalidadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type equipamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type horariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type niveisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type precoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type modalidadesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    icone?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    categoria?: SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrder
  }

  export type modalidadesAvgOrderByAggregateInput = {
    id?: SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrder
  }

  export type modalidadesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    icone?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    categoria?: SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrder
  }

  export type modalidadesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    slug?: SortOrder
    icone?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    categoria?: SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrder
  }

  export type modalidadesSumOrderByAggregateInput = {
    id?: SortOrder
    idade_minima?: SortOrder
    idade_maxima?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type niveisCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    descricao?: SortOrder
  }

  export type niveisAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type niveisMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    descricao?: SortOrder
  }

  export type niveisMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    descricao?: SortOrder
  }

  export type niveisSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ModalidadesScalarRelationFilter = {
    is?: modalidadesWhereInput
    isNot?: modalidadesWhereInput
  }

  export type precoCountOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrder
  }

  export type precoAvgOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrder
  }

  export type precoMaxOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrder
  }

  export type precoMinOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrder
  }

  export type precoSumOrderByAggregateInput = {
    id?: SortOrder
    modalidade_id?: SortOrder
    mensalidade?: SortOrder
    inscricao?: SortOrder
    equipamento?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type modalidadesCreateNestedOneWithoutCompeticoesInput = {
    create?: XOR<modalidadesCreateWithoutCompeticoesInput, modalidadesUncheckedCreateWithoutCompeticoesInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutCompeticoesInput
    connect?: modalidadesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type modalidadesUpdateOneWithoutCompeticoesNestedInput = {
    create?: XOR<modalidadesCreateWithoutCompeticoesInput, modalidadesUncheckedCreateWithoutCompeticoesInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutCompeticoesInput
    upsert?: modalidadesUpsertWithoutCompeticoesInput
    disconnect?: modalidadesWhereInput | boolean
    delete?: modalidadesWhereInput | boolean
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutCompeticoesInput, modalidadesUpdateWithoutCompeticoesInput>, modalidadesUncheckedUpdateWithoutCompeticoesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type modalidadesCreateNestedOneWithoutContacto_modalidadeInput = {
    create?: XOR<modalidadesCreateWithoutContacto_modalidadeInput, modalidadesUncheckedCreateWithoutContacto_modalidadeInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutContacto_modalidadeInput
    connect?: modalidadesWhereUniqueInput
  }

  export type modalidadesUpdateOneWithoutContacto_modalidadeNestedInput = {
    create?: XOR<modalidadesCreateWithoutContacto_modalidadeInput, modalidadesUncheckedCreateWithoutContacto_modalidadeInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutContacto_modalidadeInput
    upsert?: modalidadesUpsertWithoutContacto_modalidadeInput
    disconnect?: modalidadesWhereInput | boolean
    delete?: modalidadesWhereInput | boolean
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutContacto_modalidadeInput, modalidadesUpdateWithoutContacto_modalidadeInput>, modalidadesUncheckedUpdateWithoutContacto_modalidadeInput>
  }

  export type modalidadesCreateNestedOneWithoutDetalhes_modalidadeInput = {
    create?: XOR<modalidadesCreateWithoutDetalhes_modalidadeInput, modalidadesUncheckedCreateWithoutDetalhes_modalidadeInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutDetalhes_modalidadeInput
    connect?: modalidadesWhereUniqueInput
  }

  export type modalidadesUpdateOneWithoutDetalhes_modalidadeNestedInput = {
    create?: XOR<modalidadesCreateWithoutDetalhes_modalidadeInput, modalidadesUncheckedCreateWithoutDetalhes_modalidadeInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutDetalhes_modalidadeInput
    upsert?: modalidadesUpsertWithoutDetalhes_modalidadeInput
    disconnect?: modalidadesWhereInput | boolean
    delete?: modalidadesWhereInput | boolean
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutDetalhes_modalidadeInput, modalidadesUpdateWithoutDetalhes_modalidadeInput>, modalidadesUncheckedUpdateWithoutDetalhes_modalidadeInput>
  }

  export type modalidadesCreateNestedOneWithoutEquipamentoInput = {
    create?: XOR<modalidadesCreateWithoutEquipamentoInput, modalidadesUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutEquipamentoInput
    connect?: modalidadesWhereUniqueInput
  }

  export type modalidadesUpdateOneWithoutEquipamentoNestedInput = {
    create?: XOR<modalidadesCreateWithoutEquipamentoInput, modalidadesUncheckedCreateWithoutEquipamentoInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutEquipamentoInput
    upsert?: modalidadesUpsertWithoutEquipamentoInput
    disconnect?: modalidadesWhereInput | boolean
    delete?: modalidadesWhereInput | boolean
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutEquipamentoInput, modalidadesUpdateWithoutEquipamentoInput>, modalidadesUncheckedUpdateWithoutEquipamentoInput>
  }

  export type modalidadesCreateNestedOneWithoutHorariosInput = {
    create?: XOR<modalidadesCreateWithoutHorariosInput, modalidadesUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutHorariosInput
    connect?: modalidadesWhereUniqueInput
  }

  export type modalidadesUpdateOneWithoutHorariosNestedInput = {
    create?: XOR<modalidadesCreateWithoutHorariosInput, modalidadesUncheckedCreateWithoutHorariosInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutHorariosInput
    upsert?: modalidadesUpsertWithoutHorariosInput
    disconnect?: modalidadesWhereInput | boolean
    delete?: modalidadesWhereInput | boolean
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutHorariosInput, modalidadesUpdateWithoutHorariosInput>, modalidadesUncheckedUpdateWithoutHorariosInput>
  }

  export type competicoesCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<competicoesCreateWithoutModalidadesInput, competicoesUncheckedCreateWithoutModalidadesInput> | competicoesCreateWithoutModalidadesInput[] | competicoesUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: competicoesCreateOrConnectWithoutModalidadesInput | competicoesCreateOrConnectWithoutModalidadesInput[]
    createMany?: competicoesCreateManyModalidadesInputEnvelope
    connect?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
  }

  export type contacto_modalidadeCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<contacto_modalidadeCreateWithoutModalidadesInput, contacto_modalidadeUncheckedCreateWithoutModalidadesInput> | contacto_modalidadeCreateWithoutModalidadesInput[] | contacto_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: contacto_modalidadeCreateOrConnectWithoutModalidadesInput | contacto_modalidadeCreateOrConnectWithoutModalidadesInput[]
    createMany?: contacto_modalidadeCreateManyModalidadesInputEnvelope
    connect?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
  }

  export type detalhes_modalidadeCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<detalhes_modalidadeCreateWithoutModalidadesInput, detalhes_modalidadeUncheckedCreateWithoutModalidadesInput> | detalhes_modalidadeCreateWithoutModalidadesInput[] | detalhes_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: detalhes_modalidadeCreateOrConnectWithoutModalidadesInput | detalhes_modalidadeCreateOrConnectWithoutModalidadesInput[]
    createMany?: detalhes_modalidadeCreateManyModalidadesInputEnvelope
    connect?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
  }

  export type equipamentoCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<equipamentoCreateWithoutModalidadesInput, equipamentoUncheckedCreateWithoutModalidadesInput> | equipamentoCreateWithoutModalidadesInput[] | equipamentoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutModalidadesInput | equipamentoCreateOrConnectWithoutModalidadesInput[]
    createMany?: equipamentoCreateManyModalidadesInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type horariosCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<horariosCreateWithoutModalidadesInput, horariosUncheckedCreateWithoutModalidadesInput> | horariosCreateWithoutModalidadesInput[] | horariosUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: horariosCreateOrConnectWithoutModalidadesInput | horariosCreateOrConnectWithoutModalidadesInput[]
    createMany?: horariosCreateManyModalidadesInputEnvelope
    connect?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
  }

  export type niveisCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<niveisCreateWithoutModalidadesInput, niveisUncheckedCreateWithoutModalidadesInput> | niveisCreateWithoutModalidadesInput[] | niveisUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: niveisCreateOrConnectWithoutModalidadesInput | niveisCreateOrConnectWithoutModalidadesInput[]
    createMany?: niveisCreateManyModalidadesInputEnvelope
    connect?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
  }

  export type precoCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<precoCreateWithoutModalidadesInput, precoUncheckedCreateWithoutModalidadesInput> | precoCreateWithoutModalidadesInput[] | precoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: precoCreateOrConnectWithoutModalidadesInput | precoCreateOrConnectWithoutModalidadesInput[]
    createMany?: precoCreateManyModalidadesInputEnvelope
    connect?: precoWhereUniqueInput | precoWhereUniqueInput[]
  }

  export type competicoesUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<competicoesCreateWithoutModalidadesInput, competicoesUncheckedCreateWithoutModalidadesInput> | competicoesCreateWithoutModalidadesInput[] | competicoesUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: competicoesCreateOrConnectWithoutModalidadesInput | competicoesCreateOrConnectWithoutModalidadesInput[]
    createMany?: competicoesCreateManyModalidadesInputEnvelope
    connect?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
  }

  export type contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<contacto_modalidadeCreateWithoutModalidadesInput, contacto_modalidadeUncheckedCreateWithoutModalidadesInput> | contacto_modalidadeCreateWithoutModalidadesInput[] | contacto_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: contacto_modalidadeCreateOrConnectWithoutModalidadesInput | contacto_modalidadeCreateOrConnectWithoutModalidadesInput[]
    createMany?: contacto_modalidadeCreateManyModalidadesInputEnvelope
    connect?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
  }

  export type detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<detalhes_modalidadeCreateWithoutModalidadesInput, detalhes_modalidadeUncheckedCreateWithoutModalidadesInput> | detalhes_modalidadeCreateWithoutModalidadesInput[] | detalhes_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: detalhes_modalidadeCreateOrConnectWithoutModalidadesInput | detalhes_modalidadeCreateOrConnectWithoutModalidadesInput[]
    createMany?: detalhes_modalidadeCreateManyModalidadesInputEnvelope
    connect?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
  }

  export type equipamentoUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<equipamentoCreateWithoutModalidadesInput, equipamentoUncheckedCreateWithoutModalidadesInput> | equipamentoCreateWithoutModalidadesInput[] | equipamentoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutModalidadesInput | equipamentoCreateOrConnectWithoutModalidadesInput[]
    createMany?: equipamentoCreateManyModalidadesInputEnvelope
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
  }

  export type horariosUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<horariosCreateWithoutModalidadesInput, horariosUncheckedCreateWithoutModalidadesInput> | horariosCreateWithoutModalidadesInput[] | horariosUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: horariosCreateOrConnectWithoutModalidadesInput | horariosCreateOrConnectWithoutModalidadesInput[]
    createMany?: horariosCreateManyModalidadesInputEnvelope
    connect?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
  }

  export type niveisUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<niveisCreateWithoutModalidadesInput, niveisUncheckedCreateWithoutModalidadesInput> | niveisCreateWithoutModalidadesInput[] | niveisUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: niveisCreateOrConnectWithoutModalidadesInput | niveisCreateOrConnectWithoutModalidadesInput[]
    createMany?: niveisCreateManyModalidadesInputEnvelope
    connect?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
  }

  export type precoUncheckedCreateNestedManyWithoutModalidadesInput = {
    create?: XOR<precoCreateWithoutModalidadesInput, precoUncheckedCreateWithoutModalidadesInput> | precoCreateWithoutModalidadesInput[] | precoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: precoCreateOrConnectWithoutModalidadesInput | precoCreateOrConnectWithoutModalidadesInput[]
    createMany?: precoCreateManyModalidadesInputEnvelope
    connect?: precoWhereUniqueInput | precoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type competicoesUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<competicoesCreateWithoutModalidadesInput, competicoesUncheckedCreateWithoutModalidadesInput> | competicoesCreateWithoutModalidadesInput[] | competicoesUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: competicoesCreateOrConnectWithoutModalidadesInput | competicoesCreateOrConnectWithoutModalidadesInput[]
    upsert?: competicoesUpsertWithWhereUniqueWithoutModalidadesInput | competicoesUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: competicoesCreateManyModalidadesInputEnvelope
    set?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    disconnect?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    delete?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    connect?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    update?: competicoesUpdateWithWhereUniqueWithoutModalidadesInput | competicoesUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: competicoesUpdateManyWithWhereWithoutModalidadesInput | competicoesUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: competicoesScalarWhereInput | competicoesScalarWhereInput[]
  }

  export type contacto_modalidadeUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<contacto_modalidadeCreateWithoutModalidadesInput, contacto_modalidadeUncheckedCreateWithoutModalidadesInput> | contacto_modalidadeCreateWithoutModalidadesInput[] | contacto_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: contacto_modalidadeCreateOrConnectWithoutModalidadesInput | contacto_modalidadeCreateOrConnectWithoutModalidadesInput[]
    upsert?: contacto_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput | contacto_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: contacto_modalidadeCreateManyModalidadesInputEnvelope
    set?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    disconnect?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    delete?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    connect?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    update?: contacto_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput | contacto_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: contacto_modalidadeUpdateManyWithWhereWithoutModalidadesInput | contacto_modalidadeUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: contacto_modalidadeScalarWhereInput | contacto_modalidadeScalarWhereInput[]
  }

  export type detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<detalhes_modalidadeCreateWithoutModalidadesInput, detalhes_modalidadeUncheckedCreateWithoutModalidadesInput> | detalhes_modalidadeCreateWithoutModalidadesInput[] | detalhes_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: detalhes_modalidadeCreateOrConnectWithoutModalidadesInput | detalhes_modalidadeCreateOrConnectWithoutModalidadesInput[]
    upsert?: detalhes_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput | detalhes_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: detalhes_modalidadeCreateManyModalidadesInputEnvelope
    set?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    disconnect?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    delete?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    connect?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    update?: detalhes_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput | detalhes_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: detalhes_modalidadeUpdateManyWithWhereWithoutModalidadesInput | detalhes_modalidadeUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: detalhes_modalidadeScalarWhereInput | detalhes_modalidadeScalarWhereInput[]
  }

  export type equipamentoUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<equipamentoCreateWithoutModalidadesInput, equipamentoUncheckedCreateWithoutModalidadesInput> | equipamentoCreateWithoutModalidadesInput[] | equipamentoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutModalidadesInput | equipamentoCreateOrConnectWithoutModalidadesInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutModalidadesInput | equipamentoUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: equipamentoCreateManyModalidadesInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutModalidadesInput | equipamentoUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutModalidadesInput | equipamentoUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type horariosUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<horariosCreateWithoutModalidadesInput, horariosUncheckedCreateWithoutModalidadesInput> | horariosCreateWithoutModalidadesInput[] | horariosUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: horariosCreateOrConnectWithoutModalidadesInput | horariosCreateOrConnectWithoutModalidadesInput[]
    upsert?: horariosUpsertWithWhereUniqueWithoutModalidadesInput | horariosUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: horariosCreateManyModalidadesInputEnvelope
    set?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    disconnect?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    delete?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    connect?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    update?: horariosUpdateWithWhereUniqueWithoutModalidadesInput | horariosUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: horariosUpdateManyWithWhereWithoutModalidadesInput | horariosUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: horariosScalarWhereInput | horariosScalarWhereInput[]
  }

  export type niveisUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<niveisCreateWithoutModalidadesInput, niveisUncheckedCreateWithoutModalidadesInput> | niveisCreateWithoutModalidadesInput[] | niveisUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: niveisCreateOrConnectWithoutModalidadesInput | niveisCreateOrConnectWithoutModalidadesInput[]
    upsert?: niveisUpsertWithWhereUniqueWithoutModalidadesInput | niveisUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: niveisCreateManyModalidadesInputEnvelope
    set?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    disconnect?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    delete?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    connect?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    update?: niveisUpdateWithWhereUniqueWithoutModalidadesInput | niveisUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: niveisUpdateManyWithWhereWithoutModalidadesInput | niveisUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: niveisScalarWhereInput | niveisScalarWhereInput[]
  }

  export type precoUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<precoCreateWithoutModalidadesInput, precoUncheckedCreateWithoutModalidadesInput> | precoCreateWithoutModalidadesInput[] | precoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: precoCreateOrConnectWithoutModalidadesInput | precoCreateOrConnectWithoutModalidadesInput[]
    upsert?: precoUpsertWithWhereUniqueWithoutModalidadesInput | precoUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: precoCreateManyModalidadesInputEnvelope
    set?: precoWhereUniqueInput | precoWhereUniqueInput[]
    disconnect?: precoWhereUniqueInput | precoWhereUniqueInput[]
    delete?: precoWhereUniqueInput | precoWhereUniqueInput[]
    connect?: precoWhereUniqueInput | precoWhereUniqueInput[]
    update?: precoUpdateWithWhereUniqueWithoutModalidadesInput | precoUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: precoUpdateManyWithWhereWithoutModalidadesInput | precoUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: precoScalarWhereInput | precoScalarWhereInput[]
  }

  export type competicoesUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<competicoesCreateWithoutModalidadesInput, competicoesUncheckedCreateWithoutModalidadesInput> | competicoesCreateWithoutModalidadesInput[] | competicoesUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: competicoesCreateOrConnectWithoutModalidadesInput | competicoesCreateOrConnectWithoutModalidadesInput[]
    upsert?: competicoesUpsertWithWhereUniqueWithoutModalidadesInput | competicoesUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: competicoesCreateManyModalidadesInputEnvelope
    set?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    disconnect?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    delete?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    connect?: competicoesWhereUniqueInput | competicoesWhereUniqueInput[]
    update?: competicoesUpdateWithWhereUniqueWithoutModalidadesInput | competicoesUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: competicoesUpdateManyWithWhereWithoutModalidadesInput | competicoesUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: competicoesScalarWhereInput | competicoesScalarWhereInput[]
  }

  export type contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<contacto_modalidadeCreateWithoutModalidadesInput, contacto_modalidadeUncheckedCreateWithoutModalidadesInput> | contacto_modalidadeCreateWithoutModalidadesInput[] | contacto_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: contacto_modalidadeCreateOrConnectWithoutModalidadesInput | contacto_modalidadeCreateOrConnectWithoutModalidadesInput[]
    upsert?: contacto_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput | contacto_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: contacto_modalidadeCreateManyModalidadesInputEnvelope
    set?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    disconnect?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    delete?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    connect?: contacto_modalidadeWhereUniqueInput | contacto_modalidadeWhereUniqueInput[]
    update?: contacto_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput | contacto_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: contacto_modalidadeUpdateManyWithWhereWithoutModalidadesInput | contacto_modalidadeUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: contacto_modalidadeScalarWhereInput | contacto_modalidadeScalarWhereInput[]
  }

  export type detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<detalhes_modalidadeCreateWithoutModalidadesInput, detalhes_modalidadeUncheckedCreateWithoutModalidadesInput> | detalhes_modalidadeCreateWithoutModalidadesInput[] | detalhes_modalidadeUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: detalhes_modalidadeCreateOrConnectWithoutModalidadesInput | detalhes_modalidadeCreateOrConnectWithoutModalidadesInput[]
    upsert?: detalhes_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput | detalhes_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: detalhes_modalidadeCreateManyModalidadesInputEnvelope
    set?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    disconnect?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    delete?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    connect?: detalhes_modalidadeWhereUniqueInput | detalhes_modalidadeWhereUniqueInput[]
    update?: detalhes_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput | detalhes_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: detalhes_modalidadeUpdateManyWithWhereWithoutModalidadesInput | detalhes_modalidadeUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: detalhes_modalidadeScalarWhereInput | detalhes_modalidadeScalarWhereInput[]
  }

  export type equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<equipamentoCreateWithoutModalidadesInput, equipamentoUncheckedCreateWithoutModalidadesInput> | equipamentoCreateWithoutModalidadesInput[] | equipamentoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: equipamentoCreateOrConnectWithoutModalidadesInput | equipamentoCreateOrConnectWithoutModalidadesInput[]
    upsert?: equipamentoUpsertWithWhereUniqueWithoutModalidadesInput | equipamentoUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: equipamentoCreateManyModalidadesInputEnvelope
    set?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    disconnect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    delete?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    connect?: equipamentoWhereUniqueInput | equipamentoWhereUniqueInput[]
    update?: equipamentoUpdateWithWhereUniqueWithoutModalidadesInput | equipamentoUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: equipamentoUpdateManyWithWhereWithoutModalidadesInput | equipamentoUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
  }

  export type horariosUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<horariosCreateWithoutModalidadesInput, horariosUncheckedCreateWithoutModalidadesInput> | horariosCreateWithoutModalidadesInput[] | horariosUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: horariosCreateOrConnectWithoutModalidadesInput | horariosCreateOrConnectWithoutModalidadesInput[]
    upsert?: horariosUpsertWithWhereUniqueWithoutModalidadesInput | horariosUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: horariosCreateManyModalidadesInputEnvelope
    set?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    disconnect?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    delete?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    connect?: horariosWhereUniqueInput | horariosWhereUniqueInput[]
    update?: horariosUpdateWithWhereUniqueWithoutModalidadesInput | horariosUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: horariosUpdateManyWithWhereWithoutModalidadesInput | horariosUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: horariosScalarWhereInput | horariosScalarWhereInput[]
  }

  export type niveisUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<niveisCreateWithoutModalidadesInput, niveisUncheckedCreateWithoutModalidadesInput> | niveisCreateWithoutModalidadesInput[] | niveisUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: niveisCreateOrConnectWithoutModalidadesInput | niveisCreateOrConnectWithoutModalidadesInput[]
    upsert?: niveisUpsertWithWhereUniqueWithoutModalidadesInput | niveisUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: niveisCreateManyModalidadesInputEnvelope
    set?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    disconnect?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    delete?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    connect?: niveisWhereUniqueInput | niveisWhereUniqueInput[]
    update?: niveisUpdateWithWhereUniqueWithoutModalidadesInput | niveisUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: niveisUpdateManyWithWhereWithoutModalidadesInput | niveisUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: niveisScalarWhereInput | niveisScalarWhereInput[]
  }

  export type precoUncheckedUpdateManyWithoutModalidadesNestedInput = {
    create?: XOR<precoCreateWithoutModalidadesInput, precoUncheckedCreateWithoutModalidadesInput> | precoCreateWithoutModalidadesInput[] | precoUncheckedCreateWithoutModalidadesInput[]
    connectOrCreate?: precoCreateOrConnectWithoutModalidadesInput | precoCreateOrConnectWithoutModalidadesInput[]
    upsert?: precoUpsertWithWhereUniqueWithoutModalidadesInput | precoUpsertWithWhereUniqueWithoutModalidadesInput[]
    createMany?: precoCreateManyModalidadesInputEnvelope
    set?: precoWhereUniqueInput | precoWhereUniqueInput[]
    disconnect?: precoWhereUniqueInput | precoWhereUniqueInput[]
    delete?: precoWhereUniqueInput | precoWhereUniqueInput[]
    connect?: precoWhereUniqueInput | precoWhereUniqueInput[]
    update?: precoUpdateWithWhereUniqueWithoutModalidadesInput | precoUpdateWithWhereUniqueWithoutModalidadesInput[]
    updateMany?: precoUpdateManyWithWhereWithoutModalidadesInput | precoUpdateManyWithWhereWithoutModalidadesInput[]
    deleteMany?: precoScalarWhereInput | precoScalarWhereInput[]
  }

  export type modalidadesCreateNestedOneWithoutNiveisInput = {
    create?: XOR<modalidadesCreateWithoutNiveisInput, modalidadesUncheckedCreateWithoutNiveisInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutNiveisInput
    connect?: modalidadesWhereUniqueInput
  }

  export type modalidadesUpdateOneWithoutNiveisNestedInput = {
    create?: XOR<modalidadesCreateWithoutNiveisInput, modalidadesUncheckedCreateWithoutNiveisInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutNiveisInput
    upsert?: modalidadesUpsertWithoutNiveisInput
    disconnect?: modalidadesWhereInput | boolean
    delete?: modalidadesWhereInput | boolean
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutNiveisInput, modalidadesUpdateWithoutNiveisInput>, modalidadesUncheckedUpdateWithoutNiveisInput>
  }

  export type modalidadesCreateNestedOneWithoutPrecoInput = {
    create?: XOR<modalidadesCreateWithoutPrecoInput, modalidadesUncheckedCreateWithoutPrecoInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutPrecoInput
    connect?: modalidadesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type modalidadesUpdateOneRequiredWithoutPrecoNestedInput = {
    create?: XOR<modalidadesCreateWithoutPrecoInput, modalidadesUncheckedCreateWithoutPrecoInput>
    connectOrCreate?: modalidadesCreateOrConnectWithoutPrecoInput
    upsert?: modalidadesUpsertWithoutPrecoInput
    connect?: modalidadesWhereUniqueInput
    update?: XOR<XOR<modalidadesUpdateToOneWithWhereWithoutPrecoInput, modalidadesUpdateWithoutPrecoInput>, modalidadesUncheckedUpdateWithoutPrecoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type modalidadesCreateWithoutCompeticoesInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutCompeticoesInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutCompeticoesInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutCompeticoesInput, modalidadesUncheckedCreateWithoutCompeticoesInput>
  }

  export type modalidadesUpsertWithoutCompeticoesInput = {
    update: XOR<modalidadesUpdateWithoutCompeticoesInput, modalidadesUncheckedUpdateWithoutCompeticoesInput>
    create: XOR<modalidadesCreateWithoutCompeticoesInput, modalidadesUncheckedCreateWithoutCompeticoesInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutCompeticoesInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutCompeticoesInput, modalidadesUncheckedUpdateWithoutCompeticoesInput>
  }

  export type modalidadesUpdateWithoutCompeticoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutCompeticoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesCreateWithoutContacto_modalidadeInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutContacto_modalidadeInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutContacto_modalidadeInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutContacto_modalidadeInput, modalidadesUncheckedCreateWithoutContacto_modalidadeInput>
  }

  export type modalidadesUpsertWithoutContacto_modalidadeInput = {
    update: XOR<modalidadesUpdateWithoutContacto_modalidadeInput, modalidadesUncheckedUpdateWithoutContacto_modalidadeInput>
    create: XOR<modalidadesCreateWithoutContacto_modalidadeInput, modalidadesUncheckedCreateWithoutContacto_modalidadeInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutContacto_modalidadeInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutContacto_modalidadeInput, modalidadesUncheckedUpdateWithoutContacto_modalidadeInput>
  }

  export type modalidadesUpdateWithoutContacto_modalidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutContacto_modalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesCreateWithoutDetalhes_modalidadeInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutDetalhes_modalidadeInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutDetalhes_modalidadeInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutDetalhes_modalidadeInput, modalidadesUncheckedCreateWithoutDetalhes_modalidadeInput>
  }

  export type modalidadesUpsertWithoutDetalhes_modalidadeInput = {
    update: XOR<modalidadesUpdateWithoutDetalhes_modalidadeInput, modalidadesUncheckedUpdateWithoutDetalhes_modalidadeInput>
    create: XOR<modalidadesCreateWithoutDetalhes_modalidadeInput, modalidadesUncheckedCreateWithoutDetalhes_modalidadeInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutDetalhes_modalidadeInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutDetalhes_modalidadeInput, modalidadesUncheckedUpdateWithoutDetalhes_modalidadeInput>
  }

  export type modalidadesUpdateWithoutDetalhes_modalidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutDetalhes_modalidadeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesCreateWithoutEquipamentoInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutEquipamentoInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutEquipamentoInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutEquipamentoInput, modalidadesUncheckedCreateWithoutEquipamentoInput>
  }

  export type modalidadesUpsertWithoutEquipamentoInput = {
    update: XOR<modalidadesUpdateWithoutEquipamentoInput, modalidadesUncheckedUpdateWithoutEquipamentoInput>
    create: XOR<modalidadesCreateWithoutEquipamentoInput, modalidadesUncheckedCreateWithoutEquipamentoInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutEquipamentoInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutEquipamentoInput, modalidadesUncheckedUpdateWithoutEquipamentoInput>
  }

  export type modalidadesUpdateWithoutEquipamentoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutEquipamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesCreateWithoutHorariosInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutHorariosInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutHorariosInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutHorariosInput, modalidadesUncheckedCreateWithoutHorariosInput>
  }

  export type modalidadesUpsertWithoutHorariosInput = {
    update: XOR<modalidadesUpdateWithoutHorariosInput, modalidadesUncheckedUpdateWithoutHorariosInput>
    create: XOR<modalidadesCreateWithoutHorariosInput, modalidadesUncheckedCreateWithoutHorariosInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutHorariosInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutHorariosInput, modalidadesUncheckedUpdateWithoutHorariosInput>
  }

  export type modalidadesUpdateWithoutHorariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutHorariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type competicoesCreateWithoutModalidadesInput = {
    nome?: string | null
  }

  export type competicoesUncheckedCreateWithoutModalidadesInput = {
    id?: number
    nome?: string | null
  }

  export type competicoesCreateOrConnectWithoutModalidadesInput = {
    where: competicoesWhereUniqueInput
    create: XOR<competicoesCreateWithoutModalidadesInput, competicoesUncheckedCreateWithoutModalidadesInput>
  }

  export type competicoesCreateManyModalidadesInputEnvelope = {
    data: competicoesCreateManyModalidadesInput | competicoesCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type contacto_modalidadeCreateWithoutModalidadesInput = {
    responsavel?: string | null
    telefone?: string | null
    email?: string | null
  }

  export type contacto_modalidadeUncheckedCreateWithoutModalidadesInput = {
    id?: number
    responsavel?: string | null
    telefone?: string | null
    email?: string | null
  }

  export type contacto_modalidadeCreateOrConnectWithoutModalidadesInput = {
    where: contacto_modalidadeWhereUniqueInput
    create: XOR<contacto_modalidadeCreateWithoutModalidadesInput, contacto_modalidadeUncheckedCreateWithoutModalidadesInput>
  }

  export type contacto_modalidadeCreateManyModalidadesInputEnvelope = {
    data: contacto_modalidadeCreateManyModalidadesInput | contacto_modalidadeCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type detalhes_modalidadeCreateWithoutModalidadesInput = {
    introducao?: string | null
    metodologia?: string | null
    avaliacao?: string | null
    progressao?: string | null
  }

  export type detalhes_modalidadeUncheckedCreateWithoutModalidadesInput = {
    id?: number
    introducao?: string | null
    metodologia?: string | null
    avaliacao?: string | null
    progressao?: string | null
  }

  export type detalhes_modalidadeCreateOrConnectWithoutModalidadesInput = {
    where: detalhes_modalidadeWhereUniqueInput
    create: XOR<detalhes_modalidadeCreateWithoutModalidadesInput, detalhes_modalidadeUncheckedCreateWithoutModalidadesInput>
  }

  export type detalhes_modalidadeCreateManyModalidadesInputEnvelope = {
    data: detalhes_modalidadeCreateManyModalidadesInput | detalhes_modalidadeCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type equipamentoCreateWithoutModalidadesInput = {
    nome?: string | null
  }

  export type equipamentoUncheckedCreateWithoutModalidadesInput = {
    id?: number
    nome?: string | null
  }

  export type equipamentoCreateOrConnectWithoutModalidadesInput = {
    where: equipamentoWhereUniqueInput
    create: XOR<equipamentoCreateWithoutModalidadesInput, equipamentoUncheckedCreateWithoutModalidadesInput>
  }

  export type equipamentoCreateManyModalidadesInputEnvelope = {
    data: equipamentoCreateManyModalidadesInput | equipamentoCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type horariosCreateWithoutModalidadesInput = {
    dia?: string | null
    inicio?: Date | string | null
    fim?: Date | string | null
    nivel?: string | null
    grupo?: string | null
  }

  export type horariosUncheckedCreateWithoutModalidadesInput = {
    id?: number
    dia?: string | null
    inicio?: Date | string | null
    fim?: Date | string | null
    nivel?: string | null
    grupo?: string | null
  }

  export type horariosCreateOrConnectWithoutModalidadesInput = {
    where: horariosWhereUniqueInput
    create: XOR<horariosCreateWithoutModalidadesInput, horariosUncheckedCreateWithoutModalidadesInput>
  }

  export type horariosCreateManyModalidadesInputEnvelope = {
    data: horariosCreateManyModalidadesInput | horariosCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type niveisCreateWithoutModalidadesInput = {
    descricao?: string | null
  }

  export type niveisUncheckedCreateWithoutModalidadesInput = {
    id?: number
    descricao?: string | null
  }

  export type niveisCreateOrConnectWithoutModalidadesInput = {
    where: niveisWhereUniqueInput
    create: XOR<niveisCreateWithoutModalidadesInput, niveisUncheckedCreateWithoutModalidadesInput>
  }

  export type niveisCreateManyModalidadesInputEnvelope = {
    data: niveisCreateManyModalidadesInput | niveisCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type precoCreateWithoutModalidadesInput = {
    mensalidade: Decimal | DecimalJsLike | number | string
    inscricao: Decimal | DecimalJsLike | number | string
    equipamento?: Decimal | DecimalJsLike | number | string | null
  }

  export type precoUncheckedCreateWithoutModalidadesInput = {
    id?: number
    mensalidade: Decimal | DecimalJsLike | number | string
    inscricao: Decimal | DecimalJsLike | number | string
    equipamento?: Decimal | DecimalJsLike | number | string | null
  }

  export type precoCreateOrConnectWithoutModalidadesInput = {
    where: precoWhereUniqueInput
    create: XOR<precoCreateWithoutModalidadesInput, precoUncheckedCreateWithoutModalidadesInput>
  }

  export type precoCreateManyModalidadesInputEnvelope = {
    data: precoCreateManyModalidadesInput | precoCreateManyModalidadesInput[]
    skipDuplicates?: boolean
  }

  export type competicoesUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: competicoesWhereUniqueInput
    update: XOR<competicoesUpdateWithoutModalidadesInput, competicoesUncheckedUpdateWithoutModalidadesInput>
    create: XOR<competicoesCreateWithoutModalidadesInput, competicoesUncheckedCreateWithoutModalidadesInput>
  }

  export type competicoesUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: competicoesWhereUniqueInput
    data: XOR<competicoesUpdateWithoutModalidadesInput, competicoesUncheckedUpdateWithoutModalidadesInput>
  }

  export type competicoesUpdateManyWithWhereWithoutModalidadesInput = {
    where: competicoesScalarWhereInput
    data: XOR<competicoesUpdateManyMutationInput, competicoesUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type competicoesScalarWhereInput = {
    AND?: competicoesScalarWhereInput | competicoesScalarWhereInput[]
    OR?: competicoesScalarWhereInput[]
    NOT?: competicoesScalarWhereInput | competicoesScalarWhereInput[]
    id?: IntFilter<"competicoes"> | number
    modalidade_id?: IntNullableFilter<"competicoes"> | number | null
    nome?: StringNullableFilter<"competicoes"> | string | null
  }

  export type contacto_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: contacto_modalidadeWhereUniqueInput
    update: XOR<contacto_modalidadeUpdateWithoutModalidadesInput, contacto_modalidadeUncheckedUpdateWithoutModalidadesInput>
    create: XOR<contacto_modalidadeCreateWithoutModalidadesInput, contacto_modalidadeUncheckedCreateWithoutModalidadesInput>
  }

  export type contacto_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: contacto_modalidadeWhereUniqueInput
    data: XOR<contacto_modalidadeUpdateWithoutModalidadesInput, contacto_modalidadeUncheckedUpdateWithoutModalidadesInput>
  }

  export type contacto_modalidadeUpdateManyWithWhereWithoutModalidadesInput = {
    where: contacto_modalidadeScalarWhereInput
    data: XOR<contacto_modalidadeUpdateManyMutationInput, contacto_modalidadeUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type contacto_modalidadeScalarWhereInput = {
    AND?: contacto_modalidadeScalarWhereInput | contacto_modalidadeScalarWhereInput[]
    OR?: contacto_modalidadeScalarWhereInput[]
    NOT?: contacto_modalidadeScalarWhereInput | contacto_modalidadeScalarWhereInput[]
    id?: IntFilter<"contacto_modalidade"> | number
    modalidade_id?: IntNullableFilter<"contacto_modalidade"> | number | null
    responsavel?: StringNullableFilter<"contacto_modalidade"> | string | null
    telefone?: StringNullableFilter<"contacto_modalidade"> | string | null
    email?: StringNullableFilter<"contacto_modalidade"> | string | null
  }

  export type detalhes_modalidadeUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: detalhes_modalidadeWhereUniqueInput
    update: XOR<detalhes_modalidadeUpdateWithoutModalidadesInput, detalhes_modalidadeUncheckedUpdateWithoutModalidadesInput>
    create: XOR<detalhes_modalidadeCreateWithoutModalidadesInput, detalhes_modalidadeUncheckedCreateWithoutModalidadesInput>
  }

  export type detalhes_modalidadeUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: detalhes_modalidadeWhereUniqueInput
    data: XOR<detalhes_modalidadeUpdateWithoutModalidadesInput, detalhes_modalidadeUncheckedUpdateWithoutModalidadesInput>
  }

  export type detalhes_modalidadeUpdateManyWithWhereWithoutModalidadesInput = {
    where: detalhes_modalidadeScalarWhereInput
    data: XOR<detalhes_modalidadeUpdateManyMutationInput, detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type detalhes_modalidadeScalarWhereInput = {
    AND?: detalhes_modalidadeScalarWhereInput | detalhes_modalidadeScalarWhereInput[]
    OR?: detalhes_modalidadeScalarWhereInput[]
    NOT?: detalhes_modalidadeScalarWhereInput | detalhes_modalidadeScalarWhereInput[]
    id?: IntFilter<"detalhes_modalidade"> | number
    modalidade_id?: IntNullableFilter<"detalhes_modalidade"> | number | null
    introducao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    metodologia?: StringNullableFilter<"detalhes_modalidade"> | string | null
    avaliacao?: StringNullableFilter<"detalhes_modalidade"> | string | null
    progressao?: StringNullableFilter<"detalhes_modalidade"> | string | null
  }

  export type equipamentoUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: equipamentoWhereUniqueInput
    update: XOR<equipamentoUpdateWithoutModalidadesInput, equipamentoUncheckedUpdateWithoutModalidadesInput>
    create: XOR<equipamentoCreateWithoutModalidadesInput, equipamentoUncheckedCreateWithoutModalidadesInput>
  }

  export type equipamentoUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: equipamentoWhereUniqueInput
    data: XOR<equipamentoUpdateWithoutModalidadesInput, equipamentoUncheckedUpdateWithoutModalidadesInput>
  }

  export type equipamentoUpdateManyWithWhereWithoutModalidadesInput = {
    where: equipamentoScalarWhereInput
    data: XOR<equipamentoUpdateManyMutationInput, equipamentoUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type equipamentoScalarWhereInput = {
    AND?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
    OR?: equipamentoScalarWhereInput[]
    NOT?: equipamentoScalarWhereInput | equipamentoScalarWhereInput[]
    id?: IntFilter<"equipamento"> | number
    modalidade_id?: IntNullableFilter<"equipamento"> | number | null
    nome?: StringNullableFilter<"equipamento"> | string | null
  }

  export type horariosUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: horariosWhereUniqueInput
    update: XOR<horariosUpdateWithoutModalidadesInput, horariosUncheckedUpdateWithoutModalidadesInput>
    create: XOR<horariosCreateWithoutModalidadesInput, horariosUncheckedCreateWithoutModalidadesInput>
  }

  export type horariosUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: horariosWhereUniqueInput
    data: XOR<horariosUpdateWithoutModalidadesInput, horariosUncheckedUpdateWithoutModalidadesInput>
  }

  export type horariosUpdateManyWithWhereWithoutModalidadesInput = {
    where: horariosScalarWhereInput
    data: XOR<horariosUpdateManyMutationInput, horariosUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type horariosScalarWhereInput = {
    AND?: horariosScalarWhereInput | horariosScalarWhereInput[]
    OR?: horariosScalarWhereInput[]
    NOT?: horariosScalarWhereInput | horariosScalarWhereInput[]
    id?: IntFilter<"horarios"> | number
    modalidade_id?: IntNullableFilter<"horarios"> | number | null
    dia?: StringNullableFilter<"horarios"> | string | null
    inicio?: DateTimeNullableFilter<"horarios"> | Date | string | null
    fim?: DateTimeNullableFilter<"horarios"> | Date | string | null
    nivel?: StringNullableFilter<"horarios"> | string | null
    grupo?: StringNullableFilter<"horarios"> | string | null
  }

  export type niveisUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: niveisWhereUniqueInput
    update: XOR<niveisUpdateWithoutModalidadesInput, niveisUncheckedUpdateWithoutModalidadesInput>
    create: XOR<niveisCreateWithoutModalidadesInput, niveisUncheckedCreateWithoutModalidadesInput>
  }

  export type niveisUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: niveisWhereUniqueInput
    data: XOR<niveisUpdateWithoutModalidadesInput, niveisUncheckedUpdateWithoutModalidadesInput>
  }

  export type niveisUpdateManyWithWhereWithoutModalidadesInput = {
    where: niveisScalarWhereInput
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type niveisScalarWhereInput = {
    AND?: niveisScalarWhereInput | niveisScalarWhereInput[]
    OR?: niveisScalarWhereInput[]
    NOT?: niveisScalarWhereInput | niveisScalarWhereInput[]
    id?: IntFilter<"niveis"> | number
    modalidade_id?: IntNullableFilter<"niveis"> | number | null
    descricao?: StringNullableFilter<"niveis"> | string | null
  }

  export type precoUpsertWithWhereUniqueWithoutModalidadesInput = {
    where: precoWhereUniqueInput
    update: XOR<precoUpdateWithoutModalidadesInput, precoUncheckedUpdateWithoutModalidadesInput>
    create: XOR<precoCreateWithoutModalidadesInput, precoUncheckedCreateWithoutModalidadesInput>
  }

  export type precoUpdateWithWhereUniqueWithoutModalidadesInput = {
    where: precoWhereUniqueInput
    data: XOR<precoUpdateWithoutModalidadesInput, precoUncheckedUpdateWithoutModalidadesInput>
  }

  export type precoUpdateManyWithWhereWithoutModalidadesInput = {
    where: precoScalarWhereInput
    data: XOR<precoUpdateManyMutationInput, precoUncheckedUpdateManyWithoutModalidadesInput>
  }

  export type precoScalarWhereInput = {
    AND?: precoScalarWhereInput | precoScalarWhereInput[]
    OR?: precoScalarWhereInput[]
    NOT?: precoScalarWhereInput | precoScalarWhereInput[]
    id?: IntFilter<"preco"> | number
    modalidade_id?: IntFilter<"preco"> | number
    mensalidade?: DecimalFilter<"preco"> | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFilter<"preco"> | Decimal | DecimalJsLike | number | string
    equipamento?: DecimalNullableFilter<"preco"> | Decimal | DecimalJsLike | number | string | null
  }

  export type modalidadesCreateWithoutNiveisInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    preco?: precoCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutNiveisInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    preco?: precoUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutNiveisInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutNiveisInput, modalidadesUncheckedCreateWithoutNiveisInput>
  }

  export type modalidadesUpsertWithoutNiveisInput = {
    update: XOR<modalidadesUpdateWithoutNiveisInput, modalidadesUncheckedUpdateWithoutNiveisInput>
    create: XOR<modalidadesCreateWithoutNiveisInput, modalidadesUncheckedCreateWithoutNiveisInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutNiveisInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutNiveisInput, modalidadesUncheckedUpdateWithoutNiveisInput>
  }

  export type modalidadesUpdateWithoutNiveisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    preco?: precoUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutNiveisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    preco?: precoUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesCreateWithoutPrecoInput = {
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoCreateNestedManyWithoutModalidadesInput
    horarios?: horariosCreateNestedManyWithoutModalidadesInput
    niveis?: niveisCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesUncheckedCreateWithoutPrecoInput = {
    id?: number
    nome: string
    slug: string
    icone?: string | null
    descricao?: string | null
    ativo?: boolean
    categoria?: string | null
    idade_minima: number
    idade_maxima?: number | null
    competicoes?: competicoesUncheckedCreateNestedManyWithoutModalidadesInput
    contacto_modalidade?: contacto_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedCreateNestedManyWithoutModalidadesInput
    equipamento?: equipamentoUncheckedCreateNestedManyWithoutModalidadesInput
    horarios?: horariosUncheckedCreateNestedManyWithoutModalidadesInput
    niveis?: niveisUncheckedCreateNestedManyWithoutModalidadesInput
  }

  export type modalidadesCreateOrConnectWithoutPrecoInput = {
    where: modalidadesWhereUniqueInput
    create: XOR<modalidadesCreateWithoutPrecoInput, modalidadesUncheckedCreateWithoutPrecoInput>
  }

  export type modalidadesUpsertWithoutPrecoInput = {
    update: XOR<modalidadesUpdateWithoutPrecoInput, modalidadesUncheckedUpdateWithoutPrecoInput>
    create: XOR<modalidadesCreateWithoutPrecoInput, modalidadesUncheckedCreateWithoutPrecoInput>
    where?: modalidadesWhereInput
  }

  export type modalidadesUpdateToOneWithWhereWithoutPrecoInput = {
    where?: modalidadesWhereInput
    data: XOR<modalidadesUpdateWithoutPrecoInput, modalidadesUncheckedUpdateWithoutPrecoInput>
  }

  export type modalidadesUpdateWithoutPrecoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUpdateManyWithoutModalidadesNestedInput
  }

  export type modalidadesUncheckedUpdateWithoutPrecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    idade_minima?: IntFieldUpdateOperationsInput | number
    idade_maxima?: NullableIntFieldUpdateOperationsInput | number | null
    competicoes?: competicoesUncheckedUpdateManyWithoutModalidadesNestedInput
    contacto_modalidade?: contacto_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    detalhes_modalidade?: detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesNestedInput
    equipamento?: equipamentoUncheckedUpdateManyWithoutModalidadesNestedInput
    horarios?: horariosUncheckedUpdateManyWithoutModalidadesNestedInput
    niveis?: niveisUncheckedUpdateManyWithoutModalidadesNestedInput
  }

  export type competicoesCreateManyModalidadesInput = {
    id?: number
    nome?: string | null
  }

  export type contacto_modalidadeCreateManyModalidadesInput = {
    id?: number
    responsavel?: string | null
    telefone?: string | null
    email?: string | null
  }

  export type detalhes_modalidadeCreateManyModalidadesInput = {
    id?: number
    introducao?: string | null
    metodologia?: string | null
    avaliacao?: string | null
    progressao?: string | null
  }

  export type equipamentoCreateManyModalidadesInput = {
    id?: number
    nome?: string | null
  }

  export type horariosCreateManyModalidadesInput = {
    id?: number
    dia?: string | null
    inicio?: Date | string | null
    fim?: Date | string | null
    nivel?: string | null
    grupo?: string | null
  }

  export type niveisCreateManyModalidadesInput = {
    id?: number
    descricao?: string | null
  }

  export type precoCreateManyModalidadesInput = {
    id?: number
    mensalidade: Decimal | DecimalJsLike | number | string
    inscricao: Decimal | DecimalJsLike | number | string
    equipamento?: Decimal | DecimalJsLike | number | string | null
  }

  export type competicoesUpdateWithoutModalidadesInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type competicoesUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type competicoesUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contacto_modalidadeUpdateWithoutModalidadesInput = {
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contacto_modalidadeUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contacto_modalidadeUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    responsavel?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalhes_modalidadeUpdateWithoutModalidadesInput = {
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalhes_modalidadeUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detalhes_modalidadeUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    introducao?: NullableStringFieldUpdateOperationsInput | string | null
    metodologia?: NullableStringFieldUpdateOperationsInput | string | null
    avaliacao?: NullableStringFieldUpdateOperationsInput | string | null
    progressao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoUpdateWithoutModalidadesInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type equipamentoUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horariosUpdateWithoutModalidadesInput = {
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horariosUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type horariosUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dia?: NullableStringFieldUpdateOperationsInput | string | null
    inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    grupo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type niveisUpdateWithoutModalidadesInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type niveisUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type niveisUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type precoUpdateWithoutModalidadesInput = {
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type precoUncheckedUpdateWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type precoUncheckedUpdateManyWithoutModalidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensalidade?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    inscricao?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    equipamento?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}