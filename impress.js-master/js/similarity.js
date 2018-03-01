 <script src="https://d3js.org/d3.v4.min.js"></script>
            <script src="http://vizjs.org/viz.v1.1.0.min.js"></script>
            <script>
            var data = [['Check Point 1','Check Point 2',24]
,['Check Point 1','Check Point 3',10]
,['Check Point 1','Check Point 4',15]
,['Check Point 1','Check Point 5',13]
,['Check Point 1','Check Point 6',15]
,['Check Point 1','Check Point 7',13]
,['Check Point 1','Check Point 8',5]
,['Check Point 1','Check Point 9',12]
,['Check Point 1','Check Point 10',10]
,['Check Point 1','Check Point 11',5]
,['Check Point 1','Check Point 12',7]
,['Check Point 1','Check Point 13',9]
,['Check Point 1','Check Point 14',9]

            
,['Check Point 2','Check Point 1',24]
,['Check Point 2','Check Point 3',7]
,['Check Point 2','Check Point 4',17]
,['Check Point 2','Check Point 5',12]
,['Check Point 2','Check Point 6',13]
,['Check Point 2','Check Point 7',17]
,['Check Point 2','Check Point 8',2]
,['Check Point 2','Check Point 9',9]
,['Check Point 2','Check Point 10',11]
,['Check Point 2','Check Point 11',0]
,['Check Point 2','Check Point 12',5]
,['Check Point 2','Check Point 13',5]
,['Check Point 2','Check Point 14',6]

            
,['Check Point 3','Check Point 1',10]
,['Check Point 3','Check Point 2',7]
,['Check Point 3','Check Point 4',13]
,['Check Point 3','Check Point 5',2]
,['Check Point 3','Check Point 6',6]
,['Check Point 3','Check Point 7',16]
,['Check Point 3','Check Point 8',6]
,['Check Point 3','Check Point 9',3]
,['Check Point 3','Check Point 10',5]
,['Check Point 3','Check Point 11',12]
,['Check Point 3','Check Point 12',6]
,['Check Point 3','Check Point 13',5]
,['Check Point 3','Check Point 14',5]

            
,['Check Point 4','Check Point 1',15]
,['Check Point 4','Check Point 2',17]
,['Check Point 4','Check Point 3',13]
,['Check Point 4','Check Point 5',11]
,['Check Point 4','Check Point 6',11]
,['Check Point 4','Check Point 7',18]
,['Check Point 4','Check Point 8',2]
,['Check Point 4','Check Point 9',9]
,['Check Point 4','Check Point 10',11]
,['Check Point 4','Check Point 11',3]
,['Check Point 4','Check Point 12',4]
,['Check Point 4','Check Point 13',4]
,['Check Point 4','Check Point 14',7]

            
,['Check Point 5','Check Point 1',13]
,['Check Point 5','Check Point 2',12]
,['Check Point 5','Check Point 3',2]
,['Check Point 5','Check Point 4',11]
,['Check Point 5','Check Point 6',22]
,['Check Point 5','Check Point 7',4]
,['Check Point 5','Check Point 8',13]
,['Check Point 5','Check Point 9',11]
,['Check Point 5','Check Point 10',14]
,['Check Point 5','Check Point 11',11]
,['Check Point 5','Check Point 12',14]
,['Check Point 5','Check Point 13',14]
,['Check Point 5','Check Point 14',7]


            
,['Check Point 6','Check Point 1',15]
,['Check Point 6','Check Point 2',13]
,['Check Point 6','Check Point 3',6]
,['Check Point 6','Check Point 4',11]
,['Check Point 6','Check Point 5',22]
,['Check Point 6','Check Point 7',6]
,['Check Point 6','Check Point 8',10]
,['Check Point 6','Check Point 9',15]
,['Check Point 6','Check Point 10',16]
,['Check Point 6','Check Point 11',8]
,['Check Point 6','Check Point 12',12]
,['Check Point 6','Check Point 13',9]
,['Check Point 6','Check Point 14',16]

            
,['Check Point 7','Check Point 1',13]
,['Check Point 7','Check Point 2',17]
,['Check Point 7','Check Point 3',16]
,['Check Point 7','Check Point 4',18]
,['Check Point 7','Check Point 5',4]
,['Check Point 7','Check Point 6',6]
,['Check Point 7','Check Point 8',1]
,['Check Point 7','Check Point 9',7]
,['Check Point 7','Check Point 10',8]
,['Check Point 7','Check Point 11',3]
,['Check Point 7','Check Point 12',5]
,['Check Point 7','Check Point 13',2]
,['Check Point 7','Check Point 14',7]

            
,['Check Point 8','Check Point 1',5]
,['Check Point 8','Check Point 2',2]
,['Check Point 8','Check Point 3',6]
,['Check Point 8','Check Point 4',2]
,['Check Point 8','Check Point 5',13]
,['Check Point 8','Check Point 6',10]
,['Check Point 8','Check Point 7',1]
,['Check Point 8','Check Point 9',12]
,['Check Point 8','Check Point 10',14]
,['Check Point 8','Check Point 11',24]
,['Check Point 8','Check Point 12',21]
,['Check Point 8','Check Point 13',24]
,['Check Point 8','Check Point 14',12]

,['Check Point 9','Check Point 1',12]
,['Check Point 9','Check Point 2',9]
,['Check Point 9','Check Point 3',3]
,['Check Point 9','Check Point 4',9]
,['Check Point 9','Check Point 5',11]
,['Check Point 9','Check Point 6',15]
,['Check Point 9','Check Point 7',7]
,['Check Point 9','Check Point 8',12]
,['Check Point 9','Check Point 10',19]
,['Check Point 9','Check Point 11',9]
,['Check Point 9','Check Point 12',16]
,['Check Point 9','Check Point 13',13]
,['Check Point 9','Check Point 14',24]

            
,['Check Point 10','Check Point 1',10]
,['Check Point 10','Check Point 2',11]
,['Check Point 10','Check Point 3',5]
,['Check Point 10','Check Point 4',11]
,['Check Point 10','Check Point 5',14]
,['Check Point 10','Check Point 6',16]
,['Check Point 10','Check Point 7',8]
,['Check Point 10','Check Point 8',14]
,['Check Point 10','Check Point 9',19]
,['Check Point 10','Check Point 11',12]
,['Check Point 10','Check Point 12',20]
,['Check Point 10','Check Point 13',11]
,['Check Point 10','Check Point 14',20]

            
,['Check Point 11','Check Point 1',5]
,['Check Point 11','Check Point 2',0]
,['Check Point 11','Check Point 3',12]
,['Check Point 11','Check Point 4',3]
,['Check Point 11','Check Point 5',11]
,['Check Point 11','Check Point 6',8]
,['Check Point 11','Check Point 7',3]
,['Check Point 11','Check Point 8',24]
,['Check Point 11','Check Point 9',9]
,['Check Point 11','Check Point 10',12]
,['Check Point 11','Check Point 12',17]
,['Check Point 11','Check Point 13',21]
,['Check Point 11','Check Point 14',14]

            
,['Check Point 12','Check Point 1',7]
,['Check Point 12','Check Point 2',5]
,['Check Point 12','Check Point 3',6]
,['Check Point 12','Check Point 4',4]
,['Check Point 12','Check Point 5',14]
,['Check Point 12','Check Point 6',12]
,['Check Point 12','Check Point 7',5]
,['Check Point 12','Check Point 8',21]
,['Check Point 12','Check Point 9',16]
,['Check Point 12','Check Point 10',20]
,['Check Point 12','Check Point 11',17]
,['Check Point 12','Check Point 13',21]
,['Check Point 12','Check Point 14',14]

            
,['Check Point 13','Check Point 1',9]
,['Check Point 13','Check Point 2',5]
,['Check Point 13','Check Point 3',5]
,['Check Point 13','Check Point 4',4]
,['Check Point 13','Check Point 5',14]
,['Check Point 13','Check Point 6',9]
,['Check Point 13','Check Point 7',2]
,['Check Point 13','Check Point 8',24]
,['Check Point 13','Check Point 9',13]
,['Check Point 13','Check Point 10',11]
,['Check Point 13','Check Point 11',21]
,['Check Point 13','Check Point 12',21]
,['Check Point 13','Check Point 14',13]

            
,['Check Point 14','Check Point 1',9]
,['Check Point 14','Check Point 2',6]
,['Check Point 14','Check Point 3',5]
,['Check Point 14','Check Point 4',7]
,['Check Point 14','Check Point 5',7]
,['Check Point 14','Check Point 6',16]
,['Check Point 14','Check Point 7',7]
,['Check Point 14','Check Point 8',12]
,['Check Point 14','Check Point 9',24]
,['Check Point 14','Check Point 10',20]
,['Check Point 14','Check Point 11',14]
,['Check Point 14','Check Point 12',14]
,['Check Point 14','Check Point 13',13]


];
var colors = {
"Check Point 1":         "#d51918"
,"Check Point 2":    "#ce004b"
,"Check Point 3":    "#c90149"
,"Check Point 4":        "#fa42a4"
,"Check Point 5": "#820398"
,"Check Point 6":        "#490181"
,"Check Point 7": "#0d017d"
,"Check Point 8":      "#0319c7"
,"Check Point 9":"#009d6a"
,"Check Point 9": "#007318"
,"Check Point 10":  "#f7fe00"
,"Check Point 11":   "#ff9900"
,"Check Point 12":    "#ff7906"
,"Check Point 13":     "#de2803"
,"Check Point 14":     "#9d0708"

};
var sortOrder =[
"Check Point 1"
,"Check Point 2"
,"Check Point 3"
,"Check Point 4"
,"Check Point 5"
,"Check Point 6"
,"Check Point 7"
,"Check Point 8"
,"Check Point 9"
,"Check Point 10"
,"Check Point 11"
,"Check Point 12"
,"Check Point 13"
,"Check Point 14"

];
function sort(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)); }
var ch = viz.ch().data(data)
      .padding(.01)
      .sort(sort)
	  .innerRadius(430)
	  .outerRadius(440)
	  .duration(1000)
	  .chordOpacity(0.3)
	  .labelPadding(.03)
      .fill(function(d){ return colors[d];});
var width=1200, height=1100;
var svg = d3.select("body").append("svg").attr("height",height).attr("width",width);
svg.append("g").attr("transform", "translate(600,550)").call(ch);
// adjust height of frame in bl.ocks.org
d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");
            </script>)( document, window );
