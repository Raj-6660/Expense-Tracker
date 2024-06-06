import Expense from "../models/expenseModel.js";

export const addExpenseController = async (req, res) => {
    try {
        const { amount, description, date, category } = req.body;
        const { user } = req.session;

        // Simple validation
        if (!amount || !description || !date || !category || !user) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new expense document
        const newExpense = new Expense({
            amount,
            description,
            date,
            category,
            user: user.email // Assuming email is the unique identifier
        });

        // Save the expense to the database
        await newExpense.save();

        // Return a success response
        return res.status(201).json({
            success: true,
            message: 'Expense created successfully',
            newExpense
        });
    } catch (error) {
        console.error(error);

        // Return an error response
        res.status(500).json({
            success: false,
            message: 'Error adding Expense',
            error: error.message
        });
    }
};

export const getExpenseController = async (req, res) => {
    try {
        const { user } = req.session;

        const expenses = await Expense.find({ user: user.email });

        res.status(200).json({
            success: true,
            message: 'Expenses retrieved successfully',
            expenses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting expenses',
            error: error.message
        });
    }
};

export const getExpensesByBudget = async (req, res) => {
    try {
        const { bid } = req.params;
        const { user } = req.session;

        const expenses = await Expense.find({ budget: bid, user: user.email });

        res.status(200).json({
            success: true,
            message: 'Expenses fetched successfully',
            expenses
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error getting expenses by budget',
            error: error.message
        });
    }
};

export const addExpensesByBudget = async (req, res) => {
    try {
        const { bid } = req.params;
        const { amount, description, date, category, } = req.body;
        const { user } = req.session;

        // Simple validation
        if (!amount || !description || !date || !category || !user) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newExpense = new Expense({
            amount,
            description,
            date,
            category,
            budget: bid,
            user: user.email // Assuming email is the unique identifier
        });

        await newExpense.save();

        return res.status(201).json({
            success: true,
            message: 'Expense added successfully',
            newExpense
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Error adding expense',
            error: error.message
        });
    }
};
