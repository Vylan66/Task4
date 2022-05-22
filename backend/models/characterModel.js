const mongoose = require('mongoose')

const characterSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    eyeColour: {
      type: String,
      required: [true, 'Please select an eye colour']
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Character', characterSchema)
