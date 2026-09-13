const CASES = [];

function add(c) { CASES.push(c); }

// ================= CARDIOVASCULAR =================
add({
  title: "Crushing Chest Pain in a 58-Year-Old Smoker",
  category: "Cardiovascular", difficulty: "Beginner",
  chief_complaint: "58M presents with 45 minutes of substernal chest pressure radiating to the left arm.",
  history: "Pain started at rest while watching TV, described as an 8/10 pressure, associated with diaphoresis and nausea. Longstanding 30 pack-year smoking history, hypertension, and hyperlipidemia. No prior cardiac history.",
  vitals: "BP 158/94, HR 102, RR 20, SpO2 96% RA, Temp 37.0C",
  exam: "Diaphoretic, uncomfortable-appearing. Regular rate and rhythm, no murmurs. Lungs clear. No peripheral edema.",
  workup: "STAT ECG shows 2mm ST elevation in leads II, III, aVF with reciprocal depression in I and aVL. Troponin pending. Portable CXR unremarkable.",
  differential: "STEMI (inferior), unstable angina, aortic dissection, pericarditis, esophageal spasm.",
  management: "Activate the cath lab immediately. Aspirin 324mg chewed, if no contraindication give P2Y12 inhibitor per local protocol, obtain IV access, continuous monitoring, treat pain with nitrates only after confirming no right ventricular involvement/inferior MI hypotension risk, and avoid nitrates if hypotensive or on PDE5 inhibitors.",
  teaching_points: "Inferior STEMI (II, III, aVF) can involve the right ventricle — always get a right-sided ECG (V4R) before giving nitrates, since RV infarcts are preload-dependent and nitrates can cause profound hypotension. Time is muscle: door-to-balloon goal is under 90 minutes.",
  quiz: [{ question: "Before giving nitroglycerin in this patient, what should you check first?", options: ["Serum potassium", "Right-sided ECG for RV involvement", "D-dimer", "Liver function tests"], correct_index: 1, explanation: "Inferior STEMIs can involve the RV; nitrates in RV infarction can cause severe, preload-dependent hypotension." }],
});

add({
  title: "Sudden Tearing Back Pain with Pulse Deficit",
  category: "Cardiovascular", difficulty: "Advanced",
  chief_complaint: "67F with sudden-onset tearing interscapular pain radiating to the abdomen.",
  history: "Poorly controlled hypertension. Pain began abruptly while gardening, described as the worst pain of her life, migrating from chest to back to abdomen. No trauma.",
  vitals: "BP 190/110 in right arm, 150/88 in left arm, HR 96, RR 18, SpO2 98%",
  exam: "Diaphoretic. Diminished left radial pulse compared to right. New diastolic murmur at the right sternal border. Abdomen soft, no peritoneal signs.",
  workup: "CT angiography of chest/abdomen/pelvis shows an intimal flap in the ascending and descending aorta extending to the iliac arteries (Stanford Type A). ECG without ischemic changes. CXR shows widened mediastinum.",
  differential: "Aortic dissection, STEMI, pulmonary embolism, esophageal rupture, musculoskeletal pain.",
  management: "Emergent cardiothoracic surgery consultation for Type A dissection. Aggressive heart-rate and blood-pressure control with IV beta-blockade (esmolol) first, followed by vasodilators (nitroprusside) if needed to keep HR <60 and SBP 100-120. Two large-bore IVs, type and cross blood, avoid anticoagulation.",
  teaching_points: "Blood pressure discrepancy between arms and a widened mediastinum are classic but insensitive findings — a normal CXR does not rule out dissection. Type A (ascending aorta) is a surgical emergency; Type B (descending only, no arch involvement) is usually managed medically unless complicated.",
  quiz: [{ question: "What is the first-line agent for blood pressure/heart rate control in aortic dissection?", options: ["Hydralazine alone", "IV beta-blocker (e.g., esmolol) before vasodilators", "Nitroprusside alone", "Calcium channel blocker only"], correct_index: 1, explanation: "Beta-blockade should be started first to blunt reflex tachycardia and reduce aortic wall shear stress before adding a vasodilator." }],
});

add({
  title: "Palpitations and Lightheadedness in a Young Athlete",
  category: "Cardiovascular", difficulty: "Intermediate",
  chief_complaint: "22M collegiate soccer player with palpitations and near-syncope during a game.",
  history: "Sudden onset of a racing heart mid-sprint, felt lightheaded, sat down and symptoms resolved after 10 minutes. No chest pain. No prior episodes. No family history of sudden death reported initially.",
  vitals: "BP 112/70, HR 88 (now regular), RR 16, SpO2 99%",
  exam: "Unremarkable cardiac and pulmonary exam at rest.",
  workup: "ECG shows a short PR interval with a delta wave consistent with Wolff-Parkinson-White pattern. Electrolytes and troponin normal.",
  differential: "SVT due to accessory pathway (WPW), AVNRT, vasovagal syncope, exercise-induced arrhythmia, hypertrophic cardiomyopathy.",
  management: "Continuous cardiac monitoring, cardiology consultation for electrophysiology study and possible catheter ablation. Counsel to avoid AV-nodal blocking agents (like verapamil or digoxin) if he develops atrial fibrillation, since these can precipitate rapid conduction down the accessory pathway leading to ventricular fibrillation.",
  teaching_points: "A delta wave and short PR on a resting ECG in a young patient with palpitations should raise suspicion for WPW. If such a patient presents in atrial fibrillation with a wide, irregular, fast rhythm, avoid AV nodal blockers — use procainamide or synchronized cardioversion instead.",
  quiz: [{ question: "If this patient later develops atrial fibrillation with a wide, irregular, fast rhythm (known WPW), which drug should be avoided?", options: ["Procainamide", "Verapamil (an AV-nodal blocker)", "Synchronized cardioversion", "Supplemental oxygen"], correct_index: 1, explanation: "AV-nodal blockers can preferentially slow the AV node and promote conduction down the accessory pathway, precipitating ventricular fibrillation; procainamide or cardioversion are preferred." }],
});

add({
  title: "New Heart Failure Exacerbation in the ED",
  category: "Cardiovascular", difficulty: "Beginner",
  chief_complaint: "71F with three days of worsening shortness of breath and leg swelling.",
  history: "Known history of ischemic cardiomyopathy (EF 30%). Reports orthopnea (now sleeping on 3 pillows) and 8-lb weight gain over a week. Admits to eating salty takeout food. No chest pain.",
  vitals: "BP 148/86, HR 104, RR 26, SpO2 89% RA",
  exam: "Elevated JVP to the angle of the jaw, bilateral crackles two-thirds up the lung fields, 2+ pitting edema to the knees, S3 gallop.",
  workup: "CXR shows pulmonary vascular congestion and bilateral pleural effusions. BNP markedly elevated. ECG shows sinus tachycardia without acute ischemic changes. Troponin mildly elevated (chronic pattern given renal function).",
  differential: "Acute decompensated heart failure, COPD exacerbation, pneumonia, pulmonary embolism, acute coronary syndrome.",
  management: "Supplemental oxygen, IV loop diuretic (furosemide), consider non-invasive positive pressure ventilation if respiratory distress persists, daily weights, strict I/Os, and address the precipitant (dietary indiscretion). Hold antihypertensives if borderline BP but continue guideline-directed medical therapy where tolerated.",
  teaching_points: "Look for the precipitant in every heart failure exacerbation — dietary indiscretion, medication non-adherence, ischemia, arrhythmia, or infection. An S3 gallop plus elevated JVP is highly suggestive of volume overload and helps distinguish cardiac from pulmonary causes of dyspnea.",
});

// ================= RESPIRATORY =================
add({
  title: "Acute Dyspnea After a Long Flight",
  category: "Respiratory", difficulty: "Intermediate",
  chief_complaint: "34F with sudden pleuritic chest pain and shortness of breath after a 12-hour flight.",
  history: "Returned from an international flight 2 days ago. Noticed right calf swelling yesterday. Takes oral contraceptives. No prior VTE history.",
  vitals: "BP 118/76, HR 118, RR 24, SpO2 91% RA",
  exam: "Tachypneic, mild distress. Right calf is swollen and tender compared to left. Lungs clear to auscultation. No JVD.",
  workup: "Wells score suggests high pretest probability. CT pulmonary angiography shows filling defects in the right main and segmental pulmonary arteries. ECG shows sinus tachycardia with an S1Q3T3 pattern.",
  differential: "Pulmonary embolism, pneumonia, pneumothorax, musculoskeletal chest pain, anxiety/hyperventilation.",
  management: "Start therapeutic anticoagulation (e.g., weight-based low molecular weight heparin or a DOAC per institutional protocol) if no contraindication. Assess for hemodynamic instability — if hypotensive, consider systemic thrombolysis or catheter-directed therapy. Admit for monitoring, evaluate the OCP as a modifiable risk factor going forward.",
  teaching_points: "In a hemodynamically stable PE, anticoagulation is the mainstay of treatment. Risk-stratify with signs of right heart strain (troponin, BNP, echo, RV/LV ratio on CT) to decide on escalation of care versus floor admission.",
  quiz: [{ question: "Which finding would most strongly suggest this patient needs consideration for thrombolysis rather than anticoagulation alone?", options: ["Mild calf swelling", "Sustained hypotension from RV failure", "Sinus tachycardia alone", "Elevated D-dimer"], correct_index: 1, explanation: "Massive PE with hemodynamic instability (obstructive shock from acute RV failure) is an indication to consider thrombolysis." }],
});

