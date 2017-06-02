var cooperateStore = {
	cooperateCount: 0,
	defectCount: 0,
	history: [],
	move: function(moveNumber, oppHistory, oppCoopCount, oppDefectCount) {return 'cooperate';},
	name: 'Cooperate Store',
	revenue: 0
};