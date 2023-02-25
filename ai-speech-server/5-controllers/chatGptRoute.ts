import express from 'express'
import { getDetailsFromToken } from '../1-dal/jwt';
import { translateToEn, translateToUserLanguage } from '../1-dal/translate';
import { getMessageFromChatGPTandSave } from '../3-logic/chatGptLogic';
import { saveUserMessages } from '../3-logic/messagesLogic';

export const ChatGptRoute = express.Router();

ChatGptRoute.post('/message', async (req, res) => {
    const token = req.headers.authorization;
    const message = req.body.message
    const room = req.body.room

    try {
        const { sub, language } = await getDetailsFromToken(token);
        const translatedTextEnglish = await translateToEn(message);

        const chatGptResults = await getMessageFromChatGPTandSave(translatedTextEnglish, sub, room);
        const translatedTextByUserLanguage = await translateToUserLanguage(chatGptResults, language);

        res.status(200).json(translatedTextByUserLanguage);
        await saveUserMessages(translatedTextEnglish, sub, room);
    } catch (e) {
        res.status(401).json(e)
    }
})


