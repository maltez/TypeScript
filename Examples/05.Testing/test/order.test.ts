import { Order } from '../src/order';
import { IOrder } from '../src/interfaces/order';
import { IOrderItem } from '../src/interfaces/orderItem';
import { expect } from 'chai';

test('Create order. Add one order item. Expect: Order item added', () => {
    // Arrange
    const order: IOrder = new Order();
    const orderItem: IOrderItem = {
        name: 'Battery',
        value: 100
    }

    // Act
    order.addOrderItem(orderItem);

    // Assert
    expect(order.orderItems.length).equal(1);
});

test('Create order. Add two orders items with value 50 and 50. Expect: Total equals 100', () => {
    // Arrange
    const order: IOrder = new Order();
    const orderItem1: IOrderItem = {
        name: 'Battery',
        value: 50
    };
    for(let i = 0; i < 2; i++) {
        order.addOrderItem(orderItem1);
    }
    // Act 
    const total:number = order.total();
    // Assert
    expect(total).equal(100);
});

test('Create order item with negative value. Create order. Add order item. Expected: Order did not add.', () => {
    // Arrange
    const order: IOrder = new Order();
    const orderItem1: IOrderItem = {
        name: 'Battery',
        value: -50
    };

    order.addOrderItem(orderItem1);

    expect(order.orderItems.length).equal(0);
})