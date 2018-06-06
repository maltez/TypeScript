import { IOrder } from './interfaces/order';
import { IOrderItem } from './interfaces/orderItem';

export class Order implements IOrder {
    orderItems: Array<IOrderItem> = [];

    addOrderItem(orderItem: IOrderItem): void {
        if(orderItem.value > 0){
            this.orderItems.push(orderItem);
        }

        return;
    } 

    total(): number {
        return this.orderItems.reduce((acc: number, item: IOrderItem):number => {
            return acc += item.value;
        }, 0);
    }
}