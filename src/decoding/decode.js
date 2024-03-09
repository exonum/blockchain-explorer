import * as validate from '../types/validate';
import { SignedMessage, CoreMessage } from '../proto_compiled/exonum/messages_pb';
import {
    TxCreateVoting, TxRegisterVoters, TxStopRegistration, TxRevokeVoterParticipation,
    TxIssueBallot, TxAddVoterKey, TxStoreBallot, TxStopVoting,
    TxPublishDecryptionKey, TxDecryptBallot, TxFinalizeVoting,
    TxFinalizeVotingWithResults, TxPublishDecryptedBallot
} from '../proto_compiled/transactions_pb';

function hexadecimalToUint8Array(str) {
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

function decodeTxCreateVoting(coreMessage) {
    return TxCreateVoting.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxRegisterVoters(coreMessage) {
    return TxRegisterVoters.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxStopRegistration(coreMessage) {
    return TxStopRegistration.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxRevokeVoterParticipation(coreMessage) {
    return TxRevokeVoterParticipation.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxIssueBallot(coreMessage) {
    return TxIssueBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxAddVoterKey(coreMessage) {
    return TxAddVoterKey.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxStoreBallot(coreMessage) {
    return TxStoreBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxStopVoting(coreMessage) {
    return TxStopVoting.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxPublishDecryptionKey(coreMessage) {
    return TxPublishDecryptionKey.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxDecryptBallot(coreMessage) {
    return TxDecryptBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxFinalizeVoting(coreMessage) {
    return TxFinalizeVoting.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxFinalizeVotingWithResults(coreMessage) {
    return TxFinalizeVotingWithResults.deserializeBinary(coreMessage.getAnyTx().getArguments());
}
function decodeTxPublishDecryptedBallot(coreMessage) {
    return TxPublishDecryptedBallot.deserializeBinary(coreMessage.getAnyTx().getArguments());
}

function getDecoderFunctionById(identifier) {
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

export function getNameById(identifier) {
    const names = {
        0: "Create voting",
        1: "Register voters",
        2: "Stop registration",
        3: "Revoke voter participation",
        4: "Issue ballot",
        5: "Add voter key",
        6: "Store ballot",
        7: "Stop voting",
        8: "Publish decryption key",
        9: "Decrypt ballot",
        10: "Finalize voting",
        11: "Finalize voting with results",
        12: "Publish decrypted ballot",
    };
    return names[identifier];
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
    return object;
}