// ---------------------- LANDSAT 5 Data (1992):
// ====================== 1992
var dataset_1992 = ee.ImageCollection('LANDSAT/LT05/C01/T1_32DAY_NDWI')
                  .filterDate('1992-07-01', '1992-07-15')
                  .filterBounds(geometry);
                  
// print(dataset_1992);
var data_1992 = dataset_1992.median()
                        .clip(geometry);
var NDWI_1992 = data_1992.select('NDWI');

var water_1992 = ee.Image(1).mask(NDWI_1992.gte(0.1));

// print(NDWI_1992);
// Map.addLayer(NDWI_1992, colorizedVis, 'ND1992');

var area_1992 = water_1992.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_1992, WaterVis_01,'W1992');
area_1992 = ee.Number(area_1992).divide(1e4);
print('area_1992 (He):', area_1992);


// ====================== 1996
var dataset_1996 = ee.ImageCollection('LANDSAT/LT05/C01/T1_32DAY_NDWI')
                  .filterDate('1996-07-01', '1996-08-01')
                  .filterBounds(geometry);
                  
// print(dataset_1996);
var data_1996 = dataset_1996.median()
                            .clip(geometry);

var NDWI_1996 = data_1996.select('NDWI');

var water_1996 = ee.Image(1).mask(NDWI_1996.gte(0.1));

// print(NDWI_1996);
// Map.addLayer(NDWI_1996, colorizedVis, 'ND1996');

var area_1996 = water_1996.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_1996, WaterVis_01,'W1996');
area_1996 = ee.Number(area_1996).divide(1e4);
print('area_1996 (He):', area_1996);


// ====================== 2002
var dataset_2002 = ee.ImageCollection('LANDSAT/LT05/C01/T1_32DAY_NDWI')
                  .filterDate('2002-06-01', '2002-7-01')
                  .filterBounds(geometry);
                  
// print(dataset_2002);
var data_2002 = dataset_2002.median()
                            .clip(geometry);

var NDWI_2002 = data_2002.select('NDWI');

var water_2002 = ee.Image(1).mask(NDWI_2002.gte(0.1));

// print(NDWI_2002);
// Map.addLayer(NDWI_2002, colorizedVis, 'ND2002');

var area_2002 = water_2002.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_2002, WaterVis_01,'W2002');
area_2002 = ee.Number(area_2002).divide(1e4);
print('area_2002 (He):', area_2002);


// ====================== 2007
var dataset_2007 = ee.ImageCollection('LANDSAT/LT05/C01/T1_32DAY_NDWI')
                  .filterDate('2007-06-01', '2007-7-01')
                  .filterBounds(geometry);
                  
// print(dataset_2007);
var data_2007 = dataset_2007.median()
                            .clip(geometry);

var NDWI_2007 = data_2007.select('NDWI');

var water_2007 = ee.Image(1).mask(NDWI_2007.gte(0.1));

// print(NDWI_2007);
// Map.addLayer(NDWI_2007, colorizedVis, 'ND2007');

var area_2007 = water_2007.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_2007, WaterVis_01,'W2007');
area_2007 = ee.Number(area_2007).divide(1e4);
print('area_2007 (He):', area_2007);


// ---------------------- LANDSAT 7 Data:
// ====================== 2012
var dataset_2012 = ee.ImageCollection('LANDSAT/LE07/C01/T1_32DAY_NDWI')
                  .filterDate('2012-06-01', '2012-7-01')
                  .filterBounds(geometry);
                  
// print(dataset_2012);
var data_2012 = dataset_2012.median()
                            .clip(geometry);

var NDWI_2012 = data_2012.select('NDWI');

var water_2012 = ee.Image(1).mask(NDWI_2012.gte(0.1));

// print(NDWI_2012);
// Map.addLayer(NDWI_2012, colorizedVis, 'ND2012');

var area_2012 = water_2012.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_2012, WaterVis_01,'W2012');
area_2012 = ee.Number(area_2012).divide(1e4);
print('area_2012 (He):', area_2012);


// ---------------------- LANDSAT 8 Data:
// ====================== 2016
var dataset_2016 = ee.ImageCollection('LANDSAT/LC08/C01/T1_32DAY_NDWI')
                  .filterDate('2016-05-01', '2016-06-01')
                  .filterBounds(geometry);
                  
// print(dataset_2016);
var data_2016 = dataset_2016.median()
                            .clip(geometry);

var NDWI_2016 = data_2016.select('NDWI');

var water_2016 = ee.Image(1).mask(NDWI_2016.gte(0.1));

// print(NDWI_2016);
// Map.addLayer(NDWI_2016, colorizedVis, 'ND2016');

var area_2016 = water_2016.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_2016, WaterVis_01,'W2016');
area_2016 = ee.Number(area_2016).divide(1e4);
print('area_2016 (He):', area_2016);


// ====================== 2021
var dataset_2021 = ee.ImageCollection('LANDSAT/LC08/C01/T1_32DAY_NDWI')
                  .filterDate('2021-05-01', '2021-06-01')
                  .filterBounds(geometry)
                  .median()
                  .clip(geometry);

var NDWI_2021 = dataset_2021.select('NDWI');

var water_2021 = ee.Image(1).mask(NDWI_2021.gte(0.1));

// print(NDWI_2021);
// Map.addLayer(NDWI_2021, colorizedVis, 'ND2021');

var area_2021 = water_2021.multiply(ee.Image.pixelArea())
                  .reduceRegion(ee.Reducer.sum(),geometry,30,null,null,false,1e13)
                  .get('constant');
// Map.addLayer(water_2021, WaterVis_02,'W2021');
area_2021 = ee.Number(area_2021).divide(1e4);
print('area_2021 (He):', area_2021);


//  ---------------------- Conclude:
var Ratio = ee.Number(100).multiply(ee.Number(area_1992).subtract(ee.Number(area_2021)))
                          .divide(ee.Number(area_1992));
print('Dam Lake Area Reduction (%):', Ratio);

var year_list = ee.List(['Jul-1992', 'Jul-1996', 'Jun-2002', 'Jun-2007', 'Jun-2012',
                         'May-2016', 'May-2021']);
var area_list = ee.List([area_1992, area_1996, area_2002, area_2007, area_2012,
                         area_2016, area_2021]);
var area_chart = ui.Chart.array.values({array: area_list, axis: 0, xLabels: year_list})
                .setOptions({
                  title: 'Hoover Dam Lake Area (ha)',
                  hAxis: {
                    title: 'Year',
                    titleTextStyle: {italic: false, bold: true}
                  },
                  vAxis: {
                    title: 'Area (ha)',
                    titleTextStyle: {italic: false, bold: true}
                  },
                  colors: ['1d6b99'],
                  lineSize: 5,
                  pointSize: 0,
                  legend: {position: 'none'}
                });
// print(area_chart);
print(area_chart.setChartType('AreaChart'));

Map.centerObject(geometry);