add({
  title: "Wheezing Toddler Who Won't Stop Coughing",
  category: "Respiratory", difficulty: "Beginner",
  chief_complaint: "3-year-old boy brought in with acute-onset coughing, wheezing, and stridor while eating peanuts.",
  history: "Was eating peanuts at daycare, suddenly began coughing forcefully, then developed a high-pitched inspiratory sound and appeared distressed. No fever, no prior respiratory illness.",
  vitals: "HR 130, RR 34, SpO2 93% RA, Temp 36.9C",
  exam: "Alert but anxious, sitting upright, inspiratory stridor audible without a stethoscope, mild suprasternal retractions, decreased breath sounds on the right side.",
  workup: "Portable CXR shows hyperinflation of the right lung with mediastinal shift, suggesting a ball-valve effect from an airway foreign body.",
  differential: "Foreign body aspiration, croup, epiglottitis, asthma exacerbation, anaphylaxis.",
  management: "Keep the child calm and in a position of comfort, avoid agitating exams that could convert partial to complete obstruction, give supplemental oxygen, urgent ENT/anesthesia consultation for rigid bronchoscopy and foreign body removal. Do not perform blind finger sweeps.",
  teaching_points: "A history of choking while eating nuts plus unilateral wheeze and asymmetric hyperinflation on imaging is classic for foreign body aspiration. Avoid agitating a child with partial airway obstruction — crying and distress can convert it to complete obstruction.",
});

add({
  title: "COPD Patient in Respiratory Distress",
  category: "Respiratory", difficulty: "Intermediate",
  chief_complaint: "63M with known COPD presents with worsening dyspnea, increased sputum production, and wheezing over 2 days.",
  history: "40 pack-year smoker, on home oxygen and inhalers. Ran out of his tiotropium refill a week ago. No fever. No chest pain.",
  vitals: "BP 142/88, HR 110, RR 28, SpO2 86% on home 2L NC, Temp 37.2C",
  exam: "Using accessory muscles, pursed-lip breathing, diffuse expiratory wheezes, prolonged expiratory phase, no cyanosis.",
  workup: "ABG shows respiratory acidosis with compensated hypercapnia (pH 7.32, pCO2 62, HCO3 30). CXR shows hyperinflation without infiltrate.",
  differential: "COPD exacerbation, pneumonia, heart failure, pneumothorax, pulmonary embolism.",
  management: "Bronchodilators (nebulized albuterol/ipratropium), systemic corticosteroids, controlled oxygen titration to avoid over-oxygenation (target SpO2 88-92%), trial of non-invasive ventilation (BiPAP) given respiratory acidosis, consider antibiotics if evidence of bacterial exacerbation.",
  teaching_points: "In COPD patients, titrate oxygen carefully — over-oxygenating can worsen hypercapnia via V/Q mismatch and loss of hypoxic respiratory drive. BiPAP is first-line for COPD exacerbations with respiratory acidosis and reduces the need for intubation.",
  quiz: [{ question: "What is the most appropriate oxygen therapy strategy for this COPD patient in acute exacerbation?", options: ["Titrate to a target SpO2 of 88-92%", "High-flow 100% oxygen to normalize saturation", "Withhold all supplemental oxygen", "Titrate to SpO2 above 98%"], correct_index: 0, explanation: "Over-oxygenating COPD patients can worsen hypercapnia via V/Q mismatch and blunted hypoxic drive, so oxygen should be titrated to 88-92%." }],
});

add({
  title: "Sudden Sharp Chest Pain in a Tall Thin Young Man",
  category: "Respiratory", difficulty: "Beginner",
  chief_complaint: "19M tall, thin male with sudden right-sided sharp chest pain and mild dyspnea while playing basketball.",
  history: "No trauma. No prior lung disease. Non-smoker. Pain worse with deep breaths.",
  vitals: "BP 122/78, HR 98, RR 22, SpO2 94% RA",
  exam: "Decreased breath sounds and hyperresonance to percussion on the right hemithorax. Trachea midline. No distended neck veins.",
  workup: "Upright CXR shows a visible visceral pleural line with absence of lung markings peripherally, consistent with a moderate right-sided pneumothorax.",
  differential: "Primary spontaneous pneumothorax, pulmonary embolism, musculoskeletal chest pain, pericarditis.",
  management: "For a moderate primary spontaneous pneumothorax in a stable patient, options include observation with supplemental oxygen for smaller pneumothoraces or needle aspiration/chest tube placement for larger ones per size criteria and symptoms. Serial CXRs to confirm resolution, smoking cessation counseling, and follow-up with pulmonology given recurrence risk.",
  teaching_points: "Tall, thin young males are the classic demographic for primary spontaneous pneumothorax due to rupture of subpleural blebs. Tension pneumothorax (tracheal deviation, hypotension, distended neck veins) is a clinical diagnosis requiring immediate needle decompression — don't wait for imaging.",
  quiz: [{ question: "Which finding, if it developed, would indicate this has progressed to a tension pneumothorax requiring immediate needle decompression?", options: ["Hyperresonance to percussion", "Tracheal deviation and hypotension", "Pleuritic chest pain", "Decreased breath sounds on the right"], correct_index: 1, explanation: "Tension pneumothorax is a clinical diagnosis marked by tracheal deviation, hypotension, and distended neck veins — treat immediately, don't wait for imaging." }],
});

// ================= TRAUMA =================
add({
  title: "High-Speed MVC with Hypotension",
  category: "Trauma", difficulty: "Advanced",
  chief_complaint: "28M unrestrained driver in a high-speed head-on collision, brought in by EMS.",
  history: "Prolonged extrication, reportedly unconscious briefly at the scene. EMS report significant steering wheel deformity.",
  vitals: "BP 84/50, HR 128, RR 24, SpO2 94% on NRB, GCS 13",
  exam: "Abrasions across the chest in a seatbelt-sign distribution is absent (unrestrained). Distended, tender abdomen. Pelvis unstable to gentle compression. Bilateral femur deformity.",
  workup: "FAST exam positive for free fluid in the perihepatic and pelvic views. Pelvic X-ray shows an open-book pelvic fracture. Labs pending; type and cross sent.",
  differential: "Hemorrhagic shock from intra-abdominal injury, pelvic fracture bleeding, long bone fracture blood loss, tension pneumothorax, cardiac tamponade.",
  management: "Activate massive transfusion protocol, apply a pelvic binder immediately at the level of the greater trochanters, two large-bore IVs or IO access, permissive hypotension with blood products preferentially over crystalloid, emergent surgical and interventional radiology consultation for damage control laparotomy and/or angioembolization.",
  teaching_points: "In blunt trauma with hypotension, think about the 5 places you can 'bleed to death': chest, abdomen, pelvis/retroperitoneum, long bones, and external. A positive FAST plus an unstable pelvis in a hypotensive patient means immediate binder application and activation of your massive transfusion and trauma surgery resources.",
  quiz: [{ question: "What is the immediate bedside intervention for a suspected open-book pelvic fracture with hypotension?", options: ["Obtain a CT scan first", "Apply a pelvic binder at the level of the greater trochanters", "Start oral fluids", "Apply a cervical collar only"], correct_index: 1, explanation: "A pelvic binder reduces pelvic volume and can control venous/bony bleeding immediately, before imaging, in an unstable patient." }],
});

add({
  title: "Fall from Standing Height on Blood Thinners",
  category: "Trauma", difficulty: "Intermediate",
  chief_complaint: "81F on apixaban for atrial fibrillation, fell at home and hit her head; brought in by family.",
  history: "Witnessed fall, brief loss of consciousness per daughter. Now complains of headache. Denies neck pain. Takes apixaban 5mg twice daily.",
  vitals: "BP 152/84, HR 78, RR 16, SpO2 97%, GCS 15",
  exam: "Small scalp hematoma at the occiput. No focal neurologic deficits. Pupils equal and reactive.",
  workup: "Non-contrast head CT shows a small subdural hematoma without midline shift. Coagulation panel and renal function checked prior to any reversal decision.",
  differential: "Traumatic intracranial hemorrhage (subdural), concussion, cervical spine injury, syncope as cause of fall.",
  management: "Neurosurgery consultation, consider reversal of anticoagulation (andexanet alfa or 4-factor PCC per institutional protocol and neurosurgical input) given intracranial hemorrhage, admit for serial neuro checks and repeat head CT, hold future anticoagulation until cleared.",
  teaching_points: "Any anticoagulated patient with head trauma — even with a reassuring initial exam or GCS 15 — warrants a low threshold for head CT, since anticoagulation increases both the risk and rate of expansion of intracranial hemorrhage. Always ask about the specific anticoagulant, as reversal strategies differ (e.g., DOAC-specific reversal agents vs. vitamin K/FFP for warfarin).",
});

add({
  title: "Stab Wound to the Left Chest",
  category: "Trauma", difficulty: "Advanced",
  chief_complaint: "26M with a single stab wound to the left 5th intercostal space, midclavicular line.",
  history: "Altercation with a knife approximately 20 minutes ago. Reports chest pain and shortness of breath.",
  vitals: "BP 78/48, HR 134, RR 28, SpO2 90% on NRB",
  exam: "Distended neck veins, muffled heart sounds, single stab wound in the 'cardiac box.' Trachea midline. Breath sounds present bilaterally.",
  workup: "Bedside FAST/eFAST shows pericardial effusion with signs of tamponade (diastolic RV collapse). No pneumothorax on lung views.",
  differential: "Cardiac tamponade from penetrating cardiac injury, tension pneumothorax, hemothorax, great vessel injury.",
  management: "This is Beck's triad (hypotension, JVD, muffled heart sounds) from tamponade — activate the trauma/surgical team immediately for emergency thoracotomy or pericardial window; this is not primarily managed with pericardiocentesis alone in the setting of penetrating trauma in a decompensating patient in the ED. IV fluids as a bridge, but definitive management is surgical.",
  teaching_points: "Any penetrating injury within the 'cardiac box' (bounded by the clavicles, nipple lines, and costal margins) should raise concern for cardiac injury. Beck's triad is classic but often incomplete in the acute setting — a positive pericardial view on FAST in a hypotensive trauma patient is enough to mobilize the OR.",
});

