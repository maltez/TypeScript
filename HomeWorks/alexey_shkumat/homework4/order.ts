/*
Extends order class. Add discount field.
	Total = Sum all values - Sum all values discount /100.
Discount can not more than 100 and less than 0
*/

interface   IOrderItem {
    discount    :   number;
    name        :   string;
    value       :   number;
}

interface   IOrder {
    orderItems  :   Array<IOrderItem>;
    addOrderItem(OrderItem: IOrderItem) :   void;
    total()     :   number;
}

class   Order   implements IOrder {
    orderItems: Array<IOrderItem> = [];

    addOrderItem(orderItem: IOrderItem): void {
        if ( (orderItem.value > 0) && ( orderItem.discount > 0 )  && ( orderItem.discount < 100 )  ){
            this.orderItems.push(orderItem);
        }
        return;
    }

    total(): number {
        return this.orderItems.reduce((acc: number, item: IOrderItem):number => {
            return acc += ( item.value * ( 100 - item.discount ) / 100 );
        }, 0);
    }
}