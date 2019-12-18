document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');
    const blockCustomer = document.querySelector('#block-customer');
    const blockFreelancer = document.querySelector('#block-freelancer');
    const blockChoice = document.querySelector('#block-choice');
    const btnExit = document.querySelector('#btn-exit');
    const formCustomer = document.getElementById('form-customer');
    const ordersTable = document.getElementById('orders');
    const modalOrder = document.getElementById('order_read');
    const modalOrderActive = document.getElementById('order_active');
    const closeBtn = document.querySelector('.close');

    const orders = [];

    //functions

    const renderOrders = () => {

        ordersTable.textContent = '';

        orders.forEach((order, i) => {

            ordersTable.innerHTML += `
            <tr class="order" data-number-order="${i}">
                <td>${i+1}</td>
                <td>${order.title}</td>
                <td class="${order.currency}"></td>
                <td>${order.deadline}</td>
            </tr>`;

        });
    };

    const openModal = (numberOrder) => {
        const order = orders[numberOrder];
        const modal = order.active ? modalOrderActive : modalOrder;


        const firstName = document.querySelector('.firstName'),
            titleBlock = document.querySelector('.modal-title'),
            emailBlock = document.querySelector('.email'),
            descriptionBlock = document.querySelector('.description'),
            deadlineBlock = document.querySelector('.deadline'),
            currencyBlock = document.querySelector('.currency_img'),
            countBlock = document.querySelector('.count'),
            phoneBlock = document.querySelector('.phone');

            titleBlock.textContent = order.title;
            firstName.textContent = order.firstName;
            emailBlock.textContent = order.email;
            descriptionBlock.textContent = order.description;
            deadlineBlock.textContent = order.deadline;
            currencyBlock.textContent = order.currency;
            countBlock.textContent = order.amount;
            phoneBlock.textContent = order.phone;

        modal.style.display = 'block';
    };


    //events

    closeBtn.addEventListener('click', () => {
        modalOrder.style.display = 'none';
    });

    ordersTable.addEventListener('click', (event) => {
        const target = event.target;

        const targetOrder = target.closest('.order');

        if(targetOrder){
            openModal(targetOrder.dataset.numberOrder);
        }

    });

    customer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    freelancer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        renderOrders();
        blockFreelancer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    btnExit.addEventListener('click', () => {
        blockChoice.style.display = 'block';
        blockFreelancer.style.display = 'none';
        blockCustomer.style.display = 'none';
        btnExit.style.display = 'none';
    });

    formCustomer.addEventListener('submit', (event) => {
        event.preventDefault();

        const obj = {};

        const elements = [...formCustomer.elements].filter((elem) => (elem.tagName === 'INPUT' && elem.type !== 'radio' || elem.type === 'radio' && elem.checked || elem.tagName === 'TEXTAREA'));

        elements.forEach((elem) => {
                obj[elem.name] = elem.value;
        });

        formCustomer.reset();

        orders.push(obj);
        console.log(orders);
    });

});