add({
  title: "Assault Victim with Facial Trauma and Diplopia",
  category: "Trauma", difficulty: "Intermediate",
  chief_complaint: "35M punched in the face, now with double vision when looking upward.",
  history: "Direct blow to the right orbit. Denies loss of consciousness. Reports pain with eye movement and some numbness over the right cheek.",
  vitals: "BP 130/80, HR 84, RR 16, SpO2 99%",
  exam: "Periorbital ecchymosis and edema, restricted upward gaze of the right eye, hypoesthesia over the right infraorbital region, no globe rupture, visual acuity intact.",
  workup: "CT facial bones shows a right orbital floor ('blowout') fracture with inferior rectus muscle entrapment and herniation of orbital fat into the maxillary sinus.",
  differential: "Orbital blowout fracture with muscle entrapment, globe rupture, retrobulbar hematoma, zygomaticomaxillary complex fracture.",
  management: "Ophthalmology and ENT/plastic surgery consultation. Urgent surgical repair is indicated for muscle entrapment (especially in children, who can develop the 'white-eyed blowout fracture' with minimal external signs but true entrapment causing oculocardiac reflex). Advise against nose blowing, treat with antibiotics if sinus involvement, and control pain/nausea.",
  teaching_points: "Restricted upward gaze plus infraorbital numbness after facial trauma should raise concern for an orbital floor fracture with inferior rectus entrapment — this is a surgical urgency, not something to defer for outpatient follow-up, especially in pediatric patients where entrapment can occur with a deceptively normal-looking exam.",
});

// ================= NEUROLOGY =================
add({
  title: "Sudden Worst Headache of Her Life",
  category: "Neurology", difficulty: "Advanced",
  chief_complaint: "45F with sudden-onset severe headache reaching maximal intensity within seconds.",
  history: "Was exercising when the headache hit like a 'thunderclap.' Associated with brief neck stiffness and one episode of vomiting. No prior migraine history.",
  vitals: "BP 168/96, HR 88, RR 16, SpO2 99%",
  exam: "Photophobia and mild nuchal rigidity. No focal motor deficits. Pupils equal and reactive.",
  workup: "Non-contrast head CT within 6 hours of onset shows no hemorrhage. Given ongoing high suspicion, lumbar puncture is performed showing xanthochromia.",
  differential: "Subarachnoid hemorrhage, meningitis, cervical artery dissection, migraine, reversible cerebral vasoconstriction syndrome.",
  management: "Neurosurgery consultation for CT angiography to localize an aneurysm, blood pressure control to a target that balances perfusion and rebleeding risk, nimodipine to reduce vasospasm risk, bed rest, analgesia and antiemetics, and admission to a neuro ICU.",
  teaching_points: "A negative non-contrast head CT does not rule out subarachnoid hemorrhage, especially beyond 6 hours from symptom onset — lumbar puncture looking for xanthochromia remains an important next step in a high-pretest-probability patient. 'Thunderclap' headache is the classic descriptor and should never be dismissed as a routine migraine without careful evaluation.",
  quiz: [{ question: "If a head CT is negative but done more than 6 hours after headache onset, what is the next best step in a high-suspicion patient?", options: ["Discharge with NSAIDs", "Lumbar puncture for xanthochromia", "MRI of the lumbar spine", "Repeat CT in 24 hours only"], correct_index: 1, explanation: "Beyond the 6-hour window, CT sensitivity drops, so LP to look for xanthochromia (present after ~12 hours) becomes essential to rule out SAH." }],
});

add({
  title: "Acute Facial Droop and Slurred Speech",
  category: "Neurology", difficulty: "Intermediate",
  chief_complaint: "72M brought in by wife with sudden right facial droop and slurred speech starting 45 minutes ago.",
  history: "Last known well 45 minutes prior to arrival. History of atrial fibrillation, not on anticoagulation due to fall risk concerns. No recent surgery or bleeding history.",
  vitals: "BP 178/94, HR 96 irregularly irregular, RR 16, SpO2 97%",
  exam: "Right facial droop, right arm drift, expressive aphasia. NIHSS calculated at 9.",
  workup: "STAT non-contrast head CT shows no hemorrhage. CT angiography shows a left MCA occlusion. Glucose is normal, ruling out hypoglycemia as a mimic.",
  differential: "Acute ischemic stroke (cardioembolic given atrial fibrillation), hypoglycemia, complex migraine, seizure with Todd's paralysis, hemorrhagic stroke.",
  management: "Given the patient is within the window and has no contraindications, administer IV thrombolysis (alteplase or tenecteplase per protocol) and urgently arrange mechanical thrombectomy given large-vessel occlusion. Manage blood pressure per thrombolytic protocol thresholds, and admit to a stroke unit.",
  teaching_points: "Time is brain: rapid door-to-needle and door-to-groin times drive outcomes. Atrial fibrillation is a major risk factor for cardioembolic stroke — always ask about anticoagulation status, as this changes eligibility and bleeding risk calculations.",
});

add({
  title: "First-Time Seizure in a Young Adult",
  category: "Neurology", difficulty: "Beginner",
  chief_complaint: "24M brought in after a witnessed generalized tonic-clonic seizure lasting about 2 minutes.",
  history: "No prior seizure history. Sleep-deprived after finals week, admits to heavy alcohol use the night before. Postictal confusion now resolving.",
  vitals: "BP 128/80, HR 92, RR 18, SpO2 98%, Temp 37.1C",
  exam: "Now awake and oriented, tongue laceration noted on the lateral tongue, no focal neurologic deficits.",
  workup: "Glucose normal, electrolytes normal, head CT without acute abnormality. Urine toxicology positive for THC only.",
  differential: "First unprovoked seizure, alcohol withdrawal seizure, hypoglycemia, electrolyte abnormality (e.g., hyponatremia), structural lesion, syncope with myoclonic jerks.",
  management: "Since this appears to be a provoked/first seizure with a normal workup, outpatient neurology follow-up and EEG can often be arranged rather than starting antiepileptics in the ED. Counsel on seizure precautions (driving restrictions per local law, no swimming/bathing alone, avoiding heights), and address the sleep deprivation/alcohol trigger.",
  teaching_points: "Not every first seizure requires immediate antiepileptic therapy — the decision depends on recurrence risk factors (abnormal EEG, structural lesion, family history). A lateral tongue laceration is a helpful exam clue supporting a true generalized tonic-clonic seizure over syncope.",
});

// ================= GI / ABDOMINAL =================
add({
  title: "Right Lower Quadrant Pain in a Young Woman",
  category: "GI/Abdominal", difficulty: "Beginner",
  chief_complaint: "21F with 18 hours of periumbilical pain that migrated to the right lower quadrant.",
  history: "Associated with anorexia, nausea, and one episode of vomiting. Last menstrual period 2 weeks ago, sexually active, uses condoms inconsistently.",
  vitals: "BP 118/72, HR 96, RR 16, Temp 38.1C",
  exam: "Tenderness and voluntary guarding at McBurney's point, positive Rovsing's sign, no cervical motion tenderness.",
  workup: "Urine hCG negative. WBC elevated at 14,000 with left shift. CT abdomen/pelvis shows a dilated, non-compressible appendix with surrounding fat stranding.",
  differential: "Acute appendicitis, ectopic pregnancy, ovarian torsion, pelvic inflammatory disease, mesenteric adenitis, ruptured ovarian cyst.",
  management: "Surgical consultation for appendectomy, IV fluids, broad-spectrum antibiotics, analgesia and antiemetics, NPO status in anticipation of surgery.",
  teaching_points: "Always send a pregnancy test in any woman of childbearing age with abdominal pain — it changes both the differential and management, even when appendicitis seems clinically obvious. Classic migratory pain (periumbilical to RLQ) plus anorexia is the textbook appendicitis presentation, though atypical presentations are common.",
});

add({
  title: "Epigastric Pain Radiating to the Back After a Binge",
  category: "GI/Abdominal", difficulty: "Intermediate",
  chief_complaint: "48M with severe epigastric pain radiating to the back after a weekend of heavy drinking.",
  history: "History of alcohol use disorder. Pain is constant, worse lying flat, better leaning forward. Multiple episodes of vomiting.",
  vitals: "BP 108/68, HR 118, RR 22, Temp 37.6C",
  exam: "Epigastric tenderness without rebound, mild abdominal distension, diminished bowel sounds.",
  workup: "Lipase markedly elevated (>3x upper limit of normal). CT abdomen shows peripancreatic fat stranding consistent with acute pancreatitis, no necrosis or pseudocyst yet. Triglycerides and calcium checked.",
  differential: "Acute pancreatitis (alcohol-induced), perforated peptic ulcer, mesenteric ischemia, cholecystitis, myocardial infarction (inferior).",
  management: "Aggressive IV crystalloid resuscitation, pain control, antiemetics, early enteral nutrition as tolerated rather than prolonged NPO, monitor for signs of severe pancreatitis (organ failure, hypocalcemia, hemoconcentration) using a validated score, and address alcohol use with counseling and thiamine/folate supplementation.",
  teaching_points: "Aggressive early fluid resuscitation is one of the most important interventions in acute pancreatitis. Early enteral feeding (as tolerated) is now favored over prolonged bowel rest, as it's associated with better outcomes and lower infection risk than total parenteral nutrition.",
});

