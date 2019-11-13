const { Schema, model } = require('mongoose');
const shortid = require('shortid');
const validUrl = require('valid-url');

const ShortlinkSchema = new Schema({
  url: {
    type: String,
    required: true,
    validate: {
      validator: value => !!validUrl.isUri(value),
      message: props => `Invalid URL provided - "${props.value}"`
    }
  },
  shortlink: {
    type: String,
    unique: true,
    match: /[A-Za-z0-9_-]/,
    default: shortid.generate,
    required: true
  },
  dateCreated: {
    type: Date,
    default: Date.now,
    required: true
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
    required: true
  }
});

const Shortlink = model('Shortlink', ShortlinkSchema);

module.exports = {
  Shortlink
};
