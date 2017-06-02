var zachStore = {
	cooperateCount: 0,
	defectCount: 0,
	history: [],
	move: move,
	name: 'Zach Store',
	revenue: 0
};

function move(moveNumber, oppHistory, oppCoopCount, oppDefectCount) {
	if(oppHistory.length > 0) 
		return oppHistory[oppHistory.length - 1];
	return Math.random() < 0.5 ? 'cooperate' : 'defect';
}