add({
  title: "Severe Abdominal Pain Out of Proportion to Exam",
  category: "GI/Abdominal", difficulty: "Advanced",
  chief_complaint: "76F with atrial fibrillation presents with sudden severe diffuse abdominal pain.",
  history: "Known atrial fibrillation, not fully anticoagulated (missed doses). Pain is severe and constant, out of proportion to a relatively benign-appearing abdominal exam. One episode of bloody diarrhea.",
  vitals: "BP 102/64, HR 128 irregularly irregular, RR 24, Temp 37.8C",
  exam: "Abdomen is soft with only mild diffuse tenderness, no rebound or guarding — dramatically less impressive than the patient's reported pain severity.",
  workup: "Lactate markedly elevated. CT angiography of the abdomen shows a filling defect in the superior mesenteric artery consistent with acute embolic occlusion, with bowel wall thickening.",
  differential: "Acute mesenteric ischemia (embolic, from atrial fibrillation), mesenteric venous thrombosis, bowel obstruction, diverticulitis, ischemic colitis.",
  management: "Emergent vascular/general surgery consultation for possible embolectomy or bowel resection, IV fluid resuscitation, broad-spectrum antibiotics, avoid vasopressors that worsen mesenteric perfusion if possible, and correct the underlying atrial fibrillation/anticoagulation issue once acutely stabilized.",
  teaching_points: "'Pain out of proportion to exam' in a patient with atrial fibrillation or other embolic risk factors is the classic teaching point for acute mesenteric ischemia — a benign-looking abdomen with severe pain and an elevated lactate should prompt urgent CT angiography, since delayed diagnosis carries very high mortality.",
});

// ================= TOXICOLOGY =================
add({
  title: "Found Down with Pinpoint Pupils",
  category: "Toxicology", difficulty: "Beginner",
  chief_complaint: "29M found unresponsive in a gas station bathroom by a bystander who called EMS.",
  history: "No history available from patient. Paraphernalia consistent with injection drug use found nearby.",
  vitals: "BP 98/60, HR 58, RR 6, SpO2 82% RA",
  exam: "Unresponsive to voice, responds to sternal rub. Pinpoint pupils bilaterally. Track marks on both antecubital fossae. Shallow, slow respirations.",
  workup: "Point-of-care glucose normal. Fingerstick and basic labs sent. Diagnosis is primarily clinical (opioid toxidrome).",
  differential: "Opioid overdose, clonidine toxicity, organophosphate poisoning, pontine hemorrhage, sedative-hypnotic overdose.",
  management: "Support airway and breathing first — bag-valve-mask ventilation if needed. Administer naloxone (starting with a low dose like 0.4-2mg IV/IM/IN, titrating to adequate respiratory effort rather than full arousal, to avoid precipitating severe withdrawal). Reassess frequently, as naloxone's duration is shorter than many opioids, requiring repeat dosing or an infusion, and monitor for at least several hours.",
  teaching_points: "The classic opioid toxidrome triad is miosis, respiratory depression, and depressed mental status. Because naloxone has a shorter half-life than most opioids (especially long-acting or fentanyl analogs), patients need extended observation for re-sedation even after apparent reversal.",
  quiz: [{ question: "Why should naloxone be titrated carefully rather than given in a large bolus in a chronic opioid user?", options: ["It's expensive", "To avoid precipitating acute, severe opioid withdrawal", "It works better in small doses", "Large doses cause hypertension crisis"], correct_index: 1, explanation: "Rapid full reversal in an opioid-tolerant patient can precipitate abrupt, severe withdrawal — titrate to adequate ventilation, not full wakefulness." }],
});

add({
  title: "Confused Elderly Patient on Multiple Medications",
  category: "Toxicology", difficulty: "Intermediate",
  chief_complaint: "80F brought from her nursing home with acute confusion, dry skin, and a rapid heart rate.",
  history: "Recently started on a new anticholinergic medication for overactive bladder in addition to her existing medication list, per nursing home staff.",
  vitals: "BP 138/84, HR 118, RR 18, Temp 38.4C",
  exam: "Flushed, dry skin and mucous membranes, dilated pupils, urinary retention noted on bladder scan, mild agitation with picking at bedsheets.",
  workup: "ECG shows sinus tachycardia with a mildly prolonged QTc. Basic labs and urinalysis to exclude infection as a confusion mimic are unremarkable aside from the toxidrome findings.",
  differential: "Anticholinergic toxicity, serotonin syndrome, urinary tract infection with delirium, sepsis, heat stroke.",
  management: "Discontinue the offending anticholinergic agent, supportive care with IV fluids and cooling if hyperthermic, benzodiazepines for agitation, continuous cardiac monitoring for QT prolongation, and consider physostigmine in severe, refractory cases under close monitoring (with caution given cardiac conduction risks).",
  teaching_points: "'Red as a beet, dry as a bone, blind as a bat, mad as a hatter, hot as a hare, full as a flask' is the classic mnemonic for anticholinergic toxicity: flushing, dry skin, mydriasis, delirium, hyperthermia, and urinary retention. Always do a careful medication reconciliation in elderly patients with new confusion.",
});

add({
  title: "Teenager with Ringing in the Ears and Rapid Breathing",
  category: "Toxicology", difficulty: "Intermediate",
  chief_complaint: "16F brought in by parents after intentionally ingesting a bottle of aspirin tablets 3 hours ago.",
  history: "Reports tinnitus, nausea, and vomiting. Denies co-ingestion of other substances per patient, though history in intentional overdose should always be treated with caution.",
  vitals: "BP 112/70, HR 112, RR 32 (deep, rapid), Temp 38.0C",
  exam: "Tachypneic with deep respirations, tinnitus reported, mild diaphoresis, alert and oriented.",
  workup: "ABG shows a mixed respiratory alkalosis and metabolic acidosis (classic early salicylate pattern). Salicylate level markedly elevated. Glucose normal.",
  differential: "Salicylate toxicity, diabetic ketoacidosis, sepsis, other toxic ingestion (acetaminophen co-ingestion must be excluded), anxiety/panic attack.",
  management: "IV sodium bicarbonate to alkalinize the serum and urine (target urine pH ≥7.5) to enhance salicylate elimination and limit CNS penetration, aggressive IV fluids, correct hypokalemia (needed to successfully alkalinize the urine), check an acetaminophen level given common co-ingestion, and consult poison control/nephrology early for possible hemodialysis if severe (very high levels, altered mental status, renal failure, or refractory acidosis).",
  teaching_points: "Do not intubate a salicylate-toxic patient without extreme caution — their compensatory respiratory alkalosis is protective, and even brief apnea during intubation can cause acidemia to worsen dramatically, driving more salicylate into the CNS. Always check an acetaminophen level in any intentional overdose since it's commonly co-ingested and has a treatable antidote window.",
});

// ================= INFECTIOUS DISEASE =================
add({
  title: "Fever, Rash, and Neck Stiffness in a College Student",
  category: "Infectious Disease", difficulty: "Advanced",
  chief_complaint: "19M college freshman with fever, headache, and neck stiffness for 6 hours, living in a dormitory.",
  history: "Rapid onset of symptoms, roommate reports he seemed confused this morning. No recent travel. Not up to date on meningococcal vaccination.",
  vitals: "BP 92/58, HR 128, RR 24, Temp 39.8C",
  exam: "Nuchal rigidity, positive Kernig's and Brudzinski's signs, petechial rash on the trunk and extremities that does not blanch with pressure.",
  workup: "Blood cultures drawn immediately. Lumbar puncture (after ensuring no contraindication) shows cloudy CSF with elevated WBC (neutrophil predominant), elevated protein, low glucose.",
  differential: "Bacterial meningitis (likely meningococcal given the petechial rash), viral meningitis, sepsis with DIC, Rocky Mountain spotted fever.",
  management: "Do not delay antibiotics for imaging or LP — give empiric IV antibiotics (e.g., ceftriaxone plus vancomycin) and dexamethasone immediately once bacterial meningitis is suspected. Droplet isolation precautions, aggressive fluid resuscitation for septic shock, and notify public health for contact prophylaxis given concern for meningococcus.",
  teaching_points: "In suspected bacterial meningitis, antibiotics should never be delayed for LP or imaging — draw blood cultures and give antibiotics immediately, then proceed with LP if safe to do so. A non-blanching petechial or purpuric rash with fever and meningismus is a red flag for meningococcemia and warrants immediate isolation and public health notification.",
});

