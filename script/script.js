document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');
    const blockCustomer = document.querySelector('#block-customer');
    const blockFreelancer = document.querySelector('#block-freelancer');
    const blockChoice = document.querySelector('#block-choice');
    const btnExit = document.querySelector('#btn-exit');
    const formCustomer = document.getElementById('form-customer');

    const orders = [];

    customer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    freelancer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
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

        for (const elem of formCustomer.elements) {
            if (elem.tagName === 'INPUT' && elem.type !== 'radio' || elem.type === 'radio' && elem.checked || elem.tagName === 'TEXTAREA') {
                obj[elem.name] = elem.value;
            }

        }
        formCustomer.reset();

        orders.push(obj);
    });
});