var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "about-cast-ebook",
  "level": "1",
  "url": "about-cast-ebook.html",
  "type": "Preface",
  "number": "",
  "title": "About this CAST e-book",
  "body": " About this CAST e-book  Welcome to CAST (Computer-Assisted Statistics Textbook). This is an interactive electronic textbook designed to help students learn statistics through visualization and exploration.     "
},
{
  "id": "preface-chapter-0",
  "level": "1",
  "url": "preface-chapter-0.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This preface (Chapter 0) introduces the purpose and structure of this statistics textbook.     "
},
{
  "id": "sec-about-data-1",
  "level": "1",
  "url": "sec-about-data-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-about-data-2",
  "level": "1",
  "url": "sec-about-data-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-analysing-variation",
  "level": "1",
  "url": "sec-analysing-variation.html",
  "type": "Section",
  "number": "2.1",
  "title": "Analysing Variation",
  "body": " Analysing Variation  Meaningful information can be obtained from variation in the values of a variable.   Information from the variation in data  Variation in data is not simply an annoyance the variation itself can hold important information.  Simply sorting a data set into order can highlight features that are not obvious in the raw data, such as the lack of values between 3.4 and 4.9 in the data below.   Unsorted data   6.1 5.2 7.9 2.3 3.4  1.4 5.3 7.1 3.2 2.8  5.1 6.9 6.1 3.4 5.2  5.5 2.0 1.3 4.9 6.4     "
},
{
  "id": "sec-analysing-variation-3-4",
  "level": "2",
  "url": "sec-analysing-variation.html#sec-analysing-variation-3-4",
  "type": "Table",
  "number": "2.1.1",
  "title": "Unsorted data",
  "body": " Unsorted data   6.1 5.2 7.9 2.3 3.4  1.4 5.3 7.1 3.2 2.8  5.1 6.9 6.1 3.4 5.2  5.5 2.0 1.3 4.9 6.4   "
},
{
  "id": "sec-basic-dot-plot",
  "level": "1",
  "url": "sec-basic-dot-plot.html",
  "type": "Section",
  "number": "2.2",
  "title": "Basic Dot Plot",
  "body": " Basic Dot Plot  A dot plot displays each value as a cross along a numerical axis.   Dot plots  Some ranges of values are more common than others they have higher density.  The simplest graphical display of data that shows where there is high and low density is a dot plot. This shows each value as a cross (or dot) against a numerical axis.  The gap between 3.4 and 4.9 is more obvious on a dot plot than in a textual list of values, whether ordered or not.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-jittered-dot-plot",
  "level": "1",
  "url": "sec-jittered-dot-plot.html",
  "type": "Section",
  "number": "2.3",
  "title": "Jittered Dot Plot",
  "body": " Jittered Dot Plot  Jittering is a modification to the basic dot plot that avoids some problems associated with overlapping crosses.   Jittering the crosses  In all but the smallest data sets, the crosses on a basic dot plot overlap, making it difficult to identify regions of high density.  Randomly moving crosses away from the axis reduces this problem by separating the crosses:  Note that the vertical jittering is random and therefore tells you nothing about the data.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-stacked-dot-plots",
  "level": "1",
  "url": "sec-stacked-dot-plots.html",
  "type": "Section",
  "number": "2.4",
  "title": "Stacked Dot Plots",
  "body": " Stacked Dot Plots  Stacking of the crosses is an alternative to jittering that highlights ranges of high or low density.   Stacked dot plots  Stacking the crosses into columns is usually better than jittering them.   TODO: IMAGE PLACEHOLDER   Stacking highlights regions of high density well (tall stacks).   "
},
{
  "id": "sec-stems-leaf-plots",
  "level": "1",
  "url": "sec-stems-leaf-plots.html",
  "type": "Section",
  "number": "2.5",
  "title": "Stems and Leaf Plots",
  "body": " Stems and Leaf Plots  Stem and leaf plots are similar to stacked dot plots, but a digit is used instead of a cross to retain extra information.   Digits instead of crosses  Stem and leaf plots are closely related to stacked dot plots. The crosses are replaced by digits that provide a little more detail about the values that they represent.    Stem and Leaf  In a stem and leaf plot, the axis is replaced by a column of 'stems' the most significant digits of the values in the data. The digits that replace the crosses are called 'leaves' and give a further significant digit of each value on a stem.   TODO: IMAGE PLACEHOLDER   A final refinement is to sort the leaves into increasing order on each stem.   "
},
{
  "id": "sec-splitting-stems",
  "level": "1",
  "url": "sec-splitting-stems.html",
  "type": "Section",
  "number": "2.6",
  "title": "Splitting the Stems",
  "body": " Splitting the Stems  To increase the flexibility of the display, each stem may be repeated either 2 or 5 times, increasing the number of classes in the basic stem and leaf plot by a factor of 2 or 5.   Need for more flexibility  Sometimes basic stem and leaf plots are not flexible enough there would be either too many or too few rows of leaves to show the varying density well.  Repeating each stem 2 times (with leaves 0-4 on the lower copy and leaves 5-9 on the upper one) or 5 times (with leaves 0-1, 2-3, 4-5, 6-7 and 8-9 on the different copies) gives intermediate numbers of stems.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-drawing-stem-leaf",
  "level": "1",
  "url": "sec-drawing-stem-leaf.html",
  "type": "Section",
  "number": "2.7",
  "title": "Drawing Stem and Leaf Plots",
  "body": " Drawing Stem and Leaf Plots  For data analysis, stem and leaf plots are rarely more informative than stacked dot plots, but they are easy to draw by hand.   Smoothness  When drawing a stem and leaf plot, the aim is for a smooth shape to the stem and leaf plot, and this is usually achieved by between 10 and 20 rows of leaves.    Drawing by hand  When data are analysed on a computer, a stacked dot plot usually describes a distribution of values more clearly than a stem and leaf plot.  However stem and leaf plots are easy to draw by hand:   Decide on the stems to use usually between 10 and 20 of them.  Scan down the values identifying the leaf digits and writing them against the value's stem.  Finally, sort the leaves on each stem into order.   To simplify drawing, values are truncated to give their stems and leaf digits, not rounded. For example, 7.98 and 7.90 would both be displayed as leaf '9' on the stem '7'.   "
},
{
  "id": "sec-outliers",
  "level": "1",
  "url": "sec-outliers.html",
  "type": "Section",
  "number": "3.1",
  "title": "Outliers",
  "body": " Outliers  Does the data contain any outliers values that are atypically large or small? The extreme values in a skew distribution are often mistaken for outliers.   Outliers  Values that are considerably larger or smaller than the bulk of the data are called outliers .  An outlier may have been incorrectly recorded, or there may have been other anomalous circumstances associated with it. Outliers must be carefully checked if possible. If anything atypical can be found, outliers should be deleted from the data set and their deletion noted in any reports about the data.    Outliers and skew distributions  Deciding whether a value is an outlier or not is affected by the shape of the distribution of values for the rest of the data.   Symmetric distribution    TODO: IMAGE PLACEHOLDER    Skew distribution   A distribution with a long tail to one side is called a skew distribution  positively skew if the long tail is to the right and negatively skew if the long tail is to the left. It is not unusual for the extreme value in a very skew distribution to be a fair distance from the other values and may not be an outlier.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-outliers-3-2",
  "level": "2",
  "url": "sec-outliers.html#sec-outliers-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outliers "
},
{
  "id": "sec-outliers-4-6",
  "level": "2",
  "url": "sec-outliers.html#sec-outliers-4-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "skew distribution "
},
{
  "id": "sec-clusters",
  "level": "1",
  "url": "sec-clusters.html",
  "type": "Section",
  "number": "3.2",
  "title": "Clusters",
  "body": " Clusters  Does the data split into separate clusters ranges of values with high density separated by ranges with low density? Clusters may correspond to different groups of individuals.   Clusters  If a dot plot, stem and leaf plot or histogram separates into two or more groups of values ( clusters ), this suggests that there may be more fundamental differences between the 'individuals' in the groups.   TODO: IMAGE PLACEHOLDER   Further investigation should be made of the individuals in the clusters to find whether they also differ in other ways.  If the clusters were less distinct, especially in small data sets, you would need external supporting evidence before concluding that the individuals separated into meaningful groups.   "
},
{
  "id": "sec-clusters-3-2",
  "level": "2",
  "url": "sec-clusters.html#sec-clusters-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clusters "
},
{
  "id": "sec-distribution-values",
  "level": "1",
  "url": "sec-distribution-values.html",
  "type": "Section",
  "number": "3.3",
  "title": "Distribution of Values",
  "body": " Distribution of Values  The distribution gives information about a typical value round which the data are spread (the distribution's location or centre) and the variability of the values (the spread of the distribution).   Distribution of values  Even when a data set has no outliers or clusters, the distribution of values also contains useful information. Important features are:   The centre or location of the distribution a 'typical value'  The spread or variability of the distribution  Whether a distribution is symmetric or skew do the tails appear similar at both sides?  Other aspects of the shape of the distribution   The concepts of centre and spread are particularly important.   "
},
{
  "id": "sec-names-individuals",
  "level": "1",
  "url": "sec-names-individuals.html",
  "type": "Section",
  "number": "3.4",
  "title": "Names of Individuals",
  "body": " Names of Individuals  Additional information about the items from which measurements have been made can help us understand the distribution of values in the data.   Extra information  When only a single value is known from each individual (or plant, item, etc), all that can be discovered is the shape of the distribution of these values.  Additional information about each individuals may give insight into why some values are bigger or smaller than others. Different types of information may be available. The simplest is a unique name for the individuals a textual label. These names may help us to understand why values are outliers or group into clusters in a dot plot or stem and leaf plot.   "
},
{
  "id": "sec-distinguishing-groups",
  "level": "1",
  "url": "sec-distinguishing-groups.html",
  "type": "Section",
  "number": "3.5",
  "title": "Distinguishing Known Groups",
  "body": " Distinguishing Known Groups  If we know that the values come from 2 or more groups of individuals, dot plots can be modified to show this extra information.   Multiple groups of individuals  Sometimes we know that the individuals belong to two or more groups before the data are collected or, equivalently, that they have different values of an extra categorical variable.  Information about groups is best displayed by plotting the separate groups against a common axis.   TODO: IMAGE PLACEHOLDER     Back-to-back stem and leaf plots  Stem and leaf plots can be used to compare two groups of individuals, if drawn on different sides of a common column of stems. (They are less useful if there are three or more groups.)   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-dangers-overinterpretation",
  "level": "1",
  "url": "sec-dangers-overinterpretation.html",
  "type": "Section",
  "number": "3.6",
  "title": "Dangers of Overinterpretation",
  "body": " Dangers of Overinterpretation  There is a risk of over-interpreting patterns in small data sets.   Warning: Features in the distribution of a small data set may not be meaningful  Be careful not to overinterpret patterns in small data sets. Clusters, outliers or skewness may appear by chance even if there is no meaningful basis to these features.  Pronounced outliers or clusters may be taken as indicative of something meaningful in the underlying process. However less pronounced outliers or clusters must be supported by outside evidence before these features can be interpreted as meaningful.   "
},
{
  "id": "sec-density-values",
  "level": "1",
  "url": "sec-density-values.html",
  "type": "Section",
  "number": "4.1",
  "title": "Density of Values",
  "body": " Density of Values  The heights of the stacks of crosses in a dot plot describe the density of values.   Density  In a stacked dot plot (or stem and leaf plot), the highest stacks contain the most values. These stacks have the highest density of values.   TODO: IMAGE PLACEHOLDER   Histograms more directly show how density varies along the axis.   "
},
{
  "id": "sec-histogram-equal-widths",
  "level": "1",
  "url": "sec-histogram-equal-widths.html",
  "type": "Section",
  "number": "4.2",
  "title": "Histogram with Equal Class Widths",
  "body": " Histogram with Equal Class Widths  In a simple histogram, the height of the rectangle above each class on the axis equals the number of values in the class the class frequency.   Histograms  In a simple histogram, the axis is split into sub-intervals of equal width called classes . A rectangle is drawn above each class with height equal to the number of values in the class the frequency of the class.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-histogram-equal-widths-3-2",
  "level": "2",
  "url": "sec-histogram-equal-widths.html#sec-histogram-equal-widths-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "classes frequency "
},
{
  "id": "sec-choice-classes",
  "level": "1",
  "url": "sec-choice-classes.html",
  "type": "Section",
  "number": "4.3",
  "title": "Choice of Classes",
  "body": " Choice of Classes  Class width and start-point should be chosen to make the histogram as smooth as possible neither too blocky nor too jagged.   Aim of a 'smooth' histogram  There is considerable freedom in the choice of histogram classes. The exact shape depends on:   Class width  Start value for first class   We usually choose classes with the aim of smoothness in the outline of the histogram rectangles.   TODO: IMAGE PLACEHOLDER   The choice of 'best' classes is subjective, but...   WARNING  If your conclusions about what a histogram tells you about the data depend on the choice of histogram classes, you are over-interpreting its shape.    "
},
{
  "id": "sec-histograms-small-data",
  "level": "1",
  "url": "sec-histograms-small-data.html",
  "type": "Section",
  "number": "4.4",
  "title": "Histograms of Small Data Sets",
  "body": " Histograms of Small Data Sets  The shape of a histogram can be very dependent on the choice of classes if the data set is small; beware over-interpreting its shape. Stacked dot plots are a better display of small data sets.   Warning for small data sets  For small data sets, changing the class width and the starting position for the first class can give a surprising amount of variability in histogram shape, so be extremely wary of over-interpreting features such as clusters or skewness.  Indeed, it is probably better to avoid using histograms unless there is a reasonable number of values stacked dot plots are far less likely to mislead you over minor features.   "
},
{
  "id": "sec-relative-frequency-area",
  "level": "1",
  "url": "sec-relative-frequency-area.html",
  "type": "Section",
  "number": "4.5",
  "title": "Relative Frequency and Area",
  "body": " Relative Frequency and Area  In a histogram, the proportion of the total area that is above any class equals the relative frequency of the class.   Relative frequency  When all histogram classes are of equal width, histograms are often drawn with a vertical axis giving the frequencies (counts) for each class. The vertical axis can alternatively be labelled with the relative frequencies (proportions) for the classes.  (There is no harm in including both axes.)   TODO: IMAGE PLACEHOLDER     Area equals relative frequency  An important property of histograms is that the proportion of values in one or more classes equals the proportion of the histogram area above these classes.   TODO: IMAGE PLACEHOLDER    Therefore: Relative frequency = proportion of the total area    "
},
{
  "id": "sec-comparing-groups-histograms",
  "level": "1",
  "url": "sec-comparing-groups-histograms.html",
  "type": "Section",
  "number": "4.6",
  "title": "Comparing Groups",
  "body": " Comparing Groups  The vertical axis should be relative frequency, not frequency, when comparing two groups with histograms. Population pyramids are often used to compare age distributions.   Relative frequencies to compare two groups  Histograms may be superimposed to compare two groups. However if the groups differ in size, it is usually more meaningful to compare relative frequencies (proportions) than the counts in the classes.   Use relative frequency histograms to compare groups.    TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-varying-class-widths",
  "level": "1",
  "url": "sec-varying-class-widths.html",
  "type": "Section",
  "number": "4.7",
  "title": "Histograms with Varying Class Widths",
  "body": " Histograms with Varying Class Widths  If a histogram has varying class widths, the vertical axis must be 'density'. The histogram shape would be misleading if frequency or relative frequency was used for the vertical axis.   Mixed Class Widths  For some data sets, wider classes give a smoother histogram in some ranges of values (e.g. in the tail of a distribution) and narrower classes are better in other parts of the distribution (usually where there is greater density of values).  In a correctly drawn histogram, each value contributes the same area.  Histograms can be drawn with mixed class widths, but it would be badly misleading to make the rectangle heights equal to either the class frequency or relative frequency.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-understanding-histograms",
  "level": "1",
  "url": "sec-understanding-histograms.html",
  "type": "Section",
  "number": "4.8",
  "title": "Understanding Histograms",
  "body": " Understanding Histograms  The proportion of values in any classes always equals the proportion of the total histogram area that is above the classes.   Area and proportion of values  The details of drawing histograms by hand with varying class widths are unimportant a computer should be used. To interpret their shape remember that:   The proportion of the total area above any classes equals the proportion of values in them   For example,   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-frequency-polygons",
  "level": "1",
  "url": "sec-frequency-polygons.html",
  "type": "Section",
  "number": "4.9",
  "title": "Frequency Polygons",
  "body": " Frequency Polygons  Frequency polygons are closely related to histograms but give a less 'blocky' display of density. Different groups can be compared more easily with them.   Frequency polygons  A frequency polygon is closely related to a histogram with equal class widths. It joins the midpoints of the tops of the class rectangles and tends to give a smoother outline than the corresponding histogram.   TODO: IMAGE PLACEHOLDER   It is easier to distinguish and compare superimposed frequency polygons for two groups than the corresponding histograms.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-kernel-density",
  "level": "1",
  "url": "sec-kernel-density.html",
  "type": "Section",
  "number": "4.10",
  "title": "Kernel Density Estimates (optional)",
  "body": " Kernel Density Estimates (optional)  Kernel density estimates show density in a still smoother display.   Kernel density estimates  A kernel density estimate is an alternative to a histogram that often results in a smoother display of the density of values. Each data value on the axis is replaced by a 'blob' of ink (kernel) and these kernels are stacked.   TODO: IMAGE PLACEHOLDER   The widths of the kernels can be adjusted if they are too narrow, the display becomes jagged, but if they are too wide, the display becomes too spread out and detail is lost.   "
},
{
  "id": "sec-drawing-histograms",
  "level": "1",
  "url": "sec-drawing-histograms.html",
  "type": "Section",
  "number": "4.11",
  "title": "Drawing Histograms by Hand (optional)",
  "body": " Drawing Histograms by Hand (optional)  Histograms are based on frequency tables. Class boundaries should avoid possible data values.   Frequency table  A computer is normally used to draw histograms. Hand-drawn histograms are based on a frequency table that lists the histogram classes and their frequencies.  To avoid ambiguity in the histogram, the class boundaries should be chosen to ensure that no data values are on boundaries. For example,   Frequency table example    Data values  Class  Frequency    1.0 - 1.9   2    2.0 - 2.9   3    3.0 - 3.9   3    4.0 - 4.9   1    5.0 - 5.9   5    6.0 - 6.9   4    7.0 - 7.9   2      20       Height of a histogram rectangle  To draw a histogram by hand with equal class widths, each class rectangle can be drawn with height equal to its class frequency. If class widths vary, we need to calculate the density for each class with the formula:     and use this for the rectangle heights.   "
},
{
  "id": "sec-drawing-histograms-3-4",
  "level": "2",
  "url": "sec-drawing-histograms.html#sec-drawing-histograms-3-4",
  "type": "Table",
  "number": "4.11.1",
  "title": "Frequency table example",
  "body": " Frequency table example    Data values  Class  Frequency    1.0 - 1.9   2    2.0 - 2.9   3    3.0 - 3.9   3    4.0 - 4.9   1    5.0 - 5.9   5    6.0 - 6.9   4    7.0 - 7.9   2      20    "
},
{
  "id": "sec-need-summarise",
  "level": "1",
  "url": "sec-need-summarise.html",
  "type": "Section",
  "number": "5.1",
  "title": "The Need to Summarise",
  "body": " The Need to Summarise  Histograms are based on frequency tables. Class boundaries should avoid possible data values.   Unhelpful detail when comparing groups  Dot plots, stem and leaf plots and histograms contain a lot of detail about the distribution of values in a data set. This level of detail is useful when examining a single data set, but when several groups of values are being compared, the detail distracts from the main differences between the groups.  For example, the jittered dot plots below do not concisely summarise the differences between the five groups.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-median-quartiles-boxplot",
  "level": "1",
  "url": "sec-median-quartiles-boxplot.html",
  "type": "Section",
  "number": "5.2",
  "title": "Median, Quartiles, and Boxplot",
  "body": " Median, Quartiles, and Boxplot  The median and quartiles split a batch of values into four equal-sized sets of values. A box plot is a graphical display of the median, quartiles and extremes.   Five-number summary  Five values are enough to capture a lot of information about the distribution of values in a data set.   The two extremes (i.e. the minimum and maximum values).  The lower quartile, median and upper quartile.   These values split the data set into four groups with approximately equal numbers of values.    Box plot  A box plot displays the five-number summary graphically.   TODO: IMAGE PLACEHOLDER     Details  The median, , is the middle value if there is an odd number of values in the data set. If there is an even number of values, the median is the average of the middle two.  Different authors give slightly different definitions for the upper and lower quartiles. One definition of the lower quartile is the median of the lowest half of the data i.e. of the values lower than . (The upper quartile would then be defined as the median of the top half of the values.)   Important: Provided you are consistent, different definitions of the quartiles should lead you to the same conclusions.   "
},
{
  "id": "sec-interpreting-boxplot",
  "level": "1",
  "url": "sec-interpreting-boxplot.html",
  "type": "Section",
  "number": "5.3",
  "title": "Interpreting a Box Plot’s Shape",
  "body": " Interpreting a Box Plot's Shape  A box plot clearly shows the centre, spread and skewness of a data set. It splits the corresponding histogram into 4 approximately equal areas.   Box plots and histograms  Since the median and quartiles split the data set into quartiles, they also split a histogram of the data into four approximately equal areas.   TODO: IMAGE PLACEHOLDER     What does a box plot tell you about the distribution?   Centre   The median gives an indication of the centre of the distribution.   TODO: IMAGE PLACEHOLDER    Spread   The width of the box (the interquartile range) and the difference between the maximum and minimum (range) both give an indication of the spread of values.   TODO: IMAGE PLACEHOLDER    Skewness   The distances of the minimum and lower quartile to the median, in relation to the corresponding distances of the maximum and upper quartile give information about the skewness of the distribution. If the maximum and upper quartile are further from the median, the distribution is skew with a long tail of higher values.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-displaying-outliers",
  "level": "1",
  "url": "sec-displaying-outliers.html",
  "type": "Section",
  "number": "5.4",
  "title": "Displaying Outliers",
  "body": " Displaying Outliers  The basic box plot is often modified to display outliers as separate crosses.   Outliers and skew distributions  Basic box plots cannot show whether the minimum and maximum in a distribution are outliers or simply the end of skew distributions.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-clusters-boxplots",
  "level": "1",
  "url": "sec-clusters-boxplots.html",
  "type": "Section",
  "number": "5.5",
  "title": "Clusters",
  "body": " Clusters  Box plots cannot show clusters, so must never be used for data with clusters.   Box plots and clusters  Box plots cannot show clusters in data.   TODO: IMAGE PLACEHOLDER   Before using a box plot, always look at the data with a dot plot or histogram to make sure that there are no clusters.   "
},
{
  "id": "sec-comparison-groups-boxplots",
  "level": "1",
  "url": "sec-comparison-groups-boxplots.html",
  "type": "Section",
  "number": "5.6",
  "title": "Comparison of Groups",
  "body": " Comparison of Groups  Box plots are particularly effective for displaying differences between several groups of values.   Box plots to compare groups  To display the distribution of values in a single set of data, a dot plot or histogram is more useful than a box plot. However for comparison of two or more groups of values box plots are particularly effective they highlight differences between the centres, spreads of values and skewness of the groups.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-dangers-overinterpretation-boxplots",
  "level": "1",
  "url": "sec-dangers-overinterpretation-boxplots.html",
  "type": "Section",
  "number": "5.7",
  "title": "Dangers of Overinterpretation",
  "body": " Dangers of Overinterpretation  Box plots are relatively stable, and contain less 'noise' than other displays. They can concisely describe differences between even small groups.   Stability of the shape of box plots  When used for small data sets, features in dot plots, stem and leaf plots and histograms are relatively unstable. Although more stable, the shapes of box plots also vary if different data are collected from the same process.   Important: Care must be taken not to over-interpret the shape of box plots for small data sets.  As with other displays, the larger the data set, the more stable the box plots become.   "
},
{
  "id": "sec-centre-spread",
  "level": "1",
  "url": "sec-centre-spread.html",
  "type": "Section",
  "number": "6.1",
  "title": "Centre and Spread",
  "body": " Centre and Spread  The centre of a distribution is a 'typical value'. The spread describes how far the values are from the centre.   Summarising centre and spread  Two important aspects of a distribution of values are particularly important.   Centre   The centre is a 'typical' value around which the data are located.   Spread   The spread describes the distance of the individual values from the centre.   TODO: IMAGE PLACEHOLDER   We will describe centre and spread with numerical values called summary statistics. They provide particularly concise and meaningful comparisons of different groups.   "
},
{
  "id": "sec-median-range-iqr",
  "level": "1",
  "url": "sec-median-range-iqr.html",
  "type": "Section",
  "number": "6.2",
  "title": "Median, Range, and IQR",
  "body": " Median, Range, and IQR  The median is a summary of the centre of a distribution. The range and inter-quartile range both describe spread.   Simple summaries of centre and spread   Centre   The median is the simplest measure of centre. Half the data values are more than it, and half less.   Spread   The range (maximum - minimum) and interquartile range (upper quartile - lower quartile) are two different summary statistics that describe the spread of values in a data set.    Information from median and interquartile range  Given the median and interquartile range, it is possible to sketch a bell-shaped histogram that matches these values. Such a 'guess' is often close to the actual distribution of values.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-median-range-iqr-3-3",
  "level": "2",
  "url": "sec-median-range-iqr.html#sec-median-range-iqr-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "median "
},
{
  "id": "sec-median-range-iqr-3-5",
  "level": "2",
  "url": "sec-median-range-iqr.html#sec-median-range-iqr-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "range interquartile range "
},
{
  "id": "sec-summaries-centre",
  "level": "1",
  "url": "sec-summaries-centre.html",
  "type": "Section",
  "number": "6.3",
  "title": "Summaries of Centre",
  "body": " Summaries of Centre  The median and mean are alternative measures of the centre of a distribution.   Median  Half of the data values are below the median and half are above it:   TODO: IMAGE PLACEHOLDER     Mean  The mean is:     If each value in a dot plot was a solid object resting on a beam with negligible mass, the mean is the value at which the beam will balance.   TODO: IMAGE PLACEHOLDER   Because of the leverage exerted by points far from the centre, the mean is further into the tail of a skew distribution than you might expect.   "
},
{
  "id": "sec-properties-median-mean",
  "level": "1",
  "url": "sec-properties-median-mean.html",
  "type": "Section",
  "number": "6.4",
  "title": "Properties of Median and Mean",
  "body": " Properties of Median and Mean  When a data set is not symmetric, the mean and median may differ substantially.  Although both describe aspects of the 'centre' of a distribution, the median and mean are not the same and can occasionally have very different values.   Social vs economic indicator  For some data sets, the median can be considered to be a social indicator, whereas the mean can be interpreted as an economic indicator. In a company,   the median salary indicates what the 'average employee' earns (half of the employees earn more and half earn less)  the mean salary reflects the total amount paid as salaries in the company (it is total \/ n)     Outliers  An outlier has little effect on the median, but affects the mean more strongly. The median is said to be more robust.    Skew distributions  When a distribution is fairly symmetrical, the mean and median are similar, but if the distribution is skew, then the mean is usually further into the tail of the distribution than the median.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-standard-deviation",
  "level": "1",
  "url": "sec-standard-deviation.html",
  "type": "Section",
  "number": "6.5",
  "title": "Standard Deviation",
  "body": " Standard Deviation  The standard deviation is the most commonly used numerical summary of the spread of values in a data set.   Simple measures of spread   Range   Difference between maximum and minimum values   Inter-quartile range   The middle half of the values are within an interval of this length  These are (relatively) easy to understand and explain to others, but neither are commonly used.    Standard deviation  The standard deviation is a 'typical' distance of values from the sample mean.   TODO: IMAGE PLACEHOLDER   The standard deviation is denoted by the letter and is defined by:     The numerator depends on the distances of the values to the mean, so it will be small if the values are all close to the mean and big if they are far from the mean.    Variance  The square of the standard deviation, , is called the sample variance. Variances are sometimes reported and used but standard deviations are easier to interpret since they have the same units as the original data (e.g. kilograms or dollars).   "
},
{
  "id": "sec-rule-thumb-sd",
  "level": "1",
  "url": "sec-rule-thumb-sd.html",
  "type": "Section",
  "number": "6.6",
  "title": "Rule of Thumb for Standard Deviation",
  "body": " Rule of Thumb for Standard Deviation  The 70-95-100 rule-of-thumb is useful for understanding the numerical value of the standard deviation.   'Quarter-range' rule of thumb  For many data sets, the standard deviation is just under a quarter of the range.   TODO: IMAGE PLACEHOLDER   This is a simple rule, but is only very approximate. The standard deviation can be more than a quarter the range in distributions with short tails or much less if there are long tails or outliers.    The 70-95-100 rule of thumb  The 70-95-100 rule is more accurate. In many distributions,   Approximately 70% of the values are within 1 standard deviation of the mean.  Approximately 95% of the values are within 2 standard deviations of the mean.  Nearly all of the values are within 3 standard deviations of the mean.   The 70-95-100 rule holds approximately for most reasonably symmetric data sets, but for skew data or distributions with long tails, outliers or clusters, it is often less accurate.   "
},
{
  "id": "sec-understanding-mean-sd",
  "level": "1",
  "url": "sec-understanding-mean-sd.html",
  "type": "Section",
  "number": "6.7",
  "title": "Understanding Means and Standard Deviation",
  "body": " Understanding Means and Standard Deviation  It is possible to roughly guess the mean and standard deviation from a histogram and roughly sketch a symmetric histogram matching any given mean and standard deviation.  Understanding the definition of the standard deviation is much less important than knowing its properties and having a feel for what its numerical value tells you about the data.   Guessing s from histogram  About 95% of the values should be within of the mean, so after dropping the top 2.5% and bottom 2.5% of the values (histogram area), the remainder should span approximately . Dividing this range by 4 should approximate the standard deviation.   TODO: IMAGE PLACEHOLDER     Sketching a histogram from the mean and s  Similarly, you should be able to draw a rough sketch of a symmetric histogram with any mean and standard deviation that you are given. (It would be centred on the mean and 95% of the area would be within of this.)   "
},
{
  "id": "sec-warnings-mean-sd",
  "level": "1",
  "url": "sec-warnings-mean-sd.html",
  "type": "Section",
  "number": "6.8",
  "title": "Warnings about Mean and Standard Deviation",
  "body": " Warnings about Mean and Standard Deviation  The mean and standard deviation cannot give any indication of the existance of outliers, skewness or clusters. A dot plot or histogram should be examined before reporting these numerical summaries.   Important  The mean and standard deviation hold no information about the shape of a distribution, other than its centre and spread.  Many different distributions have the same mean and standard deviation.   TODO: IMAGE PLACEHOLDER   Clusters, outliers and skewness are important features of a data set and should influence the analysis that you perform and the conclusions that you reach. In particular, if you ignore outliers or clusters, you could easily reach the wrong conclusions.  It is therefore essential that you look at a graphical display of a distribution before summarising with a mean and standard deviation.   "
},
{
  "id": "sec-effect-outliers",
  "level": "1",
  "url": "sec-effect-outliers.html",
  "type": "Section",
  "number": "7.1",
  "title": "Effect of Outliers",
  "body": " Effect of Outliers  If a data set contains an outlier, the mean and especially the standard deviation can be badly affected. The values may be obviously wrong when the 70-95-100 rule is applied in the context of the data but examining a dot plot or box plot is best.   Outliers and the standard deviation  The mean and standard deviation are inadequate descriptions of distributions that have clusters, outliers or skewness.  An outlier has a strong influence on the mean of the data and an even bigger effect on the standard deviation. In the data below, one measurement was missing and coded as '999'. If this value (999) is included, the mean is a feasible value, but the standard deviation should be recognised as being unreasonable.   TODO: IMAGE PLACEHOLDER   A graphical display such as a dot plot is the best way to detect an outlier and you should always look at the data before summarising with a mean and standard deviation.  An outlier should be carefully examined. Was the value incorrectly recorded? Was there something unusual about the individual from which the measurement was obtained? If we are convinced that there was something wrong about the value, it should be removed from the data set before further analysis.   "
},
{
  "id": "sec-sd-grouped-data",
  "level": "1",
  "url": "sec-sd-grouped-data.html",
  "type": "Section",
  "number": "7.2",
  "title": "Standard Deviation of Grouped Data",
  "body": " Standard Deviation of Grouped Data  The standard deviation within groups is usually lower than the overall standard deviation.   Within-group and overall standard deviation  In some data sets, the 'individuals' can be split into groups.   TODO: IMAGE PLACEHOLDER   When the three groups above (A, B and C) are combined, all information about the differences between the groups is lost. The overall variability is also considerably larger than variability within the groups.   Note: The standard deviation of the combined data set is often considerably higher than that of the separate groups.  It is therefore better to separately describe the distributions within the groups than to describe the overall distribution with a single mean and standard deviation.   "
},
{
  "id": "sec-explained-unexplained",
  "level": "1",
  "url": "sec-explained-unexplained.html",
  "type": "Section",
  "number": "7.3",
  "title": "Explained and Unexplained Variation",
  "body": " Explained and Unexplained Variation  Splitting a data set into groups of 'similar' values results in more accurate predictions of future values if the group membership is known. The grouping is said to explain some of the overall variation.   Types of variation  The table below summarises monthly rainfall data in a city over several years:   Monthly rainfall statistics    Month  Mean  Standard deviation   January 32.13 2.11  February 31.44 2.17  March 31.24 2.08  April 30.46 1.73  May 28.53 1.69  June 26.10 1.37  July 26.43 1.32  August 30.04 1.28  September 33.44 1.24  October 34.93 1.01  November 34.34 1.49  December 32.62 1.75  Overall 30.99 3.17    We can distinguish between three types of variation in the rainfalls:   Overall variation   Ignoring the months, the overall standard deviation is 3.17.   Unexplained variation   Variation within months is unexplained it is unpredictable from available information. The standard deviations within months are between 1.01 and 2.17.   Explained variation   This is the difference between the overall and unexplained variation. (We do not give a numerical definition here.) Knowing the month would help to predict rainfall, so the month explains part of the variation in rainfalls.   "
},
{
  "id": "sec-explained-unexplained-3-3",
  "level": "2",
  "url": "sec-explained-unexplained.html#sec-explained-unexplained-3-3",
  "type": "Table",
  "number": "7.3.1",
  "title": "Monthly rainfall statistics",
  "body": " Monthly rainfall statistics    Month  Mean  Standard deviation   January 32.13 2.11  February 31.44 2.17  March 31.24 2.08  April 30.46 1.73  May 28.53 1.69  June 26.10 1.37  July 26.43 1.32  August 30.04 1.28  September 33.44 1.24  October 34.93 1.01  November 34.34 1.49  December 32.62 1.75  Overall 30.99 3.17   "
},
{
  "id": "sec-variance-df",
  "level": "1",
  "url": "sec-variance-df.html",
  "type": "Section",
  "number": "7.4",
  "title": "Variance and Degrees of Freedom (advanced)",
  "body": " Variance and Degrees of Freedom (advanced)  The square of the standard deviation is called the variance; its value is harder to understand but it is the basis of important advanced statistical methods. The degrees of freedom are the number of pieces of information contributing to the standard deviation (or variance).   Variance     The units of the variance are the square of the units of the original values. For example, if the values are weights, the standard deviation might be 6 kg, but the variance would be 36 square kg. Since its units are easier to interpret, standard deviations are more easily understood measures of spread, but variances are important in advanced statistics. (An important collection of methods for analysing relationships between variables is called analysis of variance.)    Degrees of freedom (optional)  The divisor in the formula for the sample standard deviation is called its degrees of freedom . This is the number of 'independent pieces of information' that contribute to it.   Sample of size n = 1   With only a single value, there is no information about the spread of values, so there are 0 degrees of freedom.   Sample of size n = 2   With two values, and , there is only a single piece of information about the spread the difference between the values,  and there is one degree of freedom.   Sample of size n   In general, there is one less 'piece of information about the spread' in the sample than the number of data points because the sample mean, , is one piece of information that does not give any information about the spread of the data. There are therefore degrees of freedom.   "
},
{
  "id": "sec-variance-df-4-2",
  "level": "2",
  "url": "sec-variance-df.html#sec-variance-df-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "degrees of freedom "
},
{
  "id": "sec-rmse",
  "level": "1",
  "url": "sec-rmse.html",
  "type": "Section",
  "number": "7.5",
  "title": "Root Mean Squared Error (advanced)",
  "body": " Root Mean Squared Error (advanced)  The root mean squared error summarises how close the values in a data set are to a target, k.   Distance of values from a target, k  The distance of a single random value from a target is called its error.   TODO: IMAGE PLACEHOLDER     Root mean squared error  One solution to the problem of negative errors is to square them before averaging,     To express this in the original units of the data (instead of units such as squared kg), we can take its square root:     The root mean squared error is a 'typical' error.   "
},
{
  "id": "sec-distances-mean",
  "level": "1",
  "url": "sec-distances-mean.html",
  "type": "Section",
  "number": "7.6",
  "title": "Distances from the Mean (advanced)",
  "body": " Distances from the Mean (advanced)  The standard deviation is similar to the root mean squared error, but summarises distances to the mean of the data. Its value can be interpreted in terms of the average area of squares on a graph.   Distances from the centre of the distribution  The population standard deviation is similar to the root mean square error but summarises the distances of the values from the centre of their distribution. It summarises the spread of values in the data.     This can be illustrated graphically the squared standard deviation is the average of the squared distances of values to their mean:   TODO: IMAGE PLACEHOLDER   Standard deviations in reports are likely to be sample standard deviation.   "
},
{
  "id": "sec-illustrative-data",
  "level": "1",
  "url": "sec-illustrative-data.html",
  "type": "Section",
  "number": "8.1",
  "title": "Illustrative Data Set",
  "body": " Illustrative Data Set  A data set containing annual rainfalls in Samaru, Nigeria, will be used for illustrative purposes.   Annual rainfall in Samaru, Nigeria  In most of Africa, the most important climatic variable is rainfall. Rainfall is usually highly seasonal and failure of crops is normally associated with late arrival of rain or low rainfall. A better understanding of the distribution of rainfall can affect the crops that are grown and when they are planted.  The annual rainfall (in mm) in Samaru, Northern Nigeria between 1928 and 1983 will be used as an example in this section.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-cumulative-proportions",
  "level": "1",
  "url": "sec-cumulative-proportions.html",
  "type": "Section",
  "number": "8.2",
  "title": "Cumulative Proportions",
  "body": " Cumulative Proportions  Half the data are lower than the median. A quarter and three quarters are lower than the lower and upper quartiles. At any other value, x, the proportion of data values that are x or lower is called its cumulative proportion.   Cumulative proportions  The proportion of values in the data set that are less than or equal to any value, , is called its cumulative proportion .  For the median and quartiles, the cumulative proportions are:   Cumulative proportions for quartiles    Value  Proportion Below   Lower Quartile 0.25  Median 0.5  Upper Quartile 0.75    The proportion of values greater than is one minus its cumulative proportion,       Equality  For continuous data, we do not need to distinguish between the proportion of values less than and the proportion that are less than or equal to . Provided the values are recorded accurately enough,   these two proportions are usually equal for most of interest, and  since the same value rarely appears more than once, the difference is unlikely to be more than .   However for discrete data (counts) it is important to distinguish the terms 'less than' and 'less than or equal to'.   "
},
{
  "id": "sec-cumulative-proportions-3-2",
  "level": "2",
  "url": "sec-cumulative-proportions.html#sec-cumulative-proportions-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cumulative proportion "
},
{
  "id": "sec-cumulative-proportions-3-4",
  "level": "2",
  "url": "sec-cumulative-proportions.html#sec-cumulative-proportions-3-4",
  "type": "Table",
  "number": "8.2.1",
  "title": "Cumulative proportions for quartiles",
  "body": " Cumulative proportions for quartiles    Value  Proportion Below   Lower Quartile 0.25  Median 0.5  Upper Quartile 0.75   "
},
{
  "id": "sec-graph-cumulative",
  "level": "1",
  "url": "sec-graph-cumulative.html",
  "type": "Section",
  "number": "8.3",
  "title": "Graph of Cumulative Proportions",
  "body": " Graph of Cumulative Proportions  A graph of the cumulative proportion below x against x is a step function that increases from zero (at small x) to one (at high x).   Cumulative distribution function  The cumulative proportion of values less than or equal to can be found for any . They can be shown together in a single graph of the cumulative proportion against . This is called the cumulative distribution function of the variable.   TODO: IMAGE PLACEHOLDER   The cumulative distribution function for a data set with values is a step function that rises from 0.0 below the minimum x-value to 1.0 at the maximum in the data. It increases by at each value in the data set.   "
},
{
  "id": "sec-graph-cumulative-3-2",
  "level": "2",
  "url": "sec-graph-cumulative.html#sec-graph-cumulative-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "cumulative distribution function "
},
{
  "id": "sec-percentiles",
  "level": "1",
  "url": "sec-percentiles.html",
  "type": "Section",
  "number": "8.4",
  "title": "Percentiles",
  "body": " Percentiles  Given any target proportion, p, it is possible to find a corresponding value, x, for which approximately this proportion of values is x or lower. For example, the percentile for p = 50% is the median.   TODO: IMAGE PLACEHOLDER    Finding percentiles  Given any proportion, , between 0 and 1, we can find a value such that approximately this proportion, , of values is or lower in our data set. This is called the 'th quantile in the data set. When is given as a percentage, the same value is called the 'th percentile .   Important  The 'th percentile is the value such that percent of the data set are or lower.   Percentiles can be read from a graph of the cumulative distribution function.   TODO: IMAGE PLACEHOLDER     Details (optional)  It may not be possible to find a value, , such that exactly percent of the data are lower, expecially if the sample size is not a multiple of 100. If , the cumulative distribution function is a step function that rises by at each data value, so it is impossible to find an x-value for which exactly say 43% of values are lower.  There is no universally accepted general definition of percentiles and different statistical programs give slightly different values. The differences are minor and should not affect your interpretation of the data.   "
},
{
  "id": "sec-percentiles-4-2",
  "level": "2",
  "url": "sec-percentiles.html#sec-percentiles-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quantile percentile "
},
{
  "id": "sec-displaying-percentiles",
  "level": "1",
  "url": "sec-displaying-percentiles.html",
  "type": "Section",
  "number": "8.5",
  "title": "Displaying Percentiles",
  "body": " Displaying Percentiles  The 0, 25, 50, 75 and 100'th percentiles are displayed as a box plot. Other percentiles can be displayed in a similar shaded rectangle.   25, 50 and 75% percentiles  The 50th percentile is the median and the 25th and 75th percentiles are the lower and upper quartiles. A box plot therefore shows these percentiles.   TODO: IMAGE PLACEHOLDER     Displaying other percentiles  For some data sets, other percentiles are more important than the 25th and 75th ones. A similar 'box' can be used to graphically display any other percentiles. It is best to alter the way the box is drawn to avoid confusion with the standard box plot.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-comparing-groups-percentiles",
  "level": "1",
  "url": "sec-comparing-groups-percentiles.html",
  "type": "Section",
  "number": "8.6",
  "title": "Comparing Groups",
  "body": " Comparing Groups  Box plots are useful for comparing groups. If the groups are in order (e.g. the months of a year), the median, quartiles and extremes can be joined and shaded as bands. This effectively describes how the distribution of values varies.   Joined-up quartiles  Box plots are an effective way to compare the distributions of different groups of values. When the groups are ordered, an alternative to the conventional display of the box plots is to join up the medians, quartiles and extremes of the groups in shaded bands.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-comparing-other-percentiles",
  "level": "1",
  "url": "sec-comparing-other-percentiles.html",
  "type": "Section",
  "number": "8.7",
  "title": "Comparing Groups with Other Percentiles",
  "body": " Comparing Groups with Other Percentiles  In some applications, different percentiles are important. They can also be joined and shaded as bands to compare ordered groups.   Joined-up percentiles  A similar display can be used with other percentiles.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-better-definition-percentiles",
  "level": "1",
  "url": "sec-better-definition-percentiles.html",
  "type": "Section",
  "number": "8.8",
  "title": "Better Definition of Percentiles",
  "body": " Better Definition of Percentiles  The graph of cumulative probabilities is a step function. Most software reports percentiles that are equivalent to reading values off a smoothed version of this step function.   Different definitions of percentiles  It was mentioned earlier that there are several competing definitions of the upper and lower quartile. All such definitions split the data approximately into quarters but there is not a unique way to do this.  There is even less agreement about the precise definition of other percentiles, and different computer software finds them in different ways. The definitions are usually based on a smoothed version of the cumulative distribution function.   TODO: IMAGE PLACEHOLDER   The differences between the different definitions are small if the data set is large.   Important  If your conclusion about the data would change with a different definition of the percentiles, you are over-interpreting the data.    "
},
{
  "id": "sec-linear-transformations",
  "level": "1",
  "url": "sec-linear-transformations.html",
  "type": "Section",
  "number": "9.1",
  "title": "Linear Transformations",
  "body": " Linear Transformations  Linear transformations of data affect the scale on the axis of graphical displays, but do not otherwise change the shape of the distribution of values.   Linear transformations  When the values are replaced by other using an equation of the form     we say that there has been a linear transformation of the original values. The original and transformed data can be displayed together with dual axes.   TODO: IMAGE PLACEHOLDER     Centre and spread  The centre and spread of the data are different, but the shape of the distribution otherwise remains unchanged. The mean and standard deviation are related:   Note that if the scale factor, , is negative, we must change its sign since the standard deviation must always be positive.  Most other measures of centre (e.g. the median) and spread (e.g. the interquartile range) are similarly related.   "
},
{
  "id": "sec-linear-transformations-3-4",
  "level": "2",
  "url": "sec-linear-transformations.html#sec-linear-transformations-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear transformation "
},
{
  "id": "sec-log-transformations",
  "level": "1",
  "url": "sec-log-transformations.html",
  "type": "Section",
  "number": "9.2",
  "title": "Log Transformations",
  "body": " Log Transformations  Nonlinear transformations change the shape of the distribution of values more profoundly. A logarithmic transformation can help detect patterns in very skew data sets.   Nonlinear transformations  Nonlinear transformations arise when the values are replaced by a nonlinear function of the original measurements, such as their logarithm or inverse. They have a more fundamental effect on the shape of a distribution than linear transformations.  The most commonly used nonlinear transformation is:     Natural logarithms (base e) have a similar effect on the distribution of values but base-10 logarithms are easier to interpret so we use them here.    Properties of logarithms   Multiplying any value by 10 increases its logarithm by 1.  Doubling any value increases its logarithm by .   Consider four values 1, 10, 100 and 1000. The first two values are much closer to each other than the last two values. However their logarithms are 0, 1, 2 and 3, so their logarithms are evenly spaced out.    Effect on the shape of a distribution  A logarithmic transformation selectively spreads out low values in a distribution and compresses high values. It is therefore useful before analysing skew data with a long tail towards the high values. It will spread out a dense cluster of low values and may detect clustering or outliers that would not be visible in graphical displays of the original data.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-when-use-log",
  "level": "1",
  "url": "sec-when-use-log.html",
  "type": "Section",
  "number": "9.3",
  "title": "When to Use a Log Transformation?",
  "body": " When to Use a Log Transformation?  Logarithmic transformations are most useful for 'quantity' data that cover several orders of magnitude.   'Quantities'  Logarithmic transformation can only be used for data sets consisting of positive values logarithms are undefined for negative or zero values. They are therefore particularly useful for quantities i.e. amounts of something. Indeed, many researchers routinely apply logarithmic transformation to quantity data before analysis.    When are they effective?  A log transformation affects the shape of the distribution most when the ratio of the largest to the smallest value in the data is large. When this ratio is less than 10 (one order of magnitude) then the transformation has much less influence on the shape of the distribution, as in the data set below.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-power-transformations",
  "level": "1",
  "url": "sec-power-transformations.html",
  "type": "Section",
  "number": "9.4",
  "title": "Power Transformations (advanced)",
  "body": " Power Transformations (advanced)  Power transformations are a more flexible family of nonlinear transformations that are useful in data exploration.   Power transformations  A more general family of transformations that is flexible enough to reduce or eliminate the skewness in a wide range of data sets is:   TODO: IMAGE PLACEHOLDER   This family of power transformations includes many common ones:   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-power-skewness",
  "level": "1",
  "url": "sec-power-skewness.html",
  "type": "Section",
  "number": "9.5",
  "title": "Power Transforms and Skewness",
  "body": " Power Transforms and Skewness  The effect of power transformations on the skewness of data is evident in a wide range of graphical displays.   Effect of power transformations  Power transformations affect the skewness of data.  If a power transformation with is applied to data with a symmetric distribution, it will make the data skew with a long right tail. If the power transformation has , the distribution will become one with a long left tail.  In practice, power transformations are used to do the opposite. They can change many skewness distributions into fairly symmetric ones.   "
},
{
  "id": "sec-discrete-continuous",
  "level": "1",
  "url": "sec-discrete-continuous.html",
  "type": "Section",
  "number": "10.1",
  "title": "Discrete and Continuous Data",
  "body": " Discrete and Continuous Data  Discrete data sets contain counts whereas continuous data sets could potentially contain any values within an interval. Stacked dot plots are good displays of small discrete data sets containing small counts.  It is important to distinguish two types of numerical data.   Discrete data   When the values in the batch are whole numbers (counts), the data set is called discrete .   Continuous data   When the data are not constrained to be whole numbers, the data set is called continuous .   Dot plots for counts  Dot plots can be used to display count data. However since discrete values are often repeated several times in a data set, the crosses need to be jittered or, preferably, stacked.   TODO: IMAGE PLACEHOLDER   If there is a stack for each integer value, the stacked dot plot is a complete representation of the data.   "
},
{
  "id": "sec-discrete-continuous-5",
  "level": "2",
  "url": "sec-discrete-continuous.html#sec-discrete-continuous-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "discrete "
},
{
  "id": "sec-discrete-continuous-7",
  "level": "2",
  "url": "sec-discrete-continuous.html#sec-discrete-continuous-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "continuous "
},
{
  "id": "sec-histograms-counts",
  "level": "1",
  "url": "sec-histograms-counts.html",
  "type": "Section",
  "number": "10.2",
  "title": "Histograms for Counts",
  "body": " Histograms for Counts  When the range of possible counts is moderate or large, a histogram is an effective display of the distribution. Class width should be a whole number and class boundaries should end in '.5'.   Displaying moderate or large counts  For discrete data sets whose values are large counts, a histogram can be used to give a 'smooth' summary of the shape of the distribution of values.  If the counts are a bit smaller, the exact definition of the histogram classes becomes important. The class boundaries should end in '.5' to ensure that data values do not occur on the boundary of two classes.   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-bar-charts",
  "level": "1",
  "url": "sec-bar-charts.html",
  "type": "Section",
  "number": "10.3",
  "title": "Bar Charts",
  "body": " Bar Charts  When the range of possible counts is small, a bar chart is a better representation of the data than a histogram.   Displaying small counts  When the range of values in a discrete data set is small, a histogram can be drawn with class width 1 (and with class boundaries ending in '.5'). These classes are centred on 1, 2, 3, etc.  This can be improved by narrowing the histogram rectangles into bars to emphasise the discrete nature of the data. This is called a bar chart .   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-bar-charts-3-3",
  "level": "2",
  "url": "sec-bar-charts.html#sec-bar-charts-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bar chart "
},
{
  "id": "sec-mean-sd-discrete",
  "level": "1",
  "url": "sec-mean-sd-discrete.html",
  "type": "Section",
  "number": "10.4",
  "title": "Mean and Standard Deviation (advanced)",
  "body": " Mean and Standard Deviation (advanced)  A frequency table is often used to summarise discrete data. The mean and standard deviation can be evaluated easily from the frequency table.   Calculating the mean from a frequency table   Frequency table       1 140  2 180  3 60  4 100  5 60  6 40  7 20  total 600     TODO: IMAGE PLACEHOLDER   More generally,     where the summation is over the distinct values in the data set, rather than all individuals.    Calculating the standard deviation  A similar formula holds for the standard deviation, using the formula   TODO: IMAGE PLACEHOLDER    "
},
{
  "id": "sec-mean-sd-discrete-3-2",
  "level": "2",
  "url": "sec-mean-sd-discrete.html#sec-mean-sd-discrete-3-2",
  "type": "Table",
  "number": "10.4.1",
  "title": "Frequency table",
  "body": " Frequency table       1 140  2 180  3 60  4 100  5 60  6 40  7 20  total 600   "
},
{
  "id": "subsec-more-than-one-variable",
  "level": "1",
  "url": "subsec-more-than-one-variable.html",
  "type": "Subsection",
  "number": "11.1.1",
  "title": "More than One Variable",
  "body": " More than One Variable  Many data sets contain two or more measurements from each individual. Even when the main interest is in one variable, the others can help to understand its distribution.   The data matrix  Many datasets contain several measurements from each individual (or plant, item or other unit). Each measurement type is called a variable .  A data set with more than one variable is called multivariate . One with two variables is called bivariate .   "
},
{
  "id": "subsec-more-than-one-variable-3-2",
  "level": "2",
  "url": "subsec-more-than-one-variable.html#subsec-more-than-one-variable-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "individual variable "
},
{
  "id": "subsec-more-than-one-variable-3-3",
  "level": "2",
  "url": "subsec-more-than-one-variable.html#subsec-more-than-one-variable-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multivariate bivariate "
},
{
  "id": "subsec-scatterplot-definition",
  "level": "1",
  "url": "subsec-scatterplot-definition.html",
  "type": "Subsection",
  "number": "11.1.2",
  "title": "Scatterplots",
  "body": " Scatterplots  The main display that shows the relationship between two variables is a scatterplot.   Scatterplots  A scatterplot shows each individual as a single cross against a vertical axis (for the variable, ) and a horizontal axis (for the other variable, ).  By convention, the variable on the vertical axis is called and the variable on the horizontal axis is called .   "
},
{
  "id": "subsec-limitations-univariate",
  "level": "1",
  "url": "subsec-limitations-univariate.html",
  "type": "Subsection",
  "number": "11.1.3",
  "title": "Limitations of Univariate Displays",
  "body": " Limitations of Univariate Displays  Univariate displays don't show relationships between variables.   Scatterplots are needed to display relationships  The relationship between two variables cannot be determined from examination of the two variables in isolation. The two datasets shown in the scatterplots below have the same marginal distributions for and , but the variables are related in very different ways.      "
},
{
  "id": "subsec-limitations-univariate-3-2",
  "level": "2",
  "url": "subsec-limitations-univariate.html#subsec-limitations-univariate-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "marginal distributions "
},
{
  "id": "subsec-marginal-distributions",
  "level": "1",
  "url": "subsec-marginal-distributions.html",
  "type": "Subsection",
  "number": "11.1.4",
  "title": "Marginal Distributions",
  "body": " Marginal Distributions  A scatterplot of two variables can be enhanced with box plots or histograms on the margins of a scatterplot.   Marginal distributions  Although they do not contain information about the relationship between the variables, a display of the marginal distributions can be usefully added to a scatterplot to enhance it, perhaps highlighting skewness in and .      "
},
{
  "id": "subsec-time-series",
  "level": "1",
  "url": "subsec-time-series.html",
  "type": "Subsection",
  "number": "11.1.5",
  "title": "Time Series",
  "body": " Time Series  When a single measurement is made at regular intervals, the data are called a time series. Time series data can be treated as bivariate, with time being the second variable.   Time-ordering of univariate data  Some data sets are apparently univariate, but the measurements are made sequentially in time. A data set of this form is called a time series .  The time at which each measurement was made may be treated as an additional numerical variable, and the measurement can then be plotted against time. This type of scatterplot is often called a time series plot .  Time series data can be displayed and analysed with many of the techniques that are used for bivariate data.  Additional methods of analysis that are specific to time series data will be presented in a later chapter.   "
},
{
  "id": "subsec-time-series-3-2",
  "level": "2",
  "url": "subsec-time-series.html#subsec-time-series-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "time series "
},
{
  "id": "subsec-time-series-3-3",
  "level": "2",
  "url": "subsec-time-series.html#subsec-time-series-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "time series plot "
},
{
  "id": "subsec-strength-relationship",
  "level": "1",
  "url": "subsec-strength-relationship.html",
  "type": "Subsection",
  "number": "11.2.1",
  "title": "Strength of a Relationship",
  "body": " Strength of a Relationship  The main feature of interest in a scatterplot is the strength of the relationship between the two variables.   Strength of relationship  The most important information that a scatterplot shows is the strength of the relationship between the variables. The closer the points to a straight line or curve, the stronger the relationship.  If higher values of one variable tend to be associated with higher values of the other variable, the crosses on the scatterplot will be in a band with positive slope and the relationship is said to be positive . If high values of one variable tend to be associated with low values of the other variable, we say that there is a negative relationship.   "
},
{
  "id": "subsec-strength-relationship-3-2",
  "level": "2",
  "url": "subsec-strength-relationship.html#subsec-strength-relationship-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "strength "
},
{
  "id": "subsec-strength-relationship-3-3",
  "level": "2",
  "url": "subsec-strength-relationship.html#subsec-strength-relationship-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive negative "
},
{
  "id": "subsec-outliers-bivariate",
  "level": "1",
  "url": "subsec-outliers-bivariate.html",
  "type": "Subsection",
  "number": "11.2.2",
  "title": "Outliers",
  "body": " Outliers  An extreme value of one or both of the variables is an outlier. An unusual combination of values is also called an outlier.  The strength of the relationship between two variables is usually the most important information that we gain from a scatterplot but a scatterplot may display other features.   Outliers  Values that seem 'different' from the rest of the data are called outliers .  An outlier may be an extreme value of one or other variable, but an individual may be an outlier even though neither nor is unusual on its own. One point is an outlier in each of the three data sets below.     The point is an outlier in the righthand data set because it lies well above the main group of points its -value is much higher than others with similar -values.    Importance of outliers  Outliers are features of a data set that must be carefully checked. An outlier is often caused by a recording or transcription error, so...  First check that the values of the variables are correctly recorded.  Sometimes an outlier arises because an individual is fundamentally different from the others. Identifying what makes the individual different often gives considerable insight into the data.  The individuals should be further examined (perhaps collecting further information from them) to try to assess whether the outlier individual has distinct characteristics.  An outlier that is either extreme or that has other distinctive characteristics would often be deleted from the data set, but should be mentioned in a report about the data.   "
},
{
  "id": "subsec-outliers-bivariate-4-2",
  "level": "2",
  "url": "subsec-outliers-bivariate.html#subsec-outliers-bivariate-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outliers "
},
{
  "id": "subsec-clusters-bivariate",
  "level": "1",
  "url": "subsec-clusters-bivariate.html",
  "type": "Subsection",
  "number": "11.2.3",
  "title": "Clusters",
  "body": " Clusters  If the crosses on a scatterplot separate into clusters, different groups of individuals are suggested.   Clusters  Sometimes the cloud of crosses separates into two or more groups which are called clusters . As with outliers, clusters provide important information that should be further investigated.     The individuals should be examined (perhaps collecting further information from them) to assess whether the clusters correspond to individuals with distinct characteristics. For example, the clusters may correspond to males and females, or two different species of plant.   "
},
{
  "id": "subsec-clusters-bivariate-3-2",
  "level": "2",
  "url": "subsec-clusters-bivariate.html#subsec-clusters-bivariate-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "clusters "
},
{
  "id": "subsec-overinterpretation",
  "level": "1",
  "url": "subsec-overinterpretation.html",
  "type": "Subsection",
  "number": "11.2.4",
  "title": "Dangers of Over-interpretation",
  "body": " Dangers of Over-interpretation  In small data sets, there may be considerable variability, so patterns should be strongly evident before they are reported.   Interpreting outliers or clusters  We have described some information that may be read from a scatterplot. But how strong must the corresponding patterns be before we should report them?  In both univariate and bivariate data sets, outliers or clusters must be distinct before we should conclude that they are real, in the absence of further external information confirming that the individuals are distinct.  Particularly in small data sets, outliers, clusters and other patterns may arise by chance , without being associated with any real features in the individuals.   Important! Be careful not to overinterpret features in scatterplot unless they are well defined, especially if the sample size is small.   "
},
{
  "id": "subsec-explanatory-response",
  "level": "1",
  "url": "subsec-explanatory-response.html",
  "type": "Subsection",
  "number": "11.2.5",
  "title": "Explanatory and Response Variables",
  "body": " Explanatory and Response Variables  One variable can often be classified as an explanatory variable that either causally affects the response variable, or is useful for predicting its value.   Causal relationships  In many bivariate data sets, the relationship between the two variables is not symmetric. From the nature of the variables and the way that the data were collected, it may be clear that one variable, , can potentially influence the other, , but that the opposite is impossible.  In such data, the variable is called the explanatory variable and is called the response .    Experiments  In an experiment, the person conducting the experiment controls the values of the explanatory variable. A well-designed experiment always ensures that the relationship between the explanatory variable and response is causal.    Observational studies  If the person collecting the data has no control over either of the variables, and simply records a pair of values from each individual, then the data are called observational . If one variable is an earlier measurement than the other, we may also be able to treat it as an explanatory variable and the later variable as the response.  Even if the relationship is not causal, we are sometimes interested in predicting the value of one variable from the other. The variable being predicted would then be treated as the response.   "
},
{
  "id": "subsec-explanatory-response-3-3",
  "level": "2",
  "url": "subsec-explanatory-response.html#subsec-explanatory-response-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "explanatory variable response "
},
{
  "id": "subsec-explanatory-response-5-2",
  "level": "2",
  "url": "subsec-explanatory-response.html#subsec-explanatory-response-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "observational "
},
{
  "id": "subsec-units-for-xy",
  "level": "1",
  "url": "subsec-units-for-xy.html",
  "type": "Subsection",
  "number": "11.3.1",
  "title": "Units for X and Y",
  "body": " Units for X and Y  A numerical description of the strength of a relationship should not be affected by rescaling the variables.   Units and strength of a relationship  A numerical summary of the strength of the relationship between two variables should not depend on the units in which we measure the two variables. The strength of the two relationships between Angle and Temperature are the same in both of the scatterplots below.     We therefore start by defining units-free versions of the two variables and will summarise the strength of the relationship in terms of them.   "
},
{
  "id": "subsec-units-for-xy-3-4",
  "level": "2",
  "url": "subsec-units-for-xy.html#subsec-units-for-xy-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "units-free "
},
{
  "id": "subsec-z-scores",
  "level": "1",
  "url": "subsec-z-scores.html",
  "type": "Subsection",
  "number": "11.3.2",
  "title": "Units-free variables (z-scores)",
  "body": " Units-free variables (z-scores)  Standardising a variable gives z-scores that do not depend on the units of the original variable. (The correlation coefficient will be defined in terms of z-scores for and .)   Z-scores  The standardised form of a variable is found by subtracting its mean then dividing by its standard deviation,   The resulting values are called z-scores and are the same, whatever the units in which was originally recorded.    Properties of z-scores  A standardised variable always has zero mean and standard deviation one.   From the 70-95-100 rule-of-thumb [TODO: link to One Numerical Variable bit on that]:   About 70% of z-scores will be between and  About 95% of z-scores will be between and  Almost all z-scores will be between and   An individual's z-score tells you how many standard deviations it is above the mean. From its value, you can tell whether the value is very high (say over ) or low (say under ) in relation to the other values of the variable.   "
},
{
  "id": "subsec-z-scores-3-3",
  "level": "2",
  "url": "subsec-z-scores.html#subsec-z-scores-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "z-scores "
},
{
  "id": "subsec-correlation-coefficient",
  "level": "1",
  "url": "subsec-correlation-coefficient.html",
  "type": "Subsection",
  "number": "11.3.3",
  "title": "Correlation Coefficient",
  "body": " Correlation Coefficient  The correlation coefficient summarises the strength of the relationship between and . It is when the scatterplot crosses are on a straight line with positive slope, when on a line with negative slope, and zero when and are unrelated.   Definition  The correlation coefficient is usually defined by the formula where and are the z-scores for and .   "
},
{
  "id": "subsec-correlation-coefficient-3-2",
  "level": "2",
  "url": "subsec-correlation-coefficient.html#subsec-correlation-coefficient-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "correlation coefficient "
},
{
  "id": "subsec-scatterplots-and-r",
  "level": "1",
  "url": "subsec-scatterplots-and-r.html",
  "type": "Subsection",
  "number": "11.3.4",
  "title": "Scatterplots and the value of r",
  "body": " Scatterplots and the value of r  You should be able to estimate the value of from looking at a scatterplot and imagine a scatter of crosses corresponding to any value of .   How does relate to the shape of a scatterplot?  The properties on the previous page describe the general behaviour of the correlation coefficient, but do not give enough resolution for you to anticipate the type of scatterplot that might have correlation coefficient 0.8 say, or 0.96.     Note that values of between and correspond to very weak relationships.   "
},
{
  "id": "subsec-nonlinear-correlations",
  "level": "1",
  "url": "subsec-nonlinear-correlations.html",
  "type": "Subsection",
  "number": "11.3.5",
  "title": "Nonlinear Relationships",
  "body": " Nonlinear Relationships  The correlation coefficient is only a good measure of the strength of a relationship if the points in a scatterplot are scattered round a straight line, not a curve.   Correlation and nonlinear relationships  The correlation coefficient, , is a good description of the strength of a relationship provided the crosses in a scatterplot of the data are not scattered round a curve . If the data are scattered round a curve, the relationship is called nonlinear and may seriously underestimate its strength.     The correlation coefficient does not describe the strength of nonlinear relationships adequately.   "
},
{
  "id": "subsec-nonlinear-correlations-3-2",
  "level": "2",
  "url": "subsec-nonlinear-correlations.html#subsec-nonlinear-correlations-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "subsec-r-limitations",
  "level": "1",
  "url": "subsec-r-limitations.html",
  "type": "Subsection",
  "number": "11.3.6",
  "title": "R does not tell the whole story",
  "body": " R does not tell the whole story  The correlation coefficient cannot identify curvature, outliers or clusters and can be misleading if these features are present. A scatterplot must always be examined too.   Always look at a scatterplot first  Although the correlation coefficient is a good description of the strength of many relationships, it does not adequately describe others.  A scatterplot should always be examined to help assess whether there are features in the data that the correlation coefficient cannot describe.  The data sets below share the same value of (and the same means and st devns for and ) but their scatterplots show that different conclusions should be drawn from them.      "
},
{
  "id": "subsec-predicting-y-from-x",
  "level": "1",
  "url": "subsec-predicting-y-from-x.html",
  "type": "Subsection",
  "number": "11.4.1",
  "title": "Predicting Y from X",
  "body": " Predicting Y from X  A line or curve is useful for predicting the value of from a known value of .   The notion of prediction   Causal relationships   If one variable, , is thought to directly affect the other, , we might hope to predict the value of if the value of is changed.   Non-causal relationships   Even if the relationship is not causal, we are often still interested in predicting the value of one variable from a known value of the other variable.    Notation and convention  If the variables can be classified as an explanatory variable and a response, we use the letter to denote the explanatory variable and to denote the response.   Important: Always draw the response variable, , on the vertical axis of a scatterplot and on the horizontal axis.    Predicting the response  The correlation coefficient describes the strength of a relationship, but does not help you to predict from .  A curve or straight line that is drawn close to the crosses on a scatterplot (by eye or by any other method) is called a regression line and can be used to 'read off' the -value corresponding to any .   "
},
{
  "id": "subsec-predicting-y-from-x-5-3",
  "level": "2",
  "url": "subsec-predicting-y-from-x.html#subsec-predicting-y-from-x-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "regression line "
},
{
  "id": "subsec-linear-models",
  "level": "1",
  "url": "subsec-linear-models.html",
  "type": "Subsection",
  "number": "11.4.2",
  "title": "Linear Models",
  "body": " Linear Models  A straight line can often be used to predict one variable from another.   Equation to describe a regression line  A regression line could be drawn 'by eye' through a scatterplot, but we restrict attention to simple mathematical functions since they are easier and more objective to use.    Linear model  Some relationships must be described by curves, but a straight line is an adequate description of many bivariate data sets.   The constant is the intercept of the line and describes the -value when is zero. The constant is the line's slope ; it describes the change in when increases by one.  The predicted response at any -value is    "
},
{
  "id": "subsec-linear-models-4-3",
  "level": "2",
  "url": "subsec-linear-models.html#subsec-linear-models-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intercept slope "
},
{
  "id": "subsec-fitted-residuals",
  "level": "1",
  "url": "subsec-fitted-residuals.html",
  "type": "Subsection",
  "number": "11.4.3",
  "title": "Fitted Values and Residuals",
  "body": " Fitted Values and Residuals  The difference between the actual value of and the value predicted by a line is called a residual. Small residuals are clearly desirable.   Fitted values  To assess how well a particular linear model fits any one of our data points, , we might consider how well the model would predict the -value of the point, These predictions are called fitted values .    Residuals  The difference between the 'th fitted values and its actual -value is called its residual .   The residuals describe the 'errors' that would have resulted from using the model to predict from the -values of our data points.     Note that the residuals are the vertical distances of the crosses to the line .   "
},
{
  "id": "subsec-fitted-residuals-3-2",
  "level": "2",
  "url": "subsec-fitted-residuals.html#subsec-fitted-residuals-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fitted values "
},
{
  "id": "subsec-fitted-residuals-4-2",
  "level": "2",
  "url": "subsec-fitted-residuals.html#subsec-fitted-residuals-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residual "
},
{
  "id": "subsec-least-squares-method",
  "level": "1",
  "url": "subsec-least-squares-method.html",
  "type": "Subsection",
  "number": "11.4.4",
  "title": "Least Squares",
  "body": " Least Squares  The sum of squared residuals describes the accuracy of predictions from a line. The method of least squares positions the line to minimise the sum of squared residuals.   Aim of small residuals  The residuals from a linear model (vertical distances from the crosses to the line) indicate how closely the model's predictions match the actual responses in the data.  'Good' values for and can be objectively chosen to be the values that minimise the residual sum of squares. This is the method of least squares and the values of and are called least squares estimates .  The diagram below represents the squared residuals as blue squares. The least squares estimates minimise the total blue area.      "
},
{
  "id": "subsec-least-squares-method-3-3",
  "level": "2",
  "url": "subsec-least-squares-method.html#subsec-least-squares-method-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "method of least squares least squares estimates "
},
{
  "id": "subsec-curvature-outliers",
  "level": "1",
  "url": "subsec-curvature-outliers.html",
  "type": "Subsection",
  "number": "11.4.5",
  "title": "Curvature and Outliers",
  "body": " Curvature and Outliers  A linear model is not appropriate if there are either curvature or outliers in a scatterplot of the data. Outliers should be carefully examined.   Nonlinear relationships  A simple linear model is only appropriate when the cloud of crosses in a scatterplot of the data is regularly spread around a straight line. If the crosses are scattered round a curve , the relationship is called nonlinear and other models must be used.    Outliers  Another problem arises if there are outliers observations that do not conform to the pattern and variability exhibited by the rest of the data. In a linear model, the most important type of outlier is a data point that lies at a distance from the line that would fit through the rest of the data.  The individual corresponding to any outlier should be carefully examined. Recording or transcription errors may be the cause. Alternatively, it may be possible to determine some distinguishing characteristic of the individual that underlies the unusual response measurement.  If an outlier is extreme enough, or if a special cause for its unusual behaviour can be found from outside information, the individual can be classified as aberrant and deleted from the data set.   Important: It is important to look at any data set graphically before fitting a linear model to check that no curvature or outliers is present.   "
},
{
  "id": "subsec-curvature-outliers-3-2",
  "level": "2",
  "url": "subsec-curvature-outliers.html#subsec-curvature-outliers-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonlinear "
},
{
  "id": "subsec-curvature-outliers-4-2",
  "level": "2",
  "url": "subsec-curvature-outliers.html#subsec-curvature-outliers-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "outliers "
},
{
  "id": "subsec-residual-plots",
  "level": "1",
  "url": "subsec-residual-plots.html",
  "type": "Subsection",
  "number": "11.4.6",
  "title": "Residual Plots",
  "body": " Residual Plots  Outliers and curvature in the relationship are often displayed more clearly in a plot of residuals.   Detecting problems with the model  If outliers or curvature are present in a data set, they are often visible in a scatterplot of the response against the explanatory variable. However these features are usually clearer if the residuals are plotted against rather than the original response.      "
},
{
  "id": "subsec-residual-plots-3-2",
  "level": "2",
  "url": "subsec-residual-plots.html#subsec-residual-plots-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "residuals "
},
{
  "id": "subsec-predicting-x-from-y",
  "level": "1",
  "url": "subsec-predicting-x-from-y.html",
  "type": "Subsection",
  "number": "11.4.7",
  "title": "Predicting Y and Predicting X (advanced)",
  "body": " Predicting Y and Predicting X (advanced)  Least squares does not treat and symmetrically. The best line for predicting from is different from the best line for predicting from .   Different lines are used to predict Y and to predict X  The least squares line for predicting from , minimises the sum of squared vertical distances between the points on a scatterplot and the line. On the other hand, if we are interested in predicting from using a line, the residuals are the horizontal distances between the points and the line, and least squares minimises their sum of squares.  Different lines minimise the sum of squares of horizontal and vertical distances.    About the two least squares lines  The two least squares lines can be written in terms of standardised variables,  Equation of least squares line to predict from :   Equation of least squares line to predict from :   where is the correlation coefficient between and . Since is always less than 1, the least squares line for predicting from is the more horizontal (closer to being parallel to the -axis) of the two lines.      "
},
{
  "id": "subsec-transformations-correlation",
  "level": "1",
  "url": "subsec-transformations-correlation.html",
  "type": "Subsection",
  "number": "11.5.1",
  "title": "Transformations and Correlation",
  "body": " Transformations and Correlation  The correlation coefficient does not adequately describe the strength of a nonlinear relationship. Transforming the variables to linearise the relationship helps.   Correlation coefficient and nonlinear relationships  The correlation coefficient, , is a good description of the strength of linear relationship but not nonlinear ones. If a scatterplot shows marked curvature, the correlation coefficient can considerably understate the strength of the relationship.    Transform the variables to linearise the relationship  Nonlinear transformations of and alters the shape of the relationship. It is often possible to linearise a relationship by transforming one or both variables.  The strength of a nonlinear relationship can therefore be described with the correlation coefficient after a transformation to one or both variables has been applied to remove the nonlinearity .      "
},
{
  "id": "subsec-transformations-models",
  "level": "1",
  "url": "subsec-transformations-models.html",
  "type": "Subsection",
  "number": "11.5.2",
  "title": "Transformations and Models",
  "body": " Transformations and Models  If a relationship is nonlinear, a linear model can often be fitted to transformed response or explanatory variables.   Linear model with transformed variables  If the relationship between and is nonlinear, a linear model will give poor predictions and must be avoided.  However, by transforming one or both of the variables, it is often possible to linearise the relationship and therefore use least squares to fit a linear model to the transformed variables.     A logarithmic transformation of either or often works, but a more general power transformation is sometimes needed to linearise the relationship.   "
},
{
  "id": "subsec-quadratic-models",
  "level": "1",
  "url": "subsec-quadratic-models.html",
  "type": "Subsection",
  "number": "11.5.3",
  "title": "Quadratic Models",
  "body": " Quadratic Models  An alternative solution to nonlinearity is to fit a quadratic curve the data, again using the principle of least squares.   Adding a quadratic term  An alternative solution to the problem of curvature is to extend the simple linear model with the addition of a quadratic term,   Fitted values and residuals are defined (and interpreted) in a similar way to those for a linear model,   As in a linear model, the quadratic model's residuals are the vertical distances between the crosses in a scatterplot and the curve. We again use least squares to estimate the unknown parameters choose values of the three parameters to minimise the residual sum of squares,       "
},
{
  "id": "subsec-quadratic-models-3-4",
  "level": "2",
  "url": "subsec-quadratic-models.html#subsec-quadratic-models-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "least squares "
},
{
  "id": "subsec-extrapolation",
  "level": "1",
  "url": "subsec-extrapolation.html",
  "type": "Subsection",
  "number": "11.5.4",
  "title": "Dangers of Extrapolation",
  "body": " Dangers of Extrapolation  Since the form of a relationship is unknown beyond the range of -values in the data, it is always dangerous to extrapolate.   The shape of a relationship is only known around the data  The models that we have used to describe the relationship between a response, , and explanatory variable, , are usually only approximations to the 'real' relationship. For example, a scatterplot may look linear, but we really have no information about the shape of the relationship beyond our data.     A model may be useful for predicting from values of that are within the range of -values in our data, but we should be very cautious about using it to predict outside this range. This is called extrapolation and it can be badly in error.   IMPORTANT: Avoid using a model to predict far beyond the available data.   "
},
{
  "id": "subsec-extrapolation-3-4",
  "level": "2",
  "url": "subsec-extrapolation.html#subsec-extrapolation-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "extrapolation "
},
{
  "id": "sec-time-series-1",
  "level": "1",
  "url": "sec-time-series-1.html",
  "type": "Section",
  "number": "12.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-time-series-2",
  "level": "1",
  "url": "sec-time-series-2.html",
  "type": "Section",
  "number": "12.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-categorical-1",
  "level": "1",
  "url": "sec-categorical-1.html",
  "type": "Section",
  "number": "13.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-categorical-2",
  "level": "1",
  "url": "sec-categorical-2.html",
  "type": "Section",
  "number": "13.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-multivariate-1",
  "level": "1",
  "url": "sec-multivariate-1.html",
  "type": "Section",
  "number": "14.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-multivariate-2",
  "level": "1",
  "url": "sec-multivariate-2.html",
  "type": "Section",
  "number": "14.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-sampling-1",
  "level": "1",
  "url": "sec-sampling-1.html",
  "type": "Section",
  "number": "15.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-sampling-2",
  "level": "1",
  "url": "sec-sampling-2.html",
  "type": "Section",
  "number": "15.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-experiments-1",
  "level": "1",
  "url": "sec-experiments-1.html",
  "type": "Section",
  "number": "16.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-experiments-2",
  "level": "1",
  "url": "sec-experiments-2.html",
  "type": "Section",
  "number": "16.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-estimating-1",
  "level": "1",
  "url": "sec-estimating-1.html",
  "type": "Section",
  "number": "17.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-estimating-2",
  "level": "1",
  "url": "sec-estimating-2.html",
  "type": "Section",
  "number": "17.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-hypotheses-1",
  "level": "1",
  "url": "sec-hypotheses-1.html",
  "type": "Section",
  "number": "18.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-hypotheses-2",
  "level": "1",
  "url": "sec-hypotheses-2.html",
  "type": "Section",
  "number": "18.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-comparing-1",
  "level": "1",
  "url": "sec-comparing-1.html",
  "type": "Section",
  "number": "19.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-comparing-2",
  "level": "1",
  "url": "sec-comparing-2.html",
  "type": "Section",
  "number": "19.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-regression-1",
  "level": "1",
  "url": "sec-regression-1.html",
  "type": "Section",
  "number": "20.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-regression-2",
  "level": "1",
  "url": "sec-regression-2.html",
  "type": "Section",
  "number": "20.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "sec-independence-1",
  "level": "1",
  "url": "sec-independence-1.html",
  "type": "Section",
  "number": "21.1",
  "title": "Section 1",
  "body": " Section 1     "
},
{
  "id": "sec-independence-2",
  "level": "1",
  "url": "sec-independence-2.html",
  "type": "Section",
  "number": "21.2",
  "title": "Section 2",
  "body": " Section 2     "
},
{
  "id": "dataset-1",
  "level": "1",
  "url": "dataset-1.html",
  "type": "Section",
  "number": "A.1",
  "title": "Dataset 1",
  "body": " Dataset 1     "
},
{
  "id": "dataset-2",
  "level": "1",
  "url": "dataset-2.html",
  "type": "Section",
  "number": "A.2",
  "title": "Dataset 2",
  "body": " Dataset 2     "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