add({
  title: "Diabetic Foot Ulcer with Spreading Redness",
  category: "Infectious Disease", difficulty: "Intermediate",
  chief_complaint: "59M with diabetes presents with a foul-smelling foot ulcer and spreading redness up the leg.",
  history: "Poorly controlled type 2 diabetes, known peripheral neuropathy so pain sensation is diminished. Ulcer has been present for 2 weeks, worsening over the last 2 days with fevers.",
  vitals: "BP 106/64, HR 118, RR 22, Temp 39.1C",
  exam: "Deep plantar ulcer with purulent drainage, surrounding erythema extending above the ankle, palpable crepitus is absent, probe-to-bone test is positive.",
  workup: "WBC elevated, lactate mildly elevated. Plain X-ray of the foot shows periosteal reaction concerning for osteomyelitis. Wound cultures obtained.",
  differential: "Diabetic foot infection with possible osteomyelitis, cellulitis, necrotizing fasciitis, gas gangrene, deep vein thrombosis.",
  management: "Broad-spectrum IV antibiotics covering gram-positive, gram-negative, and anaerobic organisms, surgical/podiatry consultation for possible debridement, glycemic control, and further imaging (MRI) to characterize the extent of bone involvement if osteomyelitis is suspected. Assess for signs of necrotizing infection requiring emergent surgical debridement.",
  teaching_points: "A positive 'probe-to-bone' test in a diabetic foot ulcer is a strong predictor of underlying osteomyelitis. Diabetic neuropathy can mask the severity of an infection since patients may not report pain proportional to the degree of tissue involvement — always examine the wound directly rather than relying on reported pain.",
});

add({
  title: "Returning Traveler with Cyclic Fevers",
  category: "Infectious Disease", difficulty: "Intermediate",
  chief_complaint: "33F with fevers, chills, and headache 10 days after returning from a trip to sub-Saharan Africa.",
  history: "Did not take malaria prophylaxis. Fevers come in cycles with drenching sweats followed by chills. No rash. No diarrhea.",
  vitals: "BP 108/68, HR 110, RR 20, Temp 40.1C",
  exam: "Mild scleral icterus, palpable splenomegaly, no rash, no meningismus.",
  workup: "Thick and thin blood smears show intraerythrocytic ring forms consistent with Plasmodium falciparum, with parasitemia at 4%.",
  differential: "Malaria, typhoid fever, dengue fever, viral hepatitis, other travel-related febrile illness.",
  management: "Admit for treatment with an appropriate antimalarial regimen (e.g., artemisinin-based combination therapy) given falciparum species and higher risk of severe disease, monitor parasitemia levels serially, watch for signs of severe malaria (altered mental status, renal failure, severe anemia, ARDS), and involve infectious disease early.",
  teaching_points: "Always ask about travel history and prophylaxis use in any returning traveler with fever — malaria can be rapidly fatal if missed, especially P. falciparum. Thick and thin blood smears remain the diagnostic gold standard and should be repeated if initially negative but suspicion remains high.",
});

// ================= ENDOCRINE =================
add({
  title: "Fruity Breath and Altered Mental Status in a Type 1 Diabetic",
  category: "Endocrine", difficulty: "Intermediate",
  chief_complaint: "17F with type 1 diabetes brought in with vomiting, abdominal pain, and confusion.",
  history: "Ran out of insulin 2 days ago due to a pharmacy issue. Has had polyuria, polydipsia, and now nausea and vomiting for 12 hours.",
  vitals: "BP 100/62, HR 122, RR 32 (deep, Kussmaul breathing), Temp 37.0C",
  exam: "Dry mucous membranes, fruity-smelling breath, diffuse abdominal tenderness without rebound, lethargic but arousable.",
  workup: "Glucose 560 mg/dL, venous pH 7.08, bicarbonate 8, anion gap markedly elevated, serum and urine ketones strongly positive, potassium 5.8 (before insulin therapy, reflecting total body depletion despite this level).",
  differential: "Diabetic ketoacidosis, hyperosmolar hyperglycemic state, sepsis, alcoholic ketoacidosis, salicylate toxicity.",
  management: "Aggressive isotonic IV fluid resuscitation first, then IV insulin infusion (holding insulin briefly if potassium is below 3.3 until repleted), potassium repletion as levels fall with insulin therapy, frequent electrolyte and glucose monitoring, and identify and treat the precipitant (missed insulin doses here).",
  teaching_points: "Never start an insulin infusion before confirming potassium is not critically low — insulin drives potassium intracellularly and can precipitate life-threatening hypokalemia and arrhythmias. Total body potassium is often depleted in DKA even when the initial serum level looks normal or high.",
  quiz: [{ question: "Before starting an insulin infusion in DKA, what electrolyte must be checked and addressed if low?", options: ["Sodium", "Potassium", "Calcium", "Magnesium"], correct_index: 1, explanation: "Insulin shifts potassium intracellularly; starting insulin with hypokalemia (K < 3.3) can cause dangerous arrhythmias, so potassium must be repleted first." }],
});

add({
  title: "Lethargic Elderly Patient with Very High Glucose, No Ketones",
  category: "Endocrine", difficulty: "Advanced",
  chief_complaint: "78F with type 2 diabetes brought from a nursing home with progressive lethargy over 3 days.",
  history: "Recent urinary tract infection treated with antibiotics, but poor oral intake since. No vomiting reported. No known type 1 diabetes.",
  vitals: "BP 96/58, HR 110, RR 20, Temp 38.0C",
  exam: "Severely dry mucous membranes, poor skin turgor, lethargic, oriented only to person.",
  workup: "Glucose 980 mg/dL, calculated serum osmolality markedly elevated (>350), minimal ketones, venous pH 7.34 (near-normal), significant acute kidney injury on labs.",
  differential: "Hyperosmolar hyperglycemic state (HHS), DKA, sepsis-related delirium, stroke, uremic encephalopathy.",
  management: "Aggressive but carefully monitored IV fluid resuscitation (large free water deficit), gradual correction of glucose and osmolality to avoid rapid shifts causing cerebral edema, insulin infusion after initial fluid resuscitation, correct electrolytes, and treat the precipitating infection.",
  teaching_points: "HHS classically presents in older type 2 diabetics with extreme hyperglycemia, minimal ketosis, and a much larger free water deficit than DKA — correction should be more gradual to avoid rapid osmotic shifts. Always look for and treat the underlying precipitant, commonly infection.",
});

add({
  title: "Palpitations, Heat Intolerance, and Weight Loss",
  category: "Endocrine", difficulty: "Intermediate",
  chief_complaint: "36F with 3 weeks of palpitations, unintentional weight loss, and heat intolerance, now with agitation and fever after a recent dental procedure.",
  history: "Known Graves' disease, admits to being inconsistent with her methimazole. Underwent a tooth extraction 2 days ago.",
  vitals: "BP 152/70, HR 148 irregularly irregular, RR 26, Temp 39.9C",
  exam: "Diaphoretic, tremulous, agitated, exophthalmos noted, diffusely enlarged thyroid, warm moist skin.",
  workup: "TSH undetectable, free T4 and T3 markedly elevated. ECG shows atrial fibrillation with rapid ventricular response.",
  differential: "Thyroid storm precipitated by the dental procedure, sepsis, sympathomimetic toxicity, pheochromocytoma, malignant hyperthermia.",
  management: "This is thyroid storm — treat aggressively with beta-blockade (propranolol, which also blocks peripheral T4-to-T3 conversion), thionamide (propylthiouracil or methimazole) to block new hormone synthesis, iodine solution given at least an hour after the thionamide to block hormone release, corticosteroids, aggressive cooling measures, and treat the precipitant.",
  teaching_points: "The order of medications matters in thyroid storm: give the thionamide before iodine, otherwise the iodine can be used as substrate for new hormone synthesis and worsen the crisis. Thyroid storm is a clinical diagnosis (using criteria like the Burch-Wartofsky score) — don't wait for labs to return before starting treatment in a critically ill patient.",
});

// ================= OB/GYN =================
add({
  title: "Vaginal Bleeding and Abdominal Pain in Early Pregnancy",
  category: "OB/GYN", difficulty: "Advanced",
  chief_complaint: "29F, 7 weeks pregnant by LMP, with sudden severe right lower abdominal pain and vaginal spotting.",
  history: "First positive pregnancy test 2 weeks ago, no prior ultrasound confirming intrauterine location. History of prior chlamydia infection. Now with dizziness on standing.",
  vitals: "BP 90/56, HR 122, RR 20, SpO2 99%",
  exam: "Right adnexal tenderness, cervical motion tenderness, scant blood at the cervical os, pallor noted.",
  workup: "Quantitative hCG 2400 (lower than expected for gestational age). Transvaginal ultrasound shows no intrauterine pregnancy and a right adnexal mass with free fluid in the pelvis.",
  differential: "Ruptured ectopic pregnancy, threatened or incomplete miscarriage, ovarian torsion, corpus luteum cyst rupture, pelvic inflammatory disease.",
  management: "This presentation (hypotension, tachycardia, positive pregnancy test, adnexal mass, free fluid) indicates a likely ruptured ectopic pregnancy — this is a surgical emergency. Immediate OB/GYN consultation, two large-bore IVs, type and cross for blood, and expedite to the operating room; do not wait for a repeat hCG trend in an unstable patient.",
  teaching_points: "Any woman of reproductive age with abdominal pain needs a pregnancy test, and any pregnant patient with pain, bleeding, and hemodynamic instability should be treated as a ruptured ectopic until proven otherwise. A single hCG level cannot rule out ectopic pregnancy — it must be interpreted alongside ultrasound findings and clinical stability.",
});

