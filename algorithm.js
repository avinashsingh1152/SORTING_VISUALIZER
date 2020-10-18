// All algorithm are in Js file for Better understanding
		function codeAddress() {
			for(var i = 0; i < 10; i++) {
			  	arr[i] = Math.floor((Math.random() * 400) + 1);
			  	document.getElementById("p"+i).style.height=arr[i]+"px";
			  	document.getElementById("p"+i).style.display="block";
			  	document.getElementById("p"+i).style.width=100/10+"%";
		 	}
        }
        window.onload = codeAddress;
		var number = 10;
		var timing = 100;
		var arr = [];

		//==================speed slider ==================
		var speedslider = document.getElementById("speedRange");
		speedslider.oninput = function() { 
		  timing = this.value * 100;
		}
		//=================slider for div selection =======================
		var rangeslider = document.getElementById("sliderRange"); 
		var output = document.getElementById("dispval"); 
		output.innerHTML = rangeslider.value; 
		rangeslider.oninput = function() { 
		  output.innerHTML = this.value; 
		  number = this.value;
		  for(var i = 0; i < number; i++) {
		  	arr[i] = Math.floor((Math.random() * 400) + 10);
		  	document.getElementById("p"+i).style.height=arr[i]+"px";
		  	document.getElementById("p"+i).style.display="block";
		  	document.getElementById("p"+i).style.width=100/number+"%";
		  }
		  for(var i = number; i < 100; i++){
		  	if(document.getElementById("p"+i).style.display === "block")
		  		document.getElementById("p"+i).style.display="none";
		  }
		}
		function timer(ms) {
			return new Promise(res => setTimeout(res, ms));
		}
		//==================stoping click action while sorting===============
		function stopclick(action) {
			document.getElementById("sliderRange").disabled = action;
			document.getElementById("Heap").disabled = action;
			document.getElementById("Merge").disabled = action;
			document.getElementById("Bubble").disabled = action;
			document.getElementById("Quick").disabled = action;
			document.getElementById("Selection").disabled = action;
			document.getElementById("Insertion").disabled = action;
			if(action) {
				document.getElementById("sliderRange").style.cursor = "not-allowed";
				document.getElementById("Heap").style.cursor = "not-allowed";
				document.getElementById("Merge").style.cursor = "not-allowed";
				document.getElementById("Bubble").style.cursor = "not-allowed";
				document.getElementById("Quick").style.cursor = "not-allowed";
				document.getElementById("Selection").style.cursor = "not-allowed";
				document.getElementById("Insertion").style.cursor = "not-allowed";
			}
			else {
				document.getElementById("sliderRange").style.cursor = "pointer";
				document.getElementById("Heap").style.cursor = "pointer";
				document.getElementById("Merge").style.cursor = "pointer";
				document.getElementById("Bubble").style.cursor = "pointer";
				document.getElementById("Quick").style.cursor = "pointer";
				document.getElementById("Selection").style.cursor = "pointer";
				document.getElementById("Insertion").style.cursor = "pointer";
			}
		}
		//=============== color style for giving all div original color========
		async function colorstyle() {
			await timer(timing);
			document.getElementById("p"+0).style.backgroundColor="Green";
			for(var i = 0; i < number; i++)
				document.getElementById("p"+i).style.backgroundColor = "#3134EA";
			await timer(timing);
			stopclick(false);
			for(var i = 0; i < 50; i++)
				document.getElementById("p"+i).style.backgroundColor = "#E1B6F7";
		}
		//----------------display last color after sorting =========
		async function startcolor() {
			for(var i = 0; i < number; i++)
				document.getElementById("p"+i).style.backgroundColor = "#E1B6F7";
		}
		//======================== SORTING ==========================
		//------------------------Merge Sort ------------------------
		async function mergeSort(arr, low, high) { 
		    if (low < high) {
		        var mid = low + Math.floor((high-low) / 2); 
		        await mergeSort(arr, low, mid); 
		        await mergeSort(arr, mid + 1, high);
		       	await Merge(arr, low, mid, high);
		    }
		        
		} 

		async function Merge(arr, low, mid, high) {
		    var ptr1 = low, ptr2 = mid + 1, i, idx = low; 
		    while(idx <= high &&  ptr2 <= high) {
		    	// await selectElements(divArr, ptr1, ptr2);
		    	document.getElementById("p"+ptr1).style.backgroundColor = "yellow";
		    	document.getElementById("p"+ptr2).style.backgroundColor = "yellow";
		    	await timer(timing);
		    	document.getElementById("p"+ptr1).style.backgroundColor = "#E1B6F7";
		    	document.getElementById("p"+ptr2).style.backgroundColor = "#E1B6F7";
		    	await timer(timing);
		    	if(ptr1 < ptr2 &&arr[ptr2]< arr[ptr1]) {
		    		for(var j = ptr2 - 1; j >= ptr1; --j){
		    			var temp = arr[j];
		    			arr[j] = arr[j+1];
		    			arr[j+1] = temp;
		    			document.getElementById("p"+j).style.height = arr[j]+"px";
		    			document.getElementById("p"+(j+1)).style.height = arr[j+1]+"px";
		    		}
		    		document.getElementById("p"+idx).style.backgroundColor = "red";
		    		await timer(timing);
		    		document.getElementById("p"+idx).style.backgroundColor = "#E1B6F7";

		            if(low == 0 && high == arr.length - 1)
		                document.getElementById("p"+idx).style.background = "Green";
		    		++ptr2, ptr1 += 1;
		    	} else {
		            if(low == 0 && high == arr.length - 1)
		                document.getElementById("p"+idx).style.background = "Green";
		    		++ptr1;
		    	}
		        idx++;
		    }
		}

		async function MergeSort() {
			stopclick(true);
		    await mergeSort(arr, 0, number - 1);
		    await colorstyle();
		    await stopclick(false);
		}
		//---------------------- End of Merg Sort------------
		//====================== Start Heap Sort=============
		async function heapify(arr, number, i) { 
		    var largest = i; 
		    var l = 2*i + 1; 
		    var r = 2*i + 2; 
		    if (l < number && arr[l] > arr[largest]) 
		        largest = l; 
		    if (r < number && arr[r] > arr[largest]) 
		        largest = r; 
		    if (largest != i) {
		    	document.getElementById("p"+i).style.backgroundColor = "yellow";
		        document.getElementById("p"+largest).style.backgroundColor = "yellow";
		        await timer(timing);
		        var k = arr[i] ;
		        arr[i] = arr[largest];
		        arr[largest] = k;
		        await timer(timing);
		        document.getElementById("p"+i).style.height = arr[i]+"px";
		        document.getElementById("p"+largest).style.height = arr[largest]+"px";
		        document.getElementById("p"+i).style.backgroundColor = "red";
		        document.getElementById("p"+largest).style.backgroundColor = "red";
		        await timer(timing);
		        document.getElementById("p"+i).style.backgroundColor = "#E1B6F7";
		        document.getElementById("p"+largest).style.backgroundColor = "#E1B6F7";
		        
		        await heapify(arr, number, largest); 
		    } 
		} 
		async function heapSort(arr, number) { 
		    for (var i = number / 2 - 1; i >= 0; i--) 
		        await heapify(arr, number, i); 
		    for (var i=number-1; i>=0; i--) { 
		        var k = arr[0] ;
		        arr[0] = arr[i];
		        arr[i] = k; 
		        document.getElementById("p"+0).style.height = arr[0]+"px";
		        document.getElementById("p"+i).style.height = arr[i]+"px";
		        document.getElementById("p"+i).style.backgroundColor = "Green";
		        await heapify(arr, i, 0); 
		    } 
		}
		async function HeapSort() {
			stopclick(true);
			await heapSort(arr, number);
			colorstyle();
		    stopclick(false);
		}

		//-----------------------Bubble Sort ------------------------
		async function BubbleSort() {
			stopclick(true);
			for (var i = 0; i < number-1; i++) {   
			    for (var j = 0; j < number-i-1; j++) {
			        if (arr[j] > arr[j+1])  {
			         	document.getElementById("p"+j).style.backgroundColor = "red";
			    		document.getElementById("p"+(j+1)).style.backgroundColor = "red";
			    		await timer(timing);
			        	var temp = arr[j];
			        	arr[j] = arr[j+1];
			        	arr[j+1] = temp;
			    		document.getElementById("p"+j).style.height=arr[j]+"px";
			    		document.getElementById("p"+(j+1)).style.height=arr[j+1]+"px";
			    		document.getElementById("p"+j).style.backgroundColor ="yellow";
			    		document.getElementById("p"+(j+1)).style.backgroundColor ="yellow";
			    		await timer(timing);
			        }
			        document.getElementById("p"+j).style.backgroundColor ="yellow";
			    	document.getElementById("p"+(j+1)).style.backgroundColor ="yellow";
			    	await timer(timing);
			        document.getElementById("p"+j).style.backgroundColor ="#E1B6F7";
			    	document.getElementById("p"+(j+1)).style.backgroundColor ="#E1B6F7";
				}
				document.getElementById("p"+(number-i-1)).style.backgroundColor="Green";
			}
			colorstyle();
			stopclick(false);
		}
		//----------------------End Of Bubble Sort -------------------
		//----------------------Selection Sort -----------------------
		async function SelectionSort() {
			stopclick(true);
			for (var i = 0; i < number; i++) {  
		        for (j = i+1; j < number; j++) {  
			        if (arr[j] < arr[i]) {
			        	document.getElementById("p"+i).style.backgroundColor = "red";
				    	document.getElementById("p"+j).style.backgroundColor = "red";
				    	await timer(timing);
				        var temp = arr[i];
				        arr[i] = arr[j];
				        arr[j] = temp;
				    	document.getElementById("p"+i).style.height=arr[i]+"px";
				    	document.getElementById("p"+j).style.height=arr[j]+"px";
				    	document.getElementById("p"+i).style.backgroundColor ="yellow";
				    	document.getElementById("p"+j).style.backgroundColor ="yellow";
				    	await timer(timing);
			        }
			        document.getElementById("p"+i).style.backgroundColor ="yellow";
			    	document.getElementById("p"+j).style.backgroundColor ="yellow";
			    	await timer(timing);
			        document.getElementById("p"+i).style.backgroundColor ="#E1B6F7";
			    	document.getElementById("p"+j).style.backgroundColor ="#E1B6F7";
			    }
			    document.getElementById("p"+i).style.backgroundColor="Green";
		    }
		    colorstyle();
		    stopclick(false);
		}
		//----------------------End Of Selection Sort ----------------
		//----------------------Start Of Insertion Sort --------------
		async function InsertionSort() {
			stopclick(true);
			var key, j;  
		    for(var i = 1; i <= number; i++) {  
		        key = arr[i]; 
		        j = i - 1;		        
		        document.getElementById("p"+(j+1)).style.backgroundColor = "yellow";
		        await timer(timing);
		        while (j >= 0 && arr[j] > key) {  
		            arr[j + 1] = arr[j]; 
		            document.getElementById("p"+(j+1)).style.height = arr[j+1]+"px";
		            document.getElementById("p"+(j)).style.backgroundColor = "red";
		            j = j - 1;

		        }
		        arr[j + 1] = key;
		        document.getElementById("p"+i).style.backgroundColor = "yellow";
		        document.getElementById("p"+(1+j)).style.height=arr[j+1]+"px";  
		        document.getElementById("p"+(j+1)).style.backgroundColor = "yellow";
		        await timer(timing);
		        startcolor();
		    }
		    colorstyle();
		    stopclick(false);
		}
		//----------------------End Of Insertion Sort ----------------
		//----------------------Quick Sort --------------------------
		async function Quick_partition (arr, low, high) {  
		    var pivot = arr[high];
		    var i = low - 1;
		    for (var j = low; j <= high ; j++) { 
		    document.getElementById("p"+j).style.backgroundColor = "yellow";
		    	await timer(timing);
		        if (arr[j] < pivot) { 
		        	i++;
                	var temp = arr[i]; 
                	arr[i] = arr[j]; 
                	arr[j] = temp;
			        document.getElementById("p"+i).style.height = arr[i]+"px";
			    	document.getElementById("p"+j).style.height = arr[j]+"px";
			    	document.getElementById("p"+i).style.backgroundColor = "red";
			    	document.getElementById("p"+j).style.backgroundColor = "red";
			    	await timer(timing);
			    	document.getElementById("p"+i).style.backgroundColor = "#E1B6F7";
			    	document.getElementById("p"+j).style.backgroundColor = "#E1B6F7";
			    	await timer(timing);
		        } 
		        document.getElementById("p"+j).style.backgroundColor = "#E1B6F7";
		    }  
		    var temp = arr[i+1]; 
        	arr[i+1] = arr[high]; 
        	arr[high] = temp;
			document.getElementById("p"+(i+1)).style.height = arr[i+1]+"px";
			document.getElementById("p"+high).style.height = arr[high]+"px";
			document.getElementById("p"+(i+1)).style.backgroundColor = "Green";
		    return (i + 1);  
		} 

		async function quick(arr, low , high) { 
			if (low < high) {  
        		var pi = await  Quick_partition(arr, low, high);
        		await quick(arr, low, pi - 1);
        		for(var i = low; i < pi; i++)
        			document.getElementById("p"+i).style.backgroundColor = "Green";  
        		await quick(arr, pi + 1, high);
        		for(var i = pi; i < high; i++)
        			document.getElementById("p"+i).style.backgroundColor = "Green";
    		}
    		return 1;  
		}

		async function QuickSort() { 
			stopclick(true);
		    await quick(arr, 0, number - 1);
		    colorstyle();
		    stopclick(false);
		}
		//------------------- End of Quick Sort ---------------------
