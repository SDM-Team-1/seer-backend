import mongoose from 'mongoose';

const BenefitSchema = new mongoose.Schema({
  isSupporting: Boolean,
  level: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
  },
});

const jsonSchema = {
  articleTitle: { type: String, required: true },
  author: {
    type: [String],
    validate: (v) => v == null || v.length > 0,
    required: true,
  },
  journal: { type: String, required: true },
  year: {
    type: Number,
    min: 1950,
    max: parseInt(new Date().getFullYear(), 10),
    index: true,
    required: true,
  },
  doi: { type: String, required: true },
  practice: {
    type: String,
    index: true,
    required: true,
  },
  benefits: {
    type: Map,
    of: BenefitSchema,
    index: true,
    required: true,
  },
};

export default jsonSchema;
