/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All Rights Reserved.
 * See 'LICENSE' in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


export type Resolve<T> = (value: T | PromiseLike<T>) => void;


export type Reject = (reason?: any) => void;


export type ConstructorReturn<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : never;

export type Primitive = string | number | boolean;

export type Constructor = new (...args: any[]) => any;
export type AribtraryObject = Record<string, any>;
export type Initializer<T> = T | (() => Promise<T>) | (() => T) | (new () => T);

export type Instance<T> = Awaited<T>;
export interface AsyncConstructor<TClass extends new (...args: ConstructorParameters<TClass>) => ConstructorReturn<TClass>> {
    new(...args: ConstructorParameters<TClass>): Promise<ConstructorReturn<TClass>>;
    class: TClass;
}
