class HomeController {

    /**
     * Constructor class HomeController
     *
     * @param {object} $scope
     */
    constructor($scope) {
        'ngInject';

        var vm = this;
  
        vm.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
          [65, 59, 20, 81, 56, 55, 40, 28, 48, 40, 19, 86],
          [28, 48, 40, 19, 86, 27, 90, 65, 59, 20, 81, 56]
        ];
        vm.onClick = function(points, evt) {
          console.log(points, evt);
        };
        
        vm.datasetOverride = [{
          yAxisID: 'y-axis-1'
        }, {
          yAxisID: 'y-axis-2'
        }];
        vm.options = {
          scales: {
            yAxes: [{
              id: 'y-axis-1',
              type: 'linear',
              display: true,
              position: 'left'
            }, {
              id: 'y-axis-2',
              type: 'linear',
              display: true,
              position: 'right'
            }]
          }
        };
    }
}

export default HomeController;
