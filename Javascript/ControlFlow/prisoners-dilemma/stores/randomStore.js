var randomStore = {
	cooperateCount: 0,
	defectCount: 0,
	history: [],
	move: function(moveNumber, oppHistory, oppCoopCount, oppDefectCount) {return Math.random() < 0.5 ? 'cooperate' : 'defect';},
	name: 'Random Store',
	revenue: 0
};