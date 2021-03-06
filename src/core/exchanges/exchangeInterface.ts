import {EventEmitter} from "events";
import CandleCollection, {ICandle, ICandleInterval} from "../candleCollection";
import Orderbook from "../orderbook";
import {IOrder} from "../orderInterface";
import {IOrderbookData, ITradeablePair} from "./baseExchange";

export interface IExchange extends EventEmitter {

    [key: string]: any;

    isAuthenticated: boolean;
    isCurrenciesLoaded: boolean;

    adjustOrder(order: IOrder, price: number, qty: number): void;

    buy(symbol: string, price: number, qty: number): void;

    cancelOrder(order: IOrder): void;

    connect(connectionString?: string): void;

    destroy(): void;

    getOpenOrders(): IOrder[];

    getOrderbook(pair: string): Orderbook;

    login(publicKey: string, privateKey: string): void;

    onCreate(): void;

    onCurrenciesLoaded(currencies: ITradeablePair[]): void;

    onReport(data: IOrder): void;

    onUpdateCandles<K extends keyof CandleCollection>(pair: string, data: ICandle[], interval: ICandleInterval, method: Extract<K, "set" | "update">): void;

    onUpdateOrderbook<K extends keyof Orderbook>(data: IOrderbookData, method: Extract<K, "setOrders" | "addIncrement">): void;

    sell(symbol: string, price: number, qty: number): void;

    subscribeCandles(pair: string, interval: ICandleInterval): void;

    subscribeOrderbook(pair: string): void;

    subscribeReports(): void;
}