add({
  title: "Severe Headache and Swelling Late in Pregnancy",
  category: "OB/GYN", difficulty: "Intermediate",
  chief_complaint: "32F at 34 weeks gestation with a severe headache, visual changes, and swelling of the hands and face.",
  history: "Previously normal pregnancy. Headache unresponsive to acetaminophen, describes seeing 'spots.' No prior hypertension.",
  vitals: "BP 172/114, HR 92, RR 18, SpO2 98%",
  exam: "Facial and hand edema, hyperreflexia with 3+ patellar reflexes and 2 beats of clonus, right upper quadrant tenderness.",
  workup: "Urinalysis shows significant proteinuria. Labs show mildly elevated liver enzymes and a low-normal platelet count, raising concern for evolving HELLP syndrome.",
  differential: "Preeclampsia with severe features, HELLP syndrome, eclampsia risk, chronic hypertension, primary headache disorder.",
  management: "IV magnesium sulfate for seizure prophylaxis, antihypertensive therapy (labetalol or hydralazine) to control severe range blood pressure, urgent OB consultation for consideration of delivery given severe features, continuous fetal monitoring, and monitor for progression to eclampsia or HELLP.",
  teaching_points: "New headache, visual changes, hyperreflexia, and hypertension in later pregnancy should immediately raise concern for preeclampsia with severe features — magnesium sulfate is for seizure prophylaxis, not blood pressure control, and antihypertensives are used separately to manage severe hypertension.",
});

add({
  title: "Postpartum Hemorrhage in the Emergency Department",
  category: "OB/GYN", difficulty: "Advanced",
  chief_complaint: "27F, 5 days postpartum, presents with heavy vaginal bleeding and lightheadedness.",
  history: "Vaginal delivery 5 days ago, discharged home without complications. Reports soaking through multiple pads per hour for the last 2 hours, with passage of clots.",
  vitals: "BP 88/54, HR 128, RR 22, SpO2 98%",
  exam: "Pale, boggy uterine fundus palpable above the umbilicus, active bleeding from the cervical os, no obvious lacerations on brief exam.",
  workup: "Hemoglobin significantly lower than a documented postpartum baseline. Bedside ultrasound suggests retained products of conception.",
  differential: "Secondary postpartum hemorrhage due to retained products of conception, uterine atony, endometritis, coagulopathy, uterine subinvolution.",
  management: "IV access with two large-bore lines, fluid and blood product resuscitation as needed, uterotonic agents (oxytocin first-line, with methylergonovine or misoprostol as alternatives depending on contraindications), bimanual uterine massage, urgent OB/GYN consultation for possible dilation and curettage if retained products are confirmed.",
  teaching_points: "Postpartum hemorrhage can present late (secondary PPH, defined as 24 hours to 12 weeks postpartum) and is often due to retained products, infection, or subinvolution of the placental site, distinct from the more familiar early atony-driven hemorrhage. A boggy uterus on exam should immediately prompt uterine massage and uterotonics while arranging definitive management.",
});

// ================= PSYCHIATRIC =================
add({
  title: "Agitated Patient Requesting to Leave Against Medical Advice",
  category: "Psychiatric", difficulty: "Beginner",
  chief_complaint: "26M brought in by police after being found on a bridge ledge, now demanding to leave.",
  history: "Recent job loss and breakup, reports passive and active suicidal ideation with a plan to jump, admits to feeling hopeless. Denies substance use, though this should be verified.",
  vitals: "BP 128/80, HR 92, RR 18, Temp 37.0C",
  exam: "Tearful, psychomotor agitation, no acute intoxication signs, no injuries noted.",
  workup: "Basic labs and a point-of-care glucose to exclude a medical cause of altered behavior, urine toxicology to screen for contributing substances.",
  differential: "Major depressive episode with suicidal ideation, substance-induced mood disorder, acute stress reaction, underlying psychotic disorder.",
  management: "This patient lacks capacity to safely leave given imminent risk to himself; use the least restrictive means necessary (verbal de-escalation first) but pursue an involuntary psychiatric hold per your jurisdiction's laws if he attempts to elope, arrange one-to-one observation, remove access to any means of self-harm, and obtain emergency psychiatric evaluation.",
  teaching_points: "A patient with active suicidal ideation and a specific plan does not have the capacity to refuse care and leave against medical advice — safety takes precedence, and involuntary hold criteria (which vary by jurisdiction) should be applied. Always rule out an organic/medical cause of altered behavior before attributing symptoms solely to a primary psychiatric diagnosis.",
});

add({
  title: "New-Onset Psychosis in a College Student",
  category: "Psychiatric", difficulty: "Intermediate",
  chief_complaint: "20F brought in by roommates for bizarre behavior, paranoia, and disorganized speech over the past week.",
  history: "No prior psychiatric history. Roommates report she has not been sleeping and believes her phone is being tapped by the government. Denies drug use, though this needs objective verification.",
  vitals: "BP 118/74, HR 88, RR 16, Temp 37.2C",
  exam: "Disorganized speech, internally preoccupied at times, no focal neurologic deficits, no nuchal rigidity.",
  workup: "Urine toxicology, basic metabolic panel, TSH, and a head CT are obtained to exclude organic causes before attributing this to a primary psychiatric disorder; all return unremarkable except a positive amphetamine screen.",
  differential: "Substance-induced psychosis (stimulant use), first-episode primary psychotic disorder, autoimmune encephalitis, thyroid dysfunction, CNS infection.",
  management: "Provide a calm, low-stimulation environment, consider a short-acting antipsychotic or benzodiazepine for acute agitation if needed, psychiatric consultation for further evaluation, and arrange close follow-up since new-onset psychosis (even if substance-associated) warrants ongoing psychiatric monitoring as some cases evolve into primary psychotic disorders.",
  teaching_points: "New-onset psychosis always warrants a medical workup to exclude organic causes (infection, autoimmune, endocrine, structural, toxic) before assuming a primary psychiatric diagnosis — this is especially true for first presentations, atypical age of onset, or the presence of any focal neurologic findings.",
});

// ================= PEDIATRICS =================
add({
  title: "Barky Cough and Stridor in a Toddler",
  category: "Pediatrics", difficulty: "Beginner",
  chief_complaint: "2-year-old boy with a barky, seal-like cough and noisy breathing for 2 days, worse at night.",
  history: "Preceding runny nose and low-grade fever for 2 days. No choking episode reported. Fully vaccinated per parents.",
  vitals: "HR 128, RR 32, SpO2 96% RA, Temp 38.2C",
  exam: "Barky cough, mild inspiratory stridor at rest, mild suprasternal retractions, playful and consolable, no drooling.",
  workup: "Diagnosis is clinical; a neck X-ray, if obtained, may show the classic 'steeple sign' from subglottic narrowing, though imaging is not routinely required for a typical presentation.",
  differential: "Croup (laryngotracheobronchitis), foreign body aspiration, epiglottitis, bacterial tracheitis, peritonsillar abscess.",
  management: "Give a single dose of oral dexamethasone regardless of severity, nebulized racemic epinephrine for moderate-to-severe stridor at rest with reassessment after (watching for 'rebound' as the epinephrine wears off before considering discharge), and supportive care with hydration and antipyretics.",
  teaching_points: "The 'steeple sign' on neck X-ray supports but is not required to diagnose croup — this remains a clinical diagnosis. Children given racemic epinephrine should be observed for at least 2-3 hours afterward to ensure symptoms don't rebound as the medication wears off before safe discharge.",
});

add({
  title: "Infant with Bilious Vomiting",
  category: "Pediatrics", difficulty: "Advanced",
  chief_complaint: "3-week-old boy with bilious (green) vomiting and a distended abdomen for several hours.",
  history: "Previously feeding well. Sudden onset of forceful, green-tinged vomiting. Parents note he seems increasingly fussy and is passing less stool.",
  vitals: "HR 168, RR 44, SpO2 97%, Temp 36.5C",
  exam: "Abdomen distended and tender, infant appears ill and lethargic between episodes of crying, poor capillary refill.",
  workup: "Upper GI contrast study shows an abnormal 'corkscrew' appearance of the duodenum and proximal jejunum, consistent with midgut volvulus from malrotation.",
  differential: "Malrotation with midgut volvulus, intestinal atresia, necrotizing enterocolitis, pyloric stenosis (though vomiting there is typically non-bilious), Hirschsprung disease.",
  management: "Bilious vomiting in an infant is a surgical emergency until proven otherwise — obtain immediate pediatric surgery consultation, NPO status, nasogastric decompression, IV fluid resuscitation, and expedite to the operating room for a Ladd procedure if volvulus is confirmed, since bowel ischemia can progress rapidly.",
  teaching_points: "Bilious vomiting in a neonate or young infant should be treated as malrotation with volvulus until proven otherwise, because a delay in diagnosis can lead to catastrophic bowel necrosis within hours. Non-bilious, projectile vomiting in an infant is more classically associated with pyloric stenosis, a different and less acutely emergent entity.",
  quiz: [{ question: "Bilious vomiting in a neonate should prompt immediate concern for which diagnosis?", options: ["Pyloric stenosis", "Malrotation with midgut volvulus", "Gastroesophageal reflux", "Formula intolerance"], correct_index: 1, explanation: "Bilious vomiting is a surgical emergency sign suggesting volvulus until proven otherwise, given the risk of rapid bowel ischemia." }],
});

