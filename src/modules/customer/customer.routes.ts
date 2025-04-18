import express  from 'express';
import { CustomersController } from './customer.controller';
import { CustomerValidationSchema } from './customer.validate';
import { validateRequest } from '../../app/middlewares/validateRequest';

const router = express.Router();

// creaste new customer
router.post('/',
    validateRequest(CustomerValidationSchema.createCustomerSchema),
    CustomersController.createCustomer
)

// Get all Customer
router.get('/', CustomersController.getAllCustomers);

// Get a specific customer by ID
router.get('/:id',CustomersController.getCutomerByID)

// Update customer details
router.put('/:id',
    validateRequest(CustomerValidationSchema.updateCustomerZodSchema),
    CustomersController.updateCustomer
);

// Delete customer
router.delete('/:id',CustomersController.deleteCustomer)



export const CoustomerRoutes = router