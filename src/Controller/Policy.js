const Policy = require('../Models/Policy');

 const createPolicy = async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json(policy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.status(200).json(policies);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
      return res.status(404).json({ error: 'Policy not found' });
    }
    res.status(200).json(policy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) {
      return res.status(404).json({ error: 'Policy not found' });
    }
    Object.assign(policy, req.body);
    await policy.save();
    res.status(200).json(policy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndDelete(req.params.id);
    if (!policy) {
      return res.status(404).json({ error: 'Policy not found' });
    }
    res.status(200).json(policy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


module.exports={deletePolicy,updatePolicy,getPolicyById,getPolicies,createPolicy}