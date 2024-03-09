import * as validate from '../types/validate';
import { SignedMessage, CoreMessage } from '../proto_compiled/exonum/messages_pb';
import {
    TxCreateVoting, TxRegisterVoters, TxStopRegistration, TxRevokeVoterParticipation,
    TxIssueBallot, TxAddVoterKey, TxStoreBallot, TxStopVoting,
    TxPublishDecryptionKey, TxDecryptBallot, TxFinalizeVoting,
    TxFinalizeVotingWithResults, TxPublishDecryptedBallot
} from '../proto_compiled/transactions_pb';

export function hexadecimalToUint8Array(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Wrong data type passed to convertor. Hexadecimal string is expected')
    }

    if (str.length % 2 !== 0) {
        console.error("The hex string should have an even number of characters");
        return new Uint8Array();
    }

    if (!validate.validateHexadecimal(str, str.length / 2)) {
        throw new TypeError('String of wrong type is passed. Hexadecimal expected.')
    }

    const uint8arr = new Uint8Array(str.length / 2)

    for (let i = 0, j = 0; i < str.length; i += 2, j++) {
        uint8arr[j] = parseInt(str.substr(i, 2), 16)
    }

    return uint8arr
}

export function decodeTxCreateVoting(coreMessage) {
    return TxCreateVoting.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxRegisterVoters(coreMessage) {
    return TxRegisterVoters.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxStopRegistration(coreMessage) {
    return TxStopRegistration.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxRevokeVoterParticipation(coreMessage) {
    return TxRevokeVoterParticipation.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxIssueBallot(coreMessage) {
    return TxIssueBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxAddVoterKey(coreMessage) {
    return TxAddVoterKey.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxStoreBallot(coreMessage) {
    return TxStoreBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxStopVoting(coreMessage) {
    return TxStopVoting.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxPublishDecryptionKey(coreMessage) {
    return TxPublishDecryptionKey.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxDecryptBallot(coreMessage) {
    return TxDecryptBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxFinalizeVoting(coreMessage) {
    return TxFinalizeVoting.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxFinalizeVotingWithResults(coreMessage) {
    return TxFinalizeVotingWithResults.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
export function decodeTxPublishDecryptedBallot(coreMessage) {
    return TxPublishDecryptedBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}

export function getDecoderFunctionById(identifier) {
    const decoders = {
        0: decodeTxCreateVoting,
        1: decodeTxRegisterVoters,
        2: decodeTxStopRegistration,
        3: decodeTxRevokeVoterParticipation,
        4: decodeTxIssueBallot,
        5: decodeTxAddVoterKey,
        6: decodeTxStoreBallot,
        7: decodeTxStopVoting,
        8: decodeTxPublishDecryptionKey,
        9: decodeTxDecryptBallot,
        10: decodeTxFinalizeVoting,
        11: decodeTxFinalizeVotingWithResults,
        12: decodeTxPublishDecryptedBallot,
    };
    return decoders[identifier];
};


export function decodeTransaction(response) {
    const binaryArray = hexadecimalToUint8Array(response.data.message);
    const signedMessage = SignedMessage.deserializeBinary(binaryArray);
    const coreMessage = CoreMessage.deserializeBinary(signedMessage.getPayload());
    const methodId = coreMessage.getAnyTx().getCallInfo().getMethodId();
    const decoderFunction = getDecoderFunctionById(methodId);
    var txObject = null;
    if (decoderFunction) {
        if (coreMessage.getAnyTx()) {
            // Assume binaryArray is obtained from your protobuf message
            const txDecode = decoderFunction(coreMessage);
            txObject = txDecode.toObject();
        } else {
            console.error("anyTx is undefined in CoreMessage");
        }
    } else {
        console.error("Decoder function not found for identifier:", identifier);
    }
    var object = signedMessage.toObject();
    object.payload = coreMessage.toObject();
    object.payload.anyTx.arguments = txObject;
    return JSON.stringify(object, null, 2);

}