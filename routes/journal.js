const express = require('express');
const router = express.Router();
const Journal = require('../models/Journal');
const auth = require("../middleware/auth");

router.get('/', auth, async (req, res) => {
    try {
        const journals = await Journal.find();
        res.json(journals)
    }catch(err){
    res.json({message: err});
  }
});

router.post('/', auth, async (req, res) => {
    const journal = new Journal({
        journal_entry: req.body.journal_entry
    });
    try{
    const savedJournal = await journal.save()
        res.json(savedJournal);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:journalId', async (req, res) => {
    try {
        const journal = await Journal.findById(req.params.journalId);
    res.json(journal);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;