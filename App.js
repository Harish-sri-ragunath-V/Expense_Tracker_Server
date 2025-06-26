const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const MONGO_URI = 'mongodb+srv://rvharishsri:hari@cluster0.i370xk5.mongodb.net/expense?retryWrites=true&w=majority&appName=Cluster0';
// const MONGO_URI = 'mongodb+srv://hariprasathg6380:hari@cluster0.psa2n7f.mongodb.net/expenses?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => {
        console.error("Mongo connection error:", err);
        process.exit(1);
    });

const expenseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true }
})

const Expense = mongoose.model('Expense', expenseSchema);

app.post('/expense', async (req, res) => {
    try {
        const { title, amount } = req.body;
        const expense = new Expense({ title, amount });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        console.error('Error saving expense:', error);
        res.status(500).json({ error: 'Failed to save expense' });
    }
});

app.get('/expense', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
});

app.put('/expense/:id', async (req, res) => {
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.status(201).json({ message: 'Expense updated successfully' });
    } catch (error) {
        console.error('Error updating expense:', error);
        res.status(500).json({ error: 'Failed to update expense' });
    }
});

app.delete('/expense/:id', async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
        if (!deletedExpense) {
            return res.status(404).json({ error: 'Expense not found' });
        }
        res.status(201).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        console.error('Error saving expense:', error);
        res.status(500).json({ error: 'Failed to save expense' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});