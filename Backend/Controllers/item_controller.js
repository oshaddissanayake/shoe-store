const Item = require("../Models/item_model");
const catchAsync = require("../Utils/catchAsync");
const Filter = require("../Utils/Filters");
const e = require("express");

//Create item
exports.CreateItem = catchAsync(async (req, res) => {
    const newItem = await Item.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            group: newItem
        }
    });
})


//Get all items
exports.AllItems = catchAsync(async (req, res, next) => {
    let Respond = new Filter(Item, req.query).filter().sort().limitFields().paginate();
    const items = await Respond.query;
    res.status(201).json({
        status: "success",
        data: {
            items,
        },
    });
});

exports.AllItemsToDropDown = catchAsync(async (req, res, next) => {
    let Respond = new Filter(Item.find(), req.query).filter().sort().limitFields().paginate();
    const items = await Respond.query;
    res.status(201).json({
        status: "success",
        data: {
            items,
        },
    });
});


//Update item
exports.UpdateItem = catchAsync(async (req, res, next) => {
    req.body.item = req.item
    let all_Items = await Item.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json({
        status: "success",
        data: {
            all_Items,
        },
    });
});


//Delete item
exports.DeleteItem = catchAsync(async (req, res, next) => {
    let deleteItem = await Item.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: "success",
        data: {
            deleteItem,
        },
    });
});
