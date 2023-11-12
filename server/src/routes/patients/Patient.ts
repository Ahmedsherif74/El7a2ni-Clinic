import express from "express";
import { addFamilyMembers } from "../../controllers/patients/addFamilyMembers";
import { getDoctorById } from "../../controllers/patients/getDoctorById";
import { getAllDoctors } from "../../controllers/patients/getAllDoctors";
import { getPatientById } from "../../controllers/patients/getPatientById";
import { getPatientRegisteredFamilyMembers } from "../../controllers/patients/getPatientRegisteredFamilyMembers";
import { getPatientInfo } from "../../controllers/patients/getPatientInfo";
import { getAppointmentsWithAllDoctors } from "../../controllers/patients/getAllAppointments";
import { getAllPrescriptions } from "../../controllers/prescriptions/getPrescriptions";
import { getPatientPrescriptions } from "../../controllers/prescriptions/getPatientPrescriptions";
import {
  addPatientHealthRecord,
  deletePatientHealthRecord,
  getPatientHealthRecords,
} from "../../controllers/patients/healthRecords";
import { authenticateUser } from "../../middlewares/authentication";
import { authorizeUser } from "../../middlewares/authorization";
import { UserRole } from "../../types/UserRole";
import { viewHealthPackagesOptions } from "../../controllers/patients/viewHealthPackagesOptions";
import { subscribeToHealthPackage } from "../../controllers/patients/subscribePackageOfPatient";
import { setSubscribedPackageForDependent } from "../../controllers/patients/subscribeToPackageForIndependent";
import { viewSubscribedHealthPackage } from "../../controllers/patients/viewSubscribedHealthPackage";
import { viewSubscribedPackageDetailsForDependent } from "../../controllers/patients/viewPackageDetailsForDependent";
import { viewHealthCarePackageStatus } from "../../controllers/patients/viewPackageDetails";
import { viewSubscribedPackage } from "../../controllers/patients/viewHealthPackageIndependent";
import { cancelSubscription } from "../../controllers/patients/cancelSubscription";
import { cancelSubscribedForDependent } from "../../controllers/patients/cancelSubForIndependent";
import { viewSubscribedHealthPackageBenefits } from "../../controllers/patients/viewBenefitsOfPackage";
import { viewDependentFamilyMembersService } from "../../services/patients";
import { getDependentFamilyMembers } from "../../controllers/patients/viewDependentFamilyMembers";
import  {cancelSubscriptionForRegistered}  from "../../controllers/patients/cancelSubscriptionForRegistered";
const patientRouter = express.Router();

patientRouter.use(authenticateUser);
patientRouter.use(authorizeUser(UserRole.PATIENT));

patientRouter
  .get("/doctors", getAllDoctors)

  .get("/doctors/:doctorId", getDoctorById)

  .get("/patient-info", getPatientInfo)

  .post("/family-members", addFamilyMembers)

  .get("", getPatientById)

  .get("/prescriptions", getPatientPrescriptions)

  .get("/appointments", getAppointmentsWithAllDoctors)

  .get("prescriptions", getAllPrescriptions)

  .get("/health-records", getPatientHealthRecords)

  .put("/health-records", addPatientHealthRecord)

  .delete("/health-records", deletePatientHealthRecord)

  .get("/family-members", getPatientRegisteredFamilyMembers)

  .get("/appointments", getAppointmentsWithAllDoctors)

  .get("/health-packages", viewHealthPackagesOptions)

  .post("/subscribe", subscribeToHealthPackage)

  .post("/subscribe/dependent-member", setSubscribedPackageForDependent)

  .get("/patient-health-package", viewSubscribedHealthPackage)

  .get("/package-dependent", viewSubscribedPackageDetailsForDependent)

  .get("/health-care-package-status", viewHealthCarePackageStatus)

  .get("/dependent-health-package", viewSubscribedPackage)

  .patch("/cancel-subscription", cancelSubscription)

  .patch("/cancel-subscription-dependent", cancelSubscribedForDependent)

  .get("/package-benefits", viewSubscribedHealthPackageBenefits)

  .get("/dependent-family-members", getDependentFamilyMembers)

  .patch("/registered-family/cancel-subscription", cancelSubscriptionForRegistered)

export default patientRouter;
