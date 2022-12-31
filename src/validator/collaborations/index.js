const InvariantError = require('../../exceptions/invariantError');
const collaborationsPayloadSchema = require('./schema');

const CollaborationsValidator = {
  validateCollaborationsPayload: (payload) => {
    const validationResult = collaborationsPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = CollaborationsValidator;
