import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { findPatientById } from '../../services/patients';

export const getPatientById = async (req: Request, res: Response) => {
    const id = req.params.patientId;
    const patient = await findPatientById(id);
    
    if (!patient) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: 'Patient not' });
    } else {
        return res.status(StatusCodes.OK).json(patient);
    }
};