add({
  title: "High Fever and Rash in an Unvaccinated Child",
  category: "Pediatrics", difficulty: "Intermediate",
  chief_complaint: "4-year-old unvaccinated girl with high fever for 4 days followed by a new rash.",
  history: "Fever up to 40C for several days, associated with cough, red watery eyes, and runny nose. Rash started on the face and is spreading downward. Recent international travel with family.",
  vitals: "HR 130, RR 26, SpO2 97%, Temp 39.8C",
  exam: "Maculopapular rash beginning on the face and spreading to the trunk, bilateral conjunctival injection, small white lesions with a bluish-white center on the buccal mucosa (Koplik spots).",
  workup: "Diagnosis is largely clinical given the classic triad (cough, coryza, conjunctivitis) plus Koplik spots and the characteristic rash pattern; measles-specific IgM/PCR sent and public health notified given the reportable nature of the disease.",
  differential: "Measles, rubella, roseola, scarlet fever, drug reaction, Kawasaki disease.",
  management: "Immediate airborne isolation precautions, supportive care (antipyretics, hydration), vitamin A administration per WHO/CDC guidance which has been shown to reduce morbidity and mortality, and urgent public health notification for contact tracing and post-exposure prophylaxis of susceptible contacts.",
  teaching_points: "Koplik spots are pathognomonic for measles and typically appear 1-2 days before the rash. Measles is highly contagious via airborne transmission, so isolation and public health notification are critical, especially in unvaccinated populations or during outbreaks.",
});

// ================= ORTHOPEDICS =================
add({
  title: "Deformed, Painful Ankle After a Fall",
  category: "Orthopedics", difficulty: "Beginner",
  chief_complaint: "45M with an obviously deformed right ankle after missing a step and falling down stairs.",
  history: "Immediate severe pain and inability to bear weight. No other injuries reported. No numbness initially, though this should be reassessed frequently.",
  vitals: "BP 138/84, HR 98 (pain-related), RR 18, SpO2 99%",
  exam: "Gross deformity of the ankle with the foot displaced laterally, skin appears tented and pale over the medial malleolus, distal pulses are diminished compared to the other foot.",
  workup: "Given vascular compromise (tented, pale skin and diminished pulses), immediate reduction should not wait for X-ray confirmation. Post-reduction X-rays confirm a trimalleolar ankle fracture-dislocation.",
  differential: "Ankle fracture-dislocation with vascular compromise, isolated ligamentous injury, compartment syndrome, open fracture.",
  management: "This is a limb-threatening emergency — perform immediate closed reduction in the ED to relieve pressure on the skin and neurovascular structures before formal imaging if there is any sign of vascular compromise or skin tenting, then splint, reassess pulses and neuro status, obtain post-reduction imaging, and urgent orthopedic consultation for likely operative fixation.",
  teaching_points: "A dislocated or grossly deformed joint with vascular compromise or skin tenting should be reduced immediately in the ED — don't wait for X-ray confirmation when the neurovascular status or skin viability is at risk. Always document a neurovascular exam before and after any reduction.",
});

add({
  title: "Tense, Painful Calf After a Tibia Fracture",
  category: "Orthopedics", difficulty: "Advanced",
  chief_complaint: "19M with a closed tibia/fibula fracture from a motorcycle accident, now with escalating leg pain despite adequate analgesia.",
  history: "Fracture was splinted 3 hours ago. Pain has progressively worsened and now feels 'out of proportion' to the injury, unrelieved by increasing doses of opioids.",
  vitals: "BP 138/86, HR 118, RR 20, SpO2 98%",
  exam: "Leg is tense and swollen, exquisite pain with passive dorsiflexion of the toes, diminished sensation in the first web space, pulses still palpable (a late and unreliable finding).",
  workup: "This is a clinical diagnosis; if available and the diagnosis is unclear, compartment pressure measurement can be performed, but a classic clinical picture should not wait for pressure readings if suspicion is high, since intact distal pulses do not rule out compartment syndrome.",
  differential: "Acute compartment syndrome, deep vein thrombosis, worsening fracture displacement, infection (too early typically), nerve injury from the initial trauma.",
  management: "This is a surgical emergency — urgent orthopedic consultation for emergent fasciotomy. Loosen or remove any constrictive splinting/dressings while awaiting surgery, keep the limb at heart level (not elevated above, which can worsen perfusion pressure), and avoid further opioid escalation as a substitute for definitive treatment.",
  teaching_points: "The 5 P's (pain out of proportion, pallor, paresthesia, pulselessness, paralysis) are classically taught, but pain out of proportion to injury and pain with passive stretch are the earliest and most reliable findings — pulselessness is a very late sign, and waiting for it to appear risks irreversible muscle and nerve damage.",
});

add({
  title: "Fall on an Outstretched Hand with Wrist Pain",
  category: "Orthopedics", difficulty: "Beginner",
  chief_complaint: "62F with wrist pain and deformity after slipping on ice and falling onto an outstretched hand.",
  history: "Immediate pain and swelling at the wrist. Known osteoporosis, postmenopausal, not on treatment.",
  vitals: "BP 132/78, HR 84, RR 16, SpO2 99%",
  exam: "'Dinner fork' deformity of the distal wrist, tenderness and swelling over the distal radius, intact median nerve sensation, capillary refill normal.",
  workup: "Wrist X-ray shows a dorsally displaced and angulated distal radius fracture (Colles' fracture).",
  differential: "Colles' fracture (distal radius), scaphoid fracture, distal radioulnar joint injury, carpal dislocation.",
  management: "Closed reduction under hematoma block or procedural sedation, splinting in a sugar-tong or similar splint, post-reduction imaging and neurovascular check, orthopedic follow-up for definitive casting or possible surgical fixation depending on stability and displacement, and screen for osteoporosis given the fragility fracture pattern.",
  teaching_points: "A fragility fracture from a low-energy mechanism (like a same-level fall) in a postmenopausal woman should prompt osteoporosis screening and treatment discussion, since it often signals underlying bone fragility and increased future fracture risk. Always check median nerve function (sensation in the index finger, thumb opposition) given its proximity to distal radius fractures.",
});

// ================= ENVIRONMENTAL =================
add({
  title: "Construction Worker Collapses in Summer Heat",
  category: "Environmental", difficulty: "Intermediate",
  chief_complaint: "38M construction worker found confused and stumbling on a 105F day, brought in by coworkers.",
  history: "Working outdoors for 6 hours with limited water breaks. Coworkers say he stopped sweating and became confused about 20 minutes before collapsing.",
  vitals: "BP 92/58, HR 138, RR 28, Temp 41.2C (rectal), SpO2 96%",
  exam: "Hot, dry skin, confused and combative, no localizing neurologic deficits, no meningismus.",
  workup: "Basic labs sent for electrolytes, renal function (assessing for rhabdomyolysis and AKI), and creatine kinase; core temperature measurement rectally is essential since peripheral measurements are unreliable at these extremes.",
  differential: "Classic/exertional heat stroke, sepsis, thyroid storm, sympathomimetic toxicity, serotonin syndrome, malignant hyperthermia.",
  management: "Rapid cooling is the top priority — ice water immersion is the most effective method, or evaporative cooling with misting and fanning if immersion isn't feasible, with a goal of reducing core temperature below 39C as quickly as possible. IV fluids for hypotension, monitor for rhabdomyolysis and organ dysfunction, and avoid antipyretics (they don't work for heat stroke's mechanism and can worsen coagulopathy/liver injury).",
  teaching_points: "In heat stroke, the priority is aggressive, immediate cooling — 'cool first, transport second' when feasible, since the duration of hyperthermia correlates directly with mortality and organ damage. Antipyretics like acetaminophen are ineffective in heat stroke because the hypothalamic set point isn't the problem, and they can add hepatotoxic risk to an already stressed liver.",
});

add({
  title: "Hiker Found Shivering and Confused",
  category: "Environmental", difficulty: "Intermediate",
  chief_complaint: "55M hiker found by rescuers after being lost overnight in cold, wet conditions.",
  history: "Was hiking alone, became lost as temperatures dropped overnight with rain. Found shivering initially, now appears to have stopped shivering and is confused.",
  vitals: "BP 88/56, HR 48, RR 10, Temp 29.8C (core), SpO2 90%",
  exam: "Confused, slurred speech, muscle rigidity, bradycardic with an irregular rhythm.",
  workup: "ECG shows bradycardia with Osborn (J) waves. Core temperature confirms moderate-to-severe hypothermia. Glucose and electrolytes checked.",
  differential: "Accidental hypothermia, hypoglycemia, sepsis with cold exposure, hypothyroid myxedema coma, alcohol intoxication contributing to exposure.",
  management: "Handle the patient gently to avoid precipitating ventricular fibrillation (a risk with rough handling in moderate-severe hypothermia), remove wet clothing, passive and active external rewarming for moderate hypothermia, active internal rewarming (warmed IV fluids, warm humidified oxygen) for more severe cases, continuous cardiac monitoring, and be aware that resuscitation efforts should continue longer than usual since hypothermic patients can survive prolonged arrests ('not dead until warm and dead').",
  teaching_points: "Gentle handling is critical in moderate-to-severe hypothermia because a cold, irritable myocardium can fibrillate with rough movement or even intubation attempts. The teaching phrase 'no one is dead until they are warm and dead' reflects the neuroprotective effect of hypothermia and the need for extended resuscitation efforts in hypothermic cardiac arrest.",
});

