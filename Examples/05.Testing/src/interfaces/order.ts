import { IOrderItem } from './orderItem'

export interface IOrder {
    orderItems: Array<IOrderItem>;
    addOrderItem(OrderItem: IOrderItem):void;
    total():number;
}