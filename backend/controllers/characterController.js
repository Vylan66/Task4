const asyncHandler = require('express-async-handler')

const Character = require('../models/characterModel')
const User = require('../models/userModel')

// @desc    Get characters
// @route   GET /api/characters
// @access  Private
const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Character.find({ user: req.user.id })

  res.status(200).json(characters)
})
 
// @desc    Set characters
// @route   POST /api/characters
// @access  Private
const setCharacter = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  if (!req.body.eyeColour) {
    res.status(400)
    throw new Error('Please select an eye colour')
  }
  if (!req.body.hairColour) {
    res.status(400)
    throw new Error('Please select a hair colour')
  }
  if (!req.body.shirtColour) {
    res.status(400)
    throw new Error('Please select a shirt colour')
  }
  if (!req.body.pantsColour) {
    res.status(400)
    throw new Error('Please select a pants colour')
  }
  const character = await Character.create({
    text: req.body.text,
    user: req.user.id,
    eyeColour: req.body.eyeColour,
    hairColour: req.body.hairColour,
    shirtColour: req.body.shirtColour,
    pantsColour: req.body.pantsColour
  })

  res.status(200).json(character)
})

// @desc    Update character
// @route   PUT /api/characters/:id
// @access  Private
const updateCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id)

  if (!character) {
    res.status(400)
    throw new Error('Character not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (character.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCharacter = await Character.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedCharacter)
})

// @desc    Delete character
// @route   DELETE /api/characters/:id
// @access  Private
const deleteCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id)

  if (!character) {
    res.status(400)
    throw new Error('Character not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (character.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await character.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getCharacters,
  setCharacter,
  updateCharacter,
  deleteCharacter,
}