add({
  title: "Beach Sting with Immediate Severe Pain",
  category: "Environmental", difficulty: "Beginner",
  chief_complaint: "24F with severe burning pain and visible tentacle marks on her leg after swimming in the ocean.",
  history: "Felt sudden sharp, burning pain while swimming, came out of the water and noticed linear whip-like red marks on her calf.",
  vitals: "BP 128/78, HR 102 (pain-related), RR 18, SpO2 99%",
  exam: "Linear, erythematous, whip-like lesions across the lateral calf, no signs of anaphylaxis (no urticaria elsewhere, no wheezing, airway is patent).",
  workup: "Diagnosis is clinical based on the characteristic appearance and history of ocean exposure; monitor closely for any signs of systemic/anaphylactic reaction.",
  differential: "Jellyfish envenomation, contact dermatitis, other marine envenomation, cellulitis.",
  management: "Rinse the area with vinegar (acetic acid) for many jellyfish species to inactivate remaining nematocysts (avoid fresh water, which can trigger further discharge), carefully remove any visible tentacle fragments without direct bare-hand contact, immerse in hot water (as tolerated, roughly 45C) for pain relief, and monitor for delayed hypersensitivity reactions or systemic symptoms.",
  teaching_points: "Fresh water and vigorous rubbing can trigger further nematocyst discharge in many jellyfish stings and should be avoided — vinegar and hot water immersion are generally preferred first-aid measures, though the exact recommended treatment can vary somewhat depending on the specific jellyfish species involved in a given region.",
});

// ================= DERMATOLOGY =================
add({
  title: "Widespread Skin Sloughing After Starting a New Medication",
  category: "Dermatology", difficulty: "Advanced",
  chief_complaint: "45M with fever and a painful, spreading rash with skin peeling, 10 days after starting a new anticonvulsant.",
  history: "Started on a new antiepileptic medication about 10 days ago for a first seizure. Developed flu-like symptoms 2 days ago followed by a painful rash that is now blistering and sloughing.",
  vitals: "BP 100/62, HR 122, RR 22, Temp 38.9C",
  exam: "Widespread erythematous and dusky macules coalescing into blisters, positive Nikolsky sign (skin sloughs with lateral pressure), mucosal involvement of the lips and conjunctivae, affecting roughly 15% of body surface area.",
  workup: "Clinical diagnosis supported by skin biopsy showing full-thickness epidermal necrosis; body surface area involved is calculated to help distinguish Stevens-Johnson syndrome (<10%), SJS/TEN overlap (10-30%), and toxic epidermal necrolysis (>30%).",
  differential: "Stevens-Johnson syndrome/toxic epidermal necrolysis (SJS/TEN) from the anticonvulsant, staphylococcal scalded skin syndrome, severe erythema multiforme, autoimmune bullous disease.",
  management: "Immediately discontinue the offending medication, transfer to a burn unit or ICU for specialized wound and fluid management similar to burn care, aggressive fluid and electrolyte management, meticulous wound care, ophthalmology consultation for ocular involvement, and avoid re-exposure to the culprit drug class in the future with clear documentation of the allergy.",
  teaching_points: "SJS/TEN is a medication-induced emergency where the single most important intervention is immediate discontinuation of the offending drug — delay is associated with worse outcomes. A positive Nikolsky sign (epidermis sloughs with gentle lateral pressure) helps distinguish these severe blistering disorders from simpler rashes.",
});

add({
  title: "Rapidly Spreading Red, Swollen Leg with Fever",
  category: "Dermatology", difficulty: "Intermediate",
  chief_complaint: "54M with a rapidly enlarging area of redness, warmth, and swelling on his lower leg with fever.",
  history: "Noticed a small scratch from gardening 2 days ago, now with rapidly spreading redness up the leg overnight along with chills and feeling generally unwell.",
  vitals: "BP 118/72, HR 108, RR 18, Temp 38.6C",
  exam: "Well-demarcated, warm, erythematous, edematous area on the lower leg extending from the ankle toward the knee, tender to palpation, no crepitus or bullae, no evidence of abscess.",
  workup: "Marked border with rapid progression noted; the leg is marked with a pen to track spread. WBC mildly elevated. Blood cultures obtained given fever, though cellulitis is typically a clinical diagnosis.",
  differential: "Cellulitis (likely streptococcal or staphylococcal), necrotizing fasciitis, deep vein thrombosis, contact dermatitis, erysipelas.",
  management: "Empiric antibiotics covering typical skin flora (streptococci and staphylococci, with MRSA coverage added if risk factors are present), mark the borders of erythema to monitor for progression, elevate the extremity, and reassess closely for any signs suggesting a more severe process (worsening pain out of proportion, bullae, crepitus, or systemic toxicity) that would prompt urgent surgical evaluation for necrotizing fasciitis.",
  teaching_points: "Marking the borders of cellulitis at the initial visit is a simple, useful way to objectively track whether antibiotics are working on reassessment. Rapidly progressive pain out of proportion to exam findings, bullae, crepitus, or hemodynamic instability should raise immediate concern for necrotizing fasciitis, a surgical emergency distinct from simple cellulitis.",
});

// ================= RENAL / GU =================
add({
  title: "Excruciating Flank Pain That Comes in Waves",
  category: "Renal/GU", difficulty: "Beginner",
  chief_complaint: "42M with sudden severe left flank pain radiating to the groin, coming in waves, with associated nausea.",
  history: "Pain started abruptly an hour ago, described as 10/10, patient is writhing and unable to find a comfortable position. History of prior kidney stones.",
  vitals: "BP 148/88, HR 108, RR 20, Temp 37.0C",
  exam: "Marked left costovertebral angle tenderness, patient is restless and unable to sit still, abdomen soft without peritoneal signs.",
  workup: "Urinalysis shows microscopic hematuria. Non-contrast CT of the abdomen/pelvis shows a 6mm stone at the left ureterovesical junction with mild hydronephrosis.",
  differential: "Nephrolithiasis (ureteral colic), pyelonephritis, ruptured abdominal aortic aneurysm (important mimic, especially in older patients), ovarian torsion, appendicitis (if right-sided).",
  management: "Aggressive analgesia (NSAIDs are particularly effective for renal colic in addition to or instead of opioids if not contraindicated), antiemetics, IV fluids for hydration, and since this stone is small (<10mm) without signs of infection or obstruction causing renal compromise, outpatient management with strainer for stone catching and urology follow-up is reasonable; larger stones or signs of infection/obstruction warrant urologic intervention.",
  teaching_points: "A patient who is restless and writhing (unable to find a comfortable position) is a classic distinguishing feature of renal colic, compared to the still, guarded posture typical of peritonitis. Always consider and rule out a leaking or ruptured AAA as a mimic of renal colic in older patients with vascular risk factors, since misdiagnosis can be fatal.",
});

add({
  title: "Flank Pain, Fever, and Foul-Smelling Urine",
  category: "Renal/GU", difficulty: "Intermediate",
  chief_complaint: "27F with fever, chills, and right flank pain for 2 days, with dysuria and urinary frequency preceding it.",
  history: "Started with typical urinary tract infection symptoms (dysuria, frequency) 3 days ago, now progressed to fever and flank pain. No known kidney stones. Not pregnant per urine hCG.",
  vitals: "BP 108/66, HR 116, RR 20, Temp 39.3C",
  exam: "Right costovertebral angle tenderness, mild suprapubic tenderness, ill-appearing but hemodynamically stable.",
  workup: "Urinalysis shows pyuria, bacteriuria, and leukocyte esterase/nitrites positive. Urine culture sent. WBC elevated. Renal function normal.",
  differential: "Acute pyelonephritis, nephrolithiasis with superimposed infection, pelvic inflammatory disease, appendicitis, ovarian pathology.",
  management: "For uncomplicated pyelonephritis in a hemodynamically stable patient who can tolerate oral intake, outpatient oral antibiotics with close follow-up may be appropriate; for more severe presentations, ill appearance, inability to tolerate oral intake, or signs of sepsis, admit for IV antibiotics and fluids, and consider imaging to exclude an obstructing stone if pain is severe or she fails to improve, since an obstructed, infected kidney requires urgent decompression.",
  teaching_points: "Pyelonephritis with an obstructing stone (infected obstructed kidney) is a urologic emergency requiring urgent decompression (via stent or nephrostomy tube) in addition to antibiotics — always consider imaging if a patient with suspected pyelonephritis doesn't improve as expected or has severe pain, since untreated obstruction with infection can rapidly progress to sepsis.",
});

add({
  title: "Elderly Man Unable to Urinate for 12 Hours",
  category: "Renal/GU", difficulty: "Beginner",
  chief_complaint: "74M with lower abdominal pain and inability to urinate for the past 12 hours.",
  history: "History of benign prostatic hyperplasia, recently started an over-the-counter cold medication containing a decongestant. Reports a weak stream and straining over recent months prior to today's complete inability to void.",
  vitals: "BP 142/84, HR 96, RR 16, Temp 37.0C",
  exam: "Palpable, tender suprapubic mass consistent with a distended bladder, no costovertebral angle tenderness, prostate is enlarged and smooth on exam.",
  workup: "Bladder scan confirms significant urinary retention. Renal function checked to assess for any obstructive nephropathy from chronic outflow issues.",
  differential: "Acute urinary retention due to BPH, decongestant-precipitated retention, urethral stricture, neurogenic bladder, prostate cancer.",
  management: "Immediate bladder decompression via urethral (or suprapubic if urethral catheterization fails) catheter placement, monitor for post-obstructive diuresis after decompression, discontinue the offending decongestant, and arrange urology follow-up for further management of his underlying BPH, potentially including alpha-blocker therapy.",
  teaching_points: "Alpha-adrenergic decongestants can precipitate acute urinary retention in men with underlying BPH by increasing bladder outlet resistance — always ask about new over-the-counter medications in this presentation. After relieving a large-volume retention, watch for post-obstructive diuresis (a brisk, sometimes profound urine output) which can cause dehydration and electrolyte disturbances if unmonitored.",
});


module.exports = { CASES, add };
