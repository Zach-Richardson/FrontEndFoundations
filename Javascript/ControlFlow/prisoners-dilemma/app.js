function run() {
	$('#content').empty();
	$('#content').append('<div id="loader"></div>');
	setTimeout(function() {
		$('#content').empty();
		$('#content').append('<h1 class="text" id="winner"></h1>');
		$('#content').append('<table class="table table-striped table-hover"><thead id="stores-header-row"></thead><tbody id="stores"></tbody></table>');
		
		var stores = [jnStore, zachStore];		
		for(var i=0; i<stores.length; i++) {			
			stores[i].cooperateCount = 0;
			stores[i].defectCount = 0;
			stores[i].revenue = 0;
		}		
		
		simulate(stores);
		stores = _.sortBy(stores, function(store) {return store.revenue * -1;});

		for(var i=0; i<stores.length; i++) {
			var averageRevenue = stores[i].revenue/(100*(stores.length-1));
			var coopPercent = stores[i].cooperateCount/(100*(stores.length-1));
			var defectPercent = stores[i].defectCount/(100*(stores.length-1));
			$('#stores').append('<tr><td width="50%">'+stores[i].name+'</td><td width="20%">$'+averageRevenue.toFixed()+'</td><td>'+coopPercent.toFixed(1)+'</td><td>'+defectPercent.toFixed(1)+'</td></tr>')
		}

		$('#stores-header-row').append('<tr><th width="50%">Store</th><th width="20%">Revenue</th><th>Cooperate Percent</th><th>Defect Percent</th></tr>');
		$('#winner').append("Winner: "+stores[0].name);
		$('#winner').append('<button class="btn btn-primary pull-right" onclick="run()">Run</button>');
	}, 3000);
}

function simulate(stores) {
	for(k=1; k<=100; k++) {
		for(var i=0; i<stores.length; i++) {
			for(var j=i+1; j<stores.length; j++) {
				var storeOne = stores[i];
				var storeTwo = stores[j];
				for(var x=1; x<101; x++) {
					var moveOne = storeOne.move(x, storeTwo.history, storeTwo.cooperateCount, storeTwo.defectCount);
					if(moveOne === 'cooperate') storeOne.cooperateCount += 1;
					else storeOne.defectCount += 1;

					var moveTwo = storeTwo.move(x, storeOne.history, storeOne.cooperateCount, storeTwo.defectCount);
					if(moveTwo === 'cooperate') storeTwo.cooperateCount += 1;
					else storeTwo.defectCount += 1;

					storeOne.history.push(moveOne);
					storeTwo.history.push(moveTwo);

					revenues = calculateRevenue(moveOne, moveTwo);

					storeOne.revenue += revenues[0];
					storeTwo.revenue += revenues[1];
				}
			}
		}
	}
}

function calculateRevenue(moveOne, moveTwo) {
	if(moveOne === 'cooperate') {
		if(moveTwo === 'cooperate')
			return [10000, 10000];
		else
			return [6000, 8000];
	} else {
		if(moveTwo === 'cooperate')
			return [8000, 6000]
		else
			return [8000, 8000];
	}
}