const Account = require('../Models/Account');

const createAccount = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    Object.assign(account, req.body);
    await account.save();
    res.status(200).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }
    res.status(200).json(account);
} catch (err) { res.status(400).json({ error: err.message }); } };



module.exports={deleteAccount,updateAccount,getAccountById,getAccounts,createAccount}