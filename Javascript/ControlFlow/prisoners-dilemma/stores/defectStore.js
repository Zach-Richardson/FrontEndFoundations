var defectStore = {
	cooperateCount: 0,
	defectCount: 0,
	history: [],
	move: function(moveNumber, oppHistory, oppCoopCount, oppDefectCount) {return 'defect';},
	name: 'Defect Store',
	revenue: 0
};