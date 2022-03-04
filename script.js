// mô-đun được định nghĩa là một mảng
// [chức năng mô-đun, bản đồ của các yêu cầu]
//
// bản đồ yêu cầu là tên yêu cầu ngắn -> yêu cầu số
//
// bất kỳ thứ gì được xác định trong một gói trước đó đều được truy cập thông qua
// phương thức orig là yêu cầu cho các gói trước
parcelRequire  =  ( function  ( module ,  cache ,  entry ,  globalName )  {
    // Lưu yêu cầu từ gói trước vào phần đóng này nếu có
    var  beforeRequire  =  typeof  parcelRequire  ===  'function'  &&  parcelRequire ;
    var  nodeRequire  =  typeof  request  ===  'function'  &&  request ;
  
    function  newRequire ( name ,  jump )  {
      if  ( ! cache [ name ] )  {
        if  ( ! module [ name ] )  {
          // nếu chúng tôi không thể tìm thấy mô-đun trong bản đồ nội bộ của chúng tôi hoặc
          // bộ nhớ cache nhảy đến yêu cầu toàn cầu hiện tại tức là. gói cuối cùng
          // đã được thêm vào trang.
          var  currentRequire  =  typeof  parcelRequire  ===  'function'  &&  parcelRequire ;
          if  ( ! jump && currentRequire  ) {  
            return  currentRequire ( tên ,  true ) ;
          }
  
          // Nếu có các gói khác trên trang này, yêu cầu từ
          // cái trước đó được lưu vào 'beforeRequire'. Lặp lại điều này với tư cách
          // nhiều lần khi có các gói cho đến khi tìm thấy mô-đun hoặc
          // chúng ta làm cạn kiệt chuỗi yêu cầu.
          if  ( trước đó Yêu cầu )  {
            return  trước đóRequire ( tên ,  đúng ) ;
          }
  
          // Thử chức năng yêu cầu nút nếu nó tồn tại.
          if  ( nodeRequire  &&  typeof  name  ===  'string' )  {
            trả về  nodeRequire ( tên ) ;
          }
  
          var  err  =  new  Lỗi ( 'Không thể tìm thấy mô-đun \' '  +  tên  +  ' \ '' ) ;
          lỗi lầm . mã  =  'MODULE_NOT_FOUND' ;
          ném  sai ;
        }
  
        yêu cầu địa phương . quyết định  =  giải quyết ;
        yêu cầu địa phương . bộ nhớ đệm  =  { } ;
  
        var  module  =  cache [ name ]  =  new  newRequire . Mô-đun ( tên ) ;
  
        mô-đun [ tên ] [ 0 ] . call ( module . export ,  localRequire ,  module ,  module . export ,  this ) ;
      }
  
      trả về  bộ nhớ cache [ tên ] . hàng xuất khẩu ;
  
      function  localRequire ( x ) {
        trả về  newRequire ( localRequire . quyết định ( x ) ) ;
      }
  
      hàm  giải quyết ( x ) {
        trả về  mô-đun [ tên ] [ 1 ] [ x ]  ||  x ;
      }
    }
  
    chức năng  Mô-đun ( Tên mô- đun )  {
      cái này . id  =  moduleName ;
      cái này . bó  =  newRequire ;
      cái này . xuất khẩu  =  { } ;
    }
  
    yêu cầu mới . isParcelRequire  =  true ;
    yêu cầu mới . Module  =  Mô-đun ;
    yêu cầu mới . module  =  mô-đun ;
    yêu cầu mới . cache  =  bộ nhớ đệm ;
    yêu cầu mới . cha mẹ  =  beforeRequire ;
    yêu cầu mới . register  =  function  ( id ,  export )  {
      mô-đun [ id ]  =  [ chức năng  ( yêu cầu ,  mô-đun )  {
        mô-đun . xuất khẩu  =  xuất khẩu ;
      } ,  { } ] ;
    } ;
  
     lỗi var ;
    for  ( var  i  =  0 ;  i  <  entry . length ;  i ++ )  {
      thử  {
        newRequire ( entry [ i ] ) ;
      }  bắt  ( e )  {
        // Lưu lỗi đầu tiên nhưng thực thi tất cả các mục nhập
        if  ( ! error )  {
          lỗi  =  e ;
        }
      }
    }
  
    if  ( entry . length )  {
      // Hiển thị điểm nhập cho Node, AMD hoặc toàn cầu trình duyệt
      // Dựa trên https://github.com/ForbesLindesay/umd/blob/master/template.js
      var  mainExports  =  newRequire ( entry [ entry . length  -  1 ] ) ;
  
      // CommonJS
      if  ( typeof  export  ===  "object"  &&  typeof  module  ! ==  "undefined" )  {
        mô-đun . xuất khẩu  =  mainExports ;
  
      // Yêu cầuJS
      }  else  if  ( typeof  xác định  ===  "hàm"  &&  xác định . amd )  {
       xác định ( hàm  ( )  {
         trả về  mainExports ;
       } ) ;
  
      // <script>
      }  else  if  ( globalName )  {
        this [ globalName ]  =  mainExports ;
      }
    }
  
    // Ghi đè yêu cầu hiện tại bằng yêu cầu mới này
    parcelRequire  =  newRequire ;
  
    nếu  ( lỗi )  {
      // ném lỗi trước đó, _ sau khi cập nhật parcelRequire_
       lỗi ném ;
    }
  
    trả lại  newRequire ;
  } ) ( { "TNS6" : [ hàm ( yêu cầu , mô-đun , xuất )  {
  "sử dụng nghiêm ngặt" ;
  
  Đối tượng . defineProperty ( xuất ,  "__esModule" ,  {
    giá trị : true
  } ) ;
  hàng xuất khẩu . _getCache  =  xuất khẩu . _getSetter  =  xuất khẩu . _missingPlugin  =  xuất khẩu . _round  =  xuất khẩu . _roundModifier  =  xuất . _config  =  xuất khẩu . _ticker  =  hàng xuất khẩu . _plugins  =  xuất khẩu . _checkPlugin  =  xuất khẩu . _replaceRandom  =  xuất khẩu . _colorStringFilter  =  xuất ._sortPropTweensByPriority = exports._forEachName = exports._removeLinkedListItem = exports._setDefaults = exports._relExp = exports._renderComplexString = exports._isUndefined = exports._isString = exports._numWithUnitExp = exports._numExp = exports._getProperty = exports.shuffle = exports.interpolate = exports.unitize = exports.pipe = exports.mapRange = exports.toArray = exports.splitColor = exports.clamp = exports.getUnit = exports.normalize = exports.snap = exports.random = exports.distribute = exports.wrapYoyo = exports.wrap = exports.Circ = exports.Expo = exports.Sine = exports.Bounce = exports.SteppedEase = exports.Back = exports.Elastic = exports.Strong = exports.Quint = exports.Quart = exports.Cubic = exports.Quad = exports.Linear = exports.Power4 = exports.Power3 = exports.Power2 = exports.Power1 = exports.Power0 = exports.default = exports.gsap = exports.PropTween = exports.TweenLite = exports.TweenMax = exports.Tween = hàng xuất khẩu . TimelineLite  =  xuất khẩu . TimelineMax  =  xuất khẩu . Dòng thời gian  =  xuất khẩu . Hoạt ảnh  =  xuất khẩu . GSCache  =  void  0 ;
  
  function  _assertThisInitialized ( self )  {
    if  ( self  ===  void  0 )  {
      ném  mới  ReferenceError ( "cái này chưa được khởi tạo - super () chưa được gọi" ) ;
    }
  
    trở lại  bản thân ;
  }
  
  function  _inheritsLoose ( subClass ,  superClass )  {
    lớp con . nguyên mẫu  =  Đối tượng . tạo ( superClass . nguyên mẫu ) ;
    lớp con . nguyên mẫu . constructor  =  subClass ;
    lớp con . __proto__  =  superClass ;
  }
  / *!
   * GSAP 3.3.1
   * https://greensock.com
   *
   * @license Bản quyền 2008-2020, GreenSock. Đã đăng ký Bản quyền.
   * Tuân theo các điều khoản tại https://greensock.com/standard-license hoặc đối với
   * Câu lạc bộ GreenSock thành viên, thỏa thuận cấp với thành viên đó.
   * @author : Jack Doyle, jack@greensock.com
  * /
  
  / * eslint-disable * /
  
  
  var  _config  =  {
    autoSleep : 120 ,
    force3D : "tự động" ,
    nullTargetWarn : 1 ,
    đơn vị : {
      lineHeight : ""
    }
  } ,
      _defaults  =  {
    thời lượng : .5 ,
    ghi đè : false ,
    trì hoãn : 0
  } ,
      _bigNum  =  1e8 ,
      _tinyNum  =  1  /  _bigNum ,
      _2PI  =  Toán học . PI  *  2 ,
      _HALF_PI  =  _2PI  /  4 ,
      _gsID  =  0 ,
      _sqrt  =  Toán học . sqrt ,
      _cos  =  Toán học . cos ,
      _sin  =  Toán học . tội lỗi ,
      _isString  =  function  _isString ( value )  {
    trả về  giá trị typeof  === "string" ;  
  } ,
      _isFunction  =  function  _isFunction ( giá trị )  {
    trả về  giá trị typeof  === "hàm" ;  
  } ,
      _isNumber  =  function  _isNumber ( value )  {
    trả về  giá trị typeof  === "số" ;  
  } ,
      _isUndefined  =  function  _isUndefined ( value )  {
    trả về  giá trị typeof  === "không xác định" ;  
  } ,
      _isObject  =  function  _isObject ( value )  {
    trả về  giá trị typeof  === "đối tượng" ;  
  } ,
      _isNotFalse  =  function  _isNotFalse ( value )  {
     giá trị  trả về ! ==  false ;
  } ,
      _windowExists  =  function  _windowExists ( )  {
    trả về  cửa sổ typeof  ! == "không xác định" ;  
  } ,
      _isFuncOrString  =  function  _isFuncOrString ( value )  {
    return  _isFunction ( giá trị )  ||  _isString ( giá trị ) ;
  } ,
      _isArray  =  Mảng . isArray ,
      _strictNumExp  =  / (?: -? \. ? \ d | \. ) + / gi ,
      // chỉ số (bao gồm cả số âm và số thập phân) chứ KHÔNG phải giá trị tương đối.
  _numExp  =  / [ - + =. ] * \ d + [ .e \ - + ] * \ d * [ e \ - \ + ] * \ d * / g ,
      // tìm bất kỳ số nào, kể cả những số bắt đầu bằng + = hoặc - =, số âm và những số trong ký hiệu khoa học như 1e-8.
  _numWithUnitExp  =  / [ - + =. ] * \ d + [ .e- ] * \ d * [ az% ] * / g ,
      _complexStringNumExp  =  / [ - + =. ] * \ d + (?: \. | e- | e ) * \ d * / gi ,
      // sao chép để trong khi chúng ta lặp qua các kết quả phù hợp từ execute (), nó không làm ảnh hưởng đến lastIndex của _numExp mà chúng ta cũng sử dụng để tìm kiếm màu sắc.
  _p ngoặc đơnExp  =  / \ ( ( [ ^ () ] + ) \) / i ,
      // tìm chuỗi giữa các dấu ngoặc đơn.
  _relExp  =  / [ + - ] = -? [ \. \ d ] + / ,
      _delimitedValueExp  =  / [ # \ - +. ] * \ b [ az \ d - = +%. ] + / gi ,
      _globalTimeline ,
      _win ,
      _coreInitted ,
      _doc ,
      _globals  =  { } ,
      _installScope  =  { } ,
      _coreReady ,
      _install  =  function  _install ( phạm vi )  {
    return  ( _installScope  =  _merge ( scope ,  _globals ) )  &&  gsap ;
  } ,
      _missingPlugin  =  function  _missingPlugin ( thuộc tính ,  giá trị )  {
    trả lại  bảng điều khiển . cảnh báo ( "Thuộc tính không hợp lệ" , thuộc  tính ,  "được đặt thành" ,  giá trị ,  "Thiếu plugin? gsap.registerPlugin ()" ) ;
  } ,
      _warn  =  function  _warn ( thông báo ,  ngăn chặn )  {
    trở lại  ! ngăn chặn  &&  bảng điều khiển . cảnh báo ( tin nhắn ) ;
  } ,
      _addGlobal  =  function  _addGlobal ( name ,  obj )  {
    trả về  tên  &&  ( _globals [ name ]  =  obj )  &&  _installScope  &&  ( _installScope [ name ]  =  obj )  ||  _ cầu vồng ;
  } ,
      _emptyFunc  =  function  _emptyFunc ( )  {
    trả về  0 ;
  } ,
      _reservedProps  =  { } ,
      _lazyTweens  =  [ ] ,
      _lazyLookup  =  { } ,
      _lastRenderedFrame ,
      _plugins  =  { } ,
      _effects  =  { } ,
      _nextGCFrame  =  30 ,
      _harnessPlugins  =  [ ] ,
      _callbackNames  =  "" ,
      _harness  =  function  _harness ( mục tiêu )  {
    var  target  =  target [ 0 ] ,
        khai thácPlugin ,
        tôi ;
  
    if  ( ! _isObject ( target )  &&  ! _isFunction ( target ) )  {
      target  =  [ mục tiêu ] ;
    }
  
    if  ( ! ( harnessPlugin  =  ( target . _gsap  ||  { } ) . harness ) )  {
      i  =  _harnessPlugins . chiều dài ;
  
      while  ( i -  &&  ! _harnessPlugins [ i ] . targetTest ( target ) )  { }
  
      harnessPlugin  =  _harnessPlugins [ i ] ;
    }
  
    i  =  mục tiêu . chiều dài ;
  
    trong khi  ( tôi - )  {
      target [ i ]  &&  ( target [ i ] . _gsap  ||  ( target [ i ] . _gsap  =  new  GSCache ( target [ i ] ,  harnessPlugin ) ) )  ||  các mục tiêu . mối nối ( i ,  1 ) ;
    }
  
    trả lại  mục tiêu ;
  } ,
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property) {
    var currentValue = target[property];
    return _isFunction(currentValue) ? target[property]() : _isUndefined(currentValue) && target.getAttribute(property) || currentValue;
  },
      _forEachName = function _forEachName(names, func) {
    return  ( names  =  names . split ( "," ) ) . forEach ( func )  ||  những cái tên ;
  } ,
      // tách danh sách tên được phân tách bằng dấu phẩy thành một mảng, sau đó chạy hàm forEach () và trả về mảng đã chia (đây chỉ là một cách để hợp nhất / rút ngắn một số đoạn mã).
  _round  =  function  _round ( value )  {
    trả về  Toán . vòng ( giá trị  *  100000 )  /  100000  ||  Số 0 ;
  } ,
      _arrayContainsAny  =  function  _arrayContainsAny ( toSearch ,  toFind )  {
    // tìm kiếm một mảng để tìm các kết quả phù hợp cho bất kỳ mục nào trong mảng toFind. Ngay sau khi tìm thấy một, nó sẽ trả về true. Nó KHÔNG trả về tất cả các trận đấu; nó chỉ đơn giản là một tìm kiếm boolean.
    var  l  =  toFind . chiều dài ,
        i  =  0 ;
  
    for  ( ;  toSearch . indexOf ( toFind [ i ] )  <  0  &&  ++ i  <  l ; )  { }
  
    trả về  i  <  l ;
  } ,
      _parseVars  =  function  _parseVars ( params ,  type ,  parent )  {
    // đọc các đối số được truyền đến một trong các phương thức chính và tìm ra liệu người dùng có đang xác định mọi thứ bằng cú pháp OLD / kế thừa trong đó thời lượng là tham số thứ 2 hay không, sau đó nó sẽ điều chỉnh mọi thứ cho phù hợp và trả lại đối tượng vars đã sửa (với thời lượng được thêm vào nếu cần thiết, cũng như runBackwards hoặc startAt hoặc ngay lập tứcRender). gõ 0 = to () / stereoverTo (), 1 = from () / steregerFrom (), 2 = fromTo () / steregerFromTo ()
    var  isLegacy  =  _isNumber ( params [ 1 ] ) ,
        varsIndex  =  ( isLegacy ? 2 : 1 )  +  ( type  <  2 ? 0 : 1 ) ,
        vars  =  params [ varsIndex ] ,
        irVars ;
  
    if  ( isLegacy )  {
      vars . thời lượng  =  params [ 1 ] ;
    }
  
    vars . cha  =  mẹ ;
  
    if  ( type )  {
      irVars  =  vars ;
  
      while  ( cha  &&  ! ( "ngay lập tức"  trong  irVars ) )  {
        // kế thừa chưa xảy ra, nhưng ai đó có thể đã đặt giá trị mặc định trong dòng thời gian tổ tiên. Chúng ta có thể thực hiện vars.im InstantRender = _isNotFalse (_inheritDefaults (vars) .im InstantRender) nhưng điều đó sẽ chính xác là một hình phạt hiệu suất nhẹ vì _inheritDefaults () cũng chạy trong hàm tạo Tween. Chúng tôi đang trả một mức giá kb nhỏ ở đây để đạt được tốc độ.
        irVars  =  cha mẹ . vars . mặc định  ||  { } ;
        cha  =  _isNotFalse ( cha . vars . inherit )  &&  cha . cha, mẹ ;
      }
  
      vars . ngay lập tứcRender  =  _isNotFalse ( irVars . ngay lập tứcRender ) ;
  
      if  ( gõ  <  2 )  {
        vars . runBackwards  =  1 ;
      }  khác  {
        vars . startAt  =  params [ varsIndex  -  1 ] ;  // vars "from"
      }
    }
  
    trả lại  vars ;
  } ,
      _lazyRender  =  function  _lazyRender ( )  {
    var  l  =  _lazyTweens . chiều dài ,
        a  =  _lazyTweens . lát ( 0 ) ,
        tôi ,
        tuổi mười bảy ;
  
    _lazyLookup  =  { } ;
    _lazyTweens . chiều dài  =  0 ;
  
    for  ( i  =  0 ;  i  <  l ;  i ++ )  {
      tween  =  a [ i ] ;
      tween  &&  tween . _lazy  &&  ( tween . render ( tween . _lazy [ 0 ] ,  tween . _lazy [ 1 ] ,  true ) . _lazy  =  0 ) ;
    }
  } ,
      _lazySafeRender  =  function  _lazySafeRender ( hoạt ảnh ,  thời gian ,  ức chế ,  lực lượng )  {
    _lazyTweens . chiều dài  &&  _lazyRender ( ) ;
    hoạt hình . kết xuất ( thời gian ,  ngăn chặn ,  lực lượng ) ;
    _lazyTweens . chiều dài  &&  _lazyRender ( ) ;  // trong trường hợp việc kết xuất khiến bất kỳ tweens nào bị lazy-init, chúng ta nên kết xuất chúng vì thông thường khi ai đó gọi lệnh seek () hoặc time () hoặc process (), họ mong đợi kết xuất ngay lập tức.
  } ,
      _numericIfPossible  =  function  _numericIfPossible ( value )  {
    var  n  =  parseFloat ( giá trị ) ;
    return  ( n  ||  n  ===  0 )  &&  ( giá trị  +  "" ) . khớp ( _delimitedValueExp ) . chiều dài  <  2 ? n : giá trị ;
  } ,
      _passThrough  =  function  _passThrough ( p )  {
    trả lại  p ;
  } ,
      _setDefaults  =  function  _setDefaults ( obj ,  defaults )  {
    for  ( var  p  in  defaults )  {
      if  ( ! ( p  in  obj ) )  {
        obj [ p ]  =  defaults [ p ] ;
      }
    }
  
    trả lại  obj ;
  } ,
      _setKeyframeDefaults  =  function  _setKeyframeDefaults ( obj ,  defaults )  {
    for  ( var  p  in  defaults )  {
      if  ( ! ( p  in  obj )  &&  p  ! ==  "time"  &&  p  ! ==  "easy" )  {
        obj [ p ]  =  defaults [ p ] ;
      }
    }
  } ,
      _merge  =  function  _merge ( base ,  toMerge )  {
    for  ( var  p  in  toMerge )  {
      base [ p ]  =  toMerge [ p ] ;
    }
  
    trả lại  căn cứ ;
  } ,
      _mergeDeep  =  function  _mergeDeep ( base ,  toMerge )  {
    for  ( var  p  in  toMerge )  {
      base [ p ]  =  _isObject ( toMerge [ p ] ) ? _mergeDeep ( base [ p ]  ||  ( base [ p ]  =  { } ) ,  toMerge [ p ] ) : toMerge [ p ] ;
    }
  
    trả lại  căn cứ ;
  } ,
      _copyExcluding  =  function  _copyExcluding ( đối tượng ,  loại trừ )  {
    var  copy  =  { } ,
        p _
  
    cho  ( p  in  obj )  {
      p  trong  loại trừ  ||  ( copy [ p ]  =  obj [ p ] ) ;
    }
  
    trả lại  bản sao ;
  } ,
      _inheritDefaults  =  function  _inheritDefaults ( vars )  {
    var  parent  =  vars . cha mẹ  ||  _globalTimeline ,
        func  =  vars . khung hình chính ? _setKeyframeDefaults : _setDefaults ;
  
    if  ( _isNotFalse ( vars . inherit ) )  {
      while  ( cha mẹ )  {
        func ( vars ,  cha . vars . defaults ) ;
        cha  =  mẹ . cha mẹ  ||  cha mẹ . _dp ;
      }
    }
  
    trả lại  vars ;
  } ,
      _arraysMatch  =  function  _arraysMatch ( a1 ,  a2 )  {
    var  i  =  a1 . chiều dài ,
        khớp  =  i  ===  a2 . chiều dài ;
  
    trong khi  ( khớp  &&  i -  &&  a1 [ i ]  ===  a2 [ i ] )  { }
  
    trả về  i  <  0 ;
  } ,
      _addLinkedListItem  =  function  _addLinkedListItem ( cha ,  con ,  firstProp ,  lastProp ,  sortBy )  {
    if  ( firstProp  ===  void  0 )  {
      firstProp  =  "_first" ;
    }
  
    if  ( lastProp  ===  void  0 )  {
      lastProp  =  "_last" ;
    }
  
    var  pres = parent [ lastProp  ] , 
        t ;
  
    if  ( sortBy )  {
      t  =  con [ sortBy ] ;
  
      trong khi  ( trước  &&  trước [ sortBy ]  >  t )  {
        trước  =  trước . _prev ;
      }
    }
  
    nếu  ( trước )  {
      đứa trẻ . _next  =  trước . _tiếp theo ;
      trước đó . _next  =  con ;
    }  khác  {
      đứa trẻ . _next  =  cha [ firstProp ] ;
      cha mẹ [ firstProp ]  =  con ;
    }
  
    if  ( con . _next )  {
      đứa trẻ . _tiếp theo . _prev  =  con ;
    }  khác  {
      cha [ lastProp ]  =  con ;
    }
  
    đứa trẻ . _prev  =  trước ;
    đứa trẻ . cha mẹ  =  con . _dp  =  cha mẹ ;
    trả  con ;
  } ,
      _removeLinkedListItem  =  function  _removeLinkedListItem ( cha ,  con ,  firstProp ,  lastProp )  {
    if  ( firstProp  ===  void  0 )  {
      firstProp  =  "_first" ;
    }
  
    if  ( lastProp  ===  void  0 )  {
      lastProp  =  "_last" ;
    }
  
    var  pres  =  con . _prev ,
        tiếp theo  =  con . _tiếp theo ;
  
    nếu  ( trước )  {
      trước đó . _next  =  tiếp theo ;
    }  else  if  ( cha [ firstProp ]  ===  con )  {
      cha [ firstProp ]  =  tiếp theo ;
    }
  
    nếu  ( tiếp theo )  {
      tiếp theo . _prev  =  trước ;
    }  else  if  ( cha [ lastProp ]  ===  con )  {
      cha [ lastProp ]  =  trước ;
    }
  
    đứa trẻ . _next  =  con . _prev  =  con . cha  =  null ;  // không xóa _dp chỉ để chúng tôi có thể hoàn nguyên nếu cần. Nhưng giá trị gốc phải rỗng để cho biết mục không có trong danh sách được liên kết.
  } ,
      _removeFromParent  =  function  _removeFromParent ( con ,  onlyIfParentHasAutoRemove )  {
    if  ( child . parent  &&  ( ! onlyIfParentHasAutoRemove  ||  child . parent . autoRemoveChildren ) )  {
      đứa trẻ . cha mẹ . loại bỏ ( con ) ;
    }
  
    đứa trẻ . _act  =  0 ;
  } ,
      _uncache  =  function  _uncache ( hoạt ảnh )  {
    var  a  =  hoạt ảnh ;
  
    trong khi  ( a )  {
      a . _dirty  =  1 ;
      a  =  a . cha, mẹ ;
    }
  
    trả lại  hình ảnh động ;
  } ,
      _recacheAncestors  =  function  _recacheAncestors ( hoạt ảnh )  {
    var parent = animation.parent;
  
    while (parent && parent.parent) {
      //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
      parent._dirty = 1;
      parent.totalDuration();
      cha  =  mẹ . cha, mẹ ;
    }
  
    trả lại  hình ảnh động ;
  } ,
      _hasNoPausedAncestors  =  function  _hasNoPausedAncestors ( hoạt ảnh )  {
    trở lại  ! hoạt hình  ||  hoạt hình . _ts  &&  _hasNoPausedAncestors ( hoạt ảnh . cha ) ;
  } ,
      _elapsedCycleDuration  =  function  _elapsedCycleDuration ( hoạt ảnh )  {
    trả lại  hoạt ảnh . _lặp lại ? _animationCycle ( hoạt ảnh . _tTime ,  hoạt ảnh  =  hoạt ảnh . thời lượng ( )  +  hoạt ảnh . _rDelay )  *  hoạt ảnh : 0 ;
  } ,
      // cấp dữ liệu trong totalTime và cycleDuration và nó sẽ trả về chu kỳ (lần lặp trừ đi 1) và nếu đầu phát chính xác ở thời điểm KẾT THÚC, nó sẽ KHÔNG tăng lên đến chu kỳ tiếp theo.
  _animationCycle  =  function  _animationCycle ( tTime ,  cycleDuration )  {
    return  ( tTime  / =  cycleDuration )  &&  ~ ~ tTime  ===  tTime ? ~ ~ tTime  -  1 : ~ ~ tTime ;
  } ,
      _parentToChildTotalTime  =  function  _parentToChildTotalTime ( parentTime ,  child )  {
    return  ( parentTime  -  child . _start )  *  child . _ts  +  ( child . _ts  > =  0 ? 0 : child . _dirty ? child . totalDuration ( ) : child . _tDur ) ;
  } ,
      _setEnd  =  function  _setEnd ( hoạt ảnh )  {
    trả lại  hoạt ảnh . _end  =  _round ( animation . _start  +  ( animation . _tDur  /  Math . abs ( animation . _ts  ||  animation . _rts  ||  _tinyNum )  ||  0 ) ) ;
  } ,
  
  / *
  _totalTimeToTime = (KẹpTotalTime, thời lượng, lặp lại, repeatDelay, yoyo) => {
      hãy để cycleDuration = thời lượng + repeatDelay,
          time = _round (gripedTotalTime% cycleDuration);
      nếu (thời gian> thời lượng) {
          time = thời lượng;
      }
      return (yoyo && (~~ (kẹpTotalTime / cycleDuration) & 1))? thời lượng - time: thời gian;
  },
  * /
  _postAddChecks  =  function  _postAddChecks ( dòng thời gian ,  con )  {
    var  t ;
  
    if  ( child . _time  ||  child . _initted  &&  ! child . _dur )  {
      // trong trường hợp, ví dụ, _start được di chuyển trên tween đã được hiển thị. Hãy tưởng tượng nó ở trạng thái kết thúc, sau đó startTime được di chuyển CÁCH sau (sau khi kết thúc dòng thời gian này), nó sẽ hiển thị ở đầu.
      t  =  _parentToChildTotalTime ( dòng thời gian . rawTime ( ) ,  con ) ;
  
      if  ( ! child . _dur  ||  _clamp ( 0 ,  child . totalDuration ( ) ,  t )  -  child . _tTime  >  _tinyNum )  {
        đứa trẻ . kết xuất ( t ,  true ) ;
      }
    }  // nếu dòng thời gian đã kết thúc nhưng tween / dòng thời gian được chèn kéo dài thời gian, chúng ta nên bật lại dòng thời gian này để nó hiển thị đúng. Chúng tôi cũng nên căn chỉnh playhead với dòng thời gian gốc khi thích hợp.
  
  
    if  ( _uncache ( timeline ) . _dp  &&  timeline . _initted  &&  timeline . _time  > =  timeline . _dur  &&  timeline . _ts )  {
      // trong trường hợp bất kỳ tổ tiên nào đã hoàn thành nhưng bây giờ sẽ được bật ...
      if  ( timeline . _dur  <  timeline . length ( ) )  {
        t  =  mốc thời gian ;
  
        trong khi  ( t . _dp )  {
          t . rawTime ( )  > =  0  &&  t . totalTime ( t . _tTime ) ;  // di chuyển dòng thời gian (thay đổi startTime của nó) nếu cần, đồng thời bật nó. Tuy nhiên, nếu hiện tại nó bằng 0, nó có thể không được lên lịch hiển thị cho đến sau này, vì vậy không cần buộc nó phải căn chỉnh với vị trí đầu phát hiện tại. Chỉ di chuyển để bắt kịp với playhead.
  
          t  =  t . _dp ;
        }
      }
  
      dòng thời gian . _zTime  =  - _tinyNum ;  // giúp đảm bảo rằng render () tiếp theo sẽ bị ép buộc (crossStart = true trong render ()), ngay cả khi thời lượng không thay đổi (chúng tôi đang thêm một phần tử con cần được kết xuất). Chắc chắn là một trường hợp cạnh. Lưu ý: chúng ta PHẢI thực hiện việc này SAU vòng lặp ở trên, nơi totalTime () có thể kích hoạt kết xuất () vì phương thức _addToTimeline () này được gọi từ phương thức khởi tạo Animation, TRƯỚC KHI tweens thậm chí ghi lại mục tiêu của chúng, v.v. vì vậy chúng tôi sẽ không muốn những thứ để được kích hoạt sai thứ tự.
    }
  } ,
      _addToTimeline  =  function  _addToTimeline ( dòng thời gian ,  con ,  vị trí ,  bỏ quaChecks )  {
    đứa trẻ . cha mẹ  &&  _removeFromParent ( con ) ;
    đứa trẻ . _start  =  _round ( position  +  child . _delay ) ;
    đứa trẻ . _end  =  _round ( child . _start  +  ( child . totalDuration ( )  /  Math . abs ( child . timeScale ( ) )  ||  0 ) ) ;
  
    _addLinkedListItem ( dòng thời gian ,  con ,  "_first" ,  "_last" ,  dòng thời gian . _sort ? "_start" : 0 ) ;
  
    dòng thời gian . _recent  =  con ;
    bỏ qua  ||  _postAddChecks ( dòng thời gian ,  con ) ;
     dòng thời gian trả về ;
  } ,
      _scrollTrigger  =  function  _scrollTrigger ( hoạt ảnh , trình  kích hoạt )  {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
  
    if (!tween._initted) {
      return 1;
    }
  
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens . đưa đẩy ( tween ) ;
  
      tuổi mười bảy . _lazy  =  [ totalTime ,  ressionEvents ] ;
      trả về  1 ;
    }
  } ,
      _renderZeroDurationTween  =  function  _renderZeroDurationTween ( tween ,  totalTime ,  suppEvents ,  force )  {
    var  presRatio  =  tween . tỷ lệ ,
        ratio  =  totalTime  <  0  ||  Tỷ lệ trước  &&  ! totalTime  &&  ! tuổi mười bảy . _bắt đầu  &&  ! tuổi mười bảy . _dp . _chặn ? 0 : 1 ,
        // kiểm tra _lock của cha mẹ vì khi dòng thời gian lặp lại / yoyos và thực hiện gói giả tạo của nó, chúng ta không nên buộc tỷ lệ trở về 0.
    repeatDelay  =  tween . _rDelay ,
        tTime  =  0 ,
        pt ,
        sự lặp lại ,
        sự thịnh hành ;
  
    if  ( repeatDelay  &&  tween . _repeat )  {
      // trong trường hợp có tween thời lượng bằng 0 có lặp lại với repeatDelay
      tTime  =  _clamp ( 0 ,  tween . _tDur ,  totalTime ) ;
      lặp  =  _animationCycle ( tTime ,  repeatDelay ) ;
       thịnh hành =  _animationCycle ( mười bảy . _t thời gian , lặp lại thời gian ) ; 
  
      if  ( lặp  ! ==  trước )  {
        tỷ lệ trước  =  1  -  tỷ lệ ;
        tuổi mười bảy . vars . repeatRefresh  &&  tween . _tinitted  &&  tween . làm mất hiệu lực ( ) ;
      }
    }
  
    if  ( ! tween . _initted  &&  _attemptInitTween ( tween ,  totalTime ,  force ,  ressionEvents ) )  {
      // nếu chúng ta kết xuất ngay đầu (thời gian == 0) của fromTo (), chúng ta phải buộc kết xuất (hai lần bình thường sẽ không cần kết xuất tại thời điểm 0 khi Thời gian trước đó cũng bằng 0). Điều này cũng là bắt buộc để đảm bảo ghi đè có hiệu lực ngay lập tức.
      trở lại ;
    }
  
    if  ( ratio  ! ==  prevRatio  ||  force  ||  tween . _zTime  ===  _tinyNum  ||  ! totalTime  &&  tween . _zTime )  {
       trước đây =  tween . _zTime ;
      tuổi mười bảy . _zTime  =  totalTime  ||  ( ressionEvents ? _tinyNum : 0 ) ; // khi đầu phát đến thời điểm CHÍNH XÁC 0 (ngay trên đầu) của thời lượng bằng 0, chúng ta cần phân biệt xem các sự kiện có bị chặn hay không để khi đầu phát di chuyển lại (lần sau), nó sẽ kích hoạt lệnh gọi lại. Nếu các sự kiện KHÔNG bị chặn, hiển nhiên lệnh gọi lại sẽ được kích hoạt trong kết xuất này. Về cơ bản, lệnh gọi lại sẽ kích hoạt khi đầu phát ĐẾN ĐẾN hoặc RỜI ĐI chính xác vị trí này, không phải cả hai. Hãy tưởng tượng thực hiện một timeline.seek (0) và có một lệnh gọi lại ở mức 0. Vì các sự kiện bị chặn trên seek () đó theo mặc định, không có gì sẽ kích hoạt, nhưng khi playhead di chuyển khỏi vị trí đó, lệnh gọi lại sẽ kích hoạt. Hành vi này là những gì mọi người trực giác mong đợi.
  
      ức chế  ||  ( ressionEvents  =  totalTime  &&  ! presIteration ) ;  // nếu nó được hiển thị trước đó ở chính xác 0 (_zTime) và bây giờ đầu phát đang di chuyển đi, ĐỪNG kích hoạt các lệnh gọi lại nếu không chúng sẽ giống như các bản sao.
  
      tuổi mười bảy . ratio  =  tỷ lệ ;
      tuổi mười bảy . _from  &&  ( ratio  =  1  -  ratio ) ;
      tuổi mười bảy . _time  =  0 ;
      tuổi mười bảy . _tTime  =  tTime ;
      ức chế  ||  _callback ( tween ,  "onStart" ) ;
      pt  =  tween . _pt ;
  
      trong khi  ( pt )  {
        pt . r ( tỷ số ,  pt . d ) ;
        pt  =  pt . _tiếp theo ;
      }
  
      if  ( ! ratio  &&  tween . _startAt  &&  ! tween . _onUpdate  &&  tween . _start )  {
        // nếu tween được đặt ở vị trí RẤT bắt đầu (_start 0) của dòng thời gian mẹ của nó, việc playhead quay lại xa hơn là bất hợp pháp, vì vậy chúng ta không nên hiển thị các giá trị startAt đã ghi.
        tuổi mười bảy . _startAt . kết xuất ( totalTime ,  true ,  force ) ;
      }
  
      tuổi mười bảy . _cập nhật  &&  ! ressionEvents  &&  _callback ( tween ,  "onUpdate" ) ;
      tTime  && mười  bảy . _lặp lại  &&  ! ngăn chặn  &&  tween . cha  &&  _callback ( tween ,  "onRepeat" ) ;
  
      if  ( ( totalTime  > =  tween . _tDur  ||  totalTime  <  0 )  &&  tween . ratio  ===  ratio )  {
        tỷ lệ  &&  _removeFromParent ( tween ,  1 ) ;
  
        if  ( ! SuppressionEvents )  {
          _callback ( tween ,  ratio ? "onComplete" : "onReverseComplete" ,  true ) ;
  
          tuổi mười bảy . _prom  &&  tween . _prom ( ) ;
        }
      }
    }  else  if  ( ! tween . _zTime )  {
      tuổi mười bảy . _zTime  =  totalTime ;
    }
  } ,
      _findNextPauseTween  =  function  _findNextPauseTween ( hoạt ảnh , thời gian  trước ,  thời gian )  {
    var  con ;
  
    if  ( time  >  trướcTime )  {
      con  =  hoạt hình . _thứ nhất ;
  
      while  ( child  &&  child . _start  <=  time )  {
        if  ( ! child . _dur  &&  child . data  ===  "isPause"  &&  child . _start  >  trước thời gian )  {
          trả  con ;
        }
  
        con  =  con . _tiếp theo ;
      }
    }  khác  {
      con  =  hoạt hình . _ cuối cùng ;
  
      while  ( child  &&  child . _start  > =  time )  {
        if  ( ! child . _dur  &&  child . data  ===  "isPause"  &&  child . _start  <  trước thời gian )  {
          trả  con ;
        }
  
        con  =  con . _prev ;
      }
    }
  } ,
      _setDuration  =  function  _setDuration ( hoạt ảnh ,  thời lượng ,  bỏ quaUncache )  {
    var  repeat  =  animation . _lặp lại ,
        dur  =  _round ( thời lượng )  ||  Số 0 ;
    hoạt hình . _dur  =  dur ;
    hoạt hình . _tDur  =  ! lặp lại ? dur : lặp lại  <  0 ? 1e10 : _round ( dur  *  ( repeat  +  1 )  +  animation . _RDelay  *  repeat ) ;
  
    if  ( animation . _time  >  dur )  {
      hoạt hình . _time  =  dur ;
      hoạt hình . _tTime  =  Toán học . min ( animation . _tTime ,  animation . _tDur ) ;
    }
  
    ! bỏ quaUncache  &&  _uncache ( hoạt ảnh . cha ) ;
    hoạt hình . cha  &&  _setEnd ( hoạt ảnh ) ;
    trả lại  hình ảnh động ;
  } ,
      _onUpdateTotalDuration  =  function  _onUpdateTotalDuration ( hoạt ảnh )  {
    trả về phiên bản  hoạt ảnh của  Dòng  thời gian ? _uncache ( hoạt ảnh ) : _setDuration ( hoạt ảnh ,  hoạt ảnh . _dur ) ;
  } ,
      _zeroPosition  =  {
    _start : 0 ,
    endTime : _emptyFunc
  } ,
      _parsePosition  =  function  _parsePosition ( hoạt ảnh ,  vị trí )  {
    var  nhãn  =  hoạt ảnh . nhãn ,
        gần đây  =  hoạt hình . _recent  ||  _zeroPosition ,
        clippedDuration  =  hoạt ảnh . thời lượng ( )  > =  _bigNum ? gần đây . endTime ( false ) : hoạt ảnh . _dur ,
        // trong trường hợp có một phần tử con lặp lại vô hạn, người dùng hầu như không bao giờ có ý định cho điểm chèn của phần tử mới dựa trên một giá trị SIÊU dài như vậy, vì vậy chúng tôi cắt nó và giả sử nên sử dụng endTime của đứa trẻ mới được thêm gần đây nhất .
    tôi ,
        bù đắp ;
  
    if  ( _isString ( vị trí )  &&  ( isNaN ( vị trí )  ||  vị trí  trong  nhãn ) )  {
      // nếu chuỗi là một số như "1", hãy kiểm tra xem có nhãn với tên đó hay không, nếu không, hãy diễn giải nó dưới dạng số (giá trị tuyệt đối).
      i  =  vị trí . charAt ( 0 ) ;
  
      if  ( i  ===  "<"  ||  i  ===  ">" )  {
        return  ( i  ===  "<" ? gần đây . _start : gần đây . endTime ( gần đây . _repeat  > =  0 ) )  +  ( parseFloat ( vị trí . substr ( 1 ) )  ||  0 ) ;
      }
  
      i  =  vị trí . indexOf ( "=" ) ;
  
      nếu  ( tôi  <  0 )  {
        vị trí  trong  nhãn  ||  ( nhãn [ vị trí ]  =  clippedDuration ) ;
        trả về  nhãn [ vị trí ] ;
      }
  
      offset  =  + ( vị trí . charAt ( i  -  1 )  +  vị trí . substr ( i  +  1 ) ) ;
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }
  
    return position == null ? clippedDuration : +position;
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
     giá trị  trả về ||  giá trị  ===  0 ? func ( giá trị ) : func ;
  } ,
      _clamp  =  function  _clamp ( min ,  max ,  value )  {
    trả về  giá trị  <  min ? min : value  >  max ? max : giá trị ;
  } ,
      getUnit  =  function  getUnit ( value )  {
    trả về  ( giá trị  +  "" ) . substr ( ( parseFloat ( value )  +  "" ) . length ) ;
  } ,
      kẹp  =  kẹp chức năng  ( tối thiểu , tối đa , giá trị ) {   
    return  _conditionalReturn ( value ,  function  ( v )  {
      return  _clamp ( min ,  max ,  v ) ;
    } ) ;
  } ,
      _slice  =  [ ] . lát ,
      _isArrayLike  =  function  _isArrayLike ( value ,  nonEmpty )  {
    trả về  giá trị  &&  _isObject ( value )  &&  "length"  trong  value  &&  ( ! nonEmpty  &&  ! value . length  ||  value . length  -  1  trong  value  &&  _isObject ( value [ 0 ] ) )  &&  ! giá trị . nodeType  &&  value  ! ==  _win ;
  } ,
      _flatten  =  function  _flatten ( ar ,  leftStrings ,  tích lũy )  {
    if  ( bộ tích lũy  ===  void  0 )  {
      bộ tích lũy  =  [ ] ;
    }
  
    trả về  ar . forEach ( function  ( value )  {
      var  _accumulator ;
  
      trả về  _isString ( giá trị )  &&  ! leftStrings  ||  _isArrayLike ( giá trị ,  1 ) ? ( _accumulator  = bộ  tích lũy ) . đẩy . apply ( _accumulator ,  toArray ( value ) ) : bộ tích lũy . đẩy ( giá trị ) ;
    } )  ||  bộ tích lũy ;
  } ,
      // nhận bất kỳ giá trị nào và trả về một mảng. Nếu đó là một chuỗi (và leftStrings không đúng), nó sẽ sử dụng document.querySelectorAll () và chuyển đổi thành một mảng. Nó cũng sẽ chấp nhận các tệp lặp như các đối tượng jQuery.
  toArray  =  function  toArray ( value ,  leftStrings )  {
    trả về  _isString ( giá trị )  &&  ! leftStrings  &&  ( _coreInitted  ||  ! _wake ( ) ) ? _lice . call ( _doc . querySelectorAll ( value ) ,  0 ) : _isArray ( value ) ? _flatten ( value ,  leftStrings ) : _isArrayLike ( value ) ? _lice .call ( value ,  0 ) : value ? [ giá trị ] : [ ] ;
  } ,
      shuffle  =  function  shuffle ( a )  {
    trả lại  a . sắp xếp ( hàm  ( )  {
      return  .5  -  Toán học . ngẫu nhiên ( ) ;
    } ) ;
  } ,
      // giải pháp thay thế nhanh hơn và đa dạng hơn một chút nhưng lớn hơn: for (let j, v, i = a.length; i; j = Math.floor (Math.random () * i), v = a [- i], a [i] = a [j], a [j] = v); trả lại a;
  // để phân phối các giá trị trên một mảng. Có thể chấp nhận một số, một hàm hoặc (phổ biến nhất) một hàm có thể chứa các thuộc tính sau: {cơ sở, lượng, từ, dễ, lưới, trục, chiều dài, mỗi}. Trả về một hàm mong đợi các tham số sau: chỉ mục, đích, mảng. Nhận biết những điều sau
  phân phối  =  chức năng  phân phối ( v )  {
    if  ( _isFunction ( v ) )  {
      trả lại  v ;
    }
  
    var  vars  =  _isObject ( v ) ? v : {
      từng : v
    } ,
        // n: 1 chỉ để chỉ ra v là một số; chúng tôi tận dụng điều đó sau đó để đặt v theo độ dài mà chúng tôi nhận được. Nếu một số được chuyển vào, chúng tôi coi nó giống như giá trị trì trệ cũ, chẳng hạn như 0,1, có nghĩa là mọi thứ sẽ được phân phối với 0,1 giữa mỗi phần tử trong mảng chứ không phải là tổng "số tiền" được chia nhỏ giữa tất cả chúng.
     easy =  _parseEase ( vars . easy ) ,
        from  =  vars . từ  ||  0 ,
        base  =  parseFloat ( vars . base )  ||  0 ,
        cache  =  { } ,
        isDecimal  =  from  >  0  &&  from  <  1 ,
        ratios  =  isNaN ( từ )  ||  isDecimal ,
        trục  =  vars . trục ,
        ratioX  =  từ ,
        Tỷ lệY  =  từ ;
  
    if  ( _isString ( from ) )  {
      ratioX  =  ratioY  =  {
        trung tâm : .5 ,
        các cạnh : .5 ,
        kết thúc : 1
      } [ từ ]  ||  Số 0 ;
    }  else  if  ( ! isDecimal  &&  ratios )  {
      ratioX  =  from [ 0 ] ;
      ratioY  =  from [ 1 ] ;
    }
  
     hàm  trả về ( i ,  target ,  a )  {
      var  l  =  ( a  ||  vars ) . chiều dài ,
          Khoảng cách  =  cache [ l ] ,
          originX ,
          xuất xứY ,
          x ,
          y ,
          d ,
          j ,
          tối đa ,
          tối thiểu ,
          wrapAt ;
  
      nếu  ( ! khoảng cách )  {
        wrapAt  =  vars . lưới  ===  "tự động" ? 0 : ( vars . Grid  ||  [ 1 ,  _bigNum ] ) [ 1 ] ;
  
        if  ( ! wrapAt )  {
          max  =  - _bigNum ;
  
          while  ( max  <  ( max  =  a [ wrapAt ++ ] . getBoundsClientRect ( ) . left )  &&  wrapAt  <  l )  { }
  
          wrapAt - ;
        }
  
        khoảng cách  =  cache [ l ]  =  [ ] ;
        originX  =  các tỷ lệ ? Toán học . min ( wrapAt ,  l )  *  ratioX  -  .5 : from  %  wrapAt ;
        originY  =  các tỷ lệ ? l  *  ratioY  /  wrapAt  -  .5 : from  /  wrapAt  |  Số 0 ;
        cực đại  =  0 ;
        min  =  _bigNum ;
  
        for  ( j  =  0 ;  j  <  l ;  j ++ )  {
          x  =  j  %  wrapAt  -  originX ;
          y  =  originY  -  ( j  /  wrapAt  |  0 ) ;
          khoảng cách [ j ]  =  d  =  ! trục ? _sqrt ( x  *  x  +  y  *  y ) : Toán học . abs ( trục  ===  "y" ? y : x ) ;
          d  >  max  &&  ( max  =  d ) ;
          d  <  min  &&  ( min  =  d ) ;
        }
  
        từ  ===  "ngẫu nhiên"  &&  xáo trộn ( khoảng cách ) ;
        khoảng cách . max  =  max  -  tối thiểu ;
        khoảng cách . min  =  min ;
        khoảng cách . v  =  l  =  ( parseFloat ( vars . quant )  ||  parseFloat ( vars . each )  *  ( wrapAt  >  l ? l  -  1 :! axis ? Math . max ( wrapAt , l / wrapAt ) : axis === " y" ? l / wrapAt : wrapAt )        ||  0 )  *  ( từ  ===  "cạnh" ? - 1 : 1 ) ;
        khoảng cách . b  =  l  <  0 ? base  -  l : đế ;
        khoảng cách . u  =  getUnit ( vars . số lượng  ||  vars . each )  ||  Số 0 ;  //đơn vị
  
        easy  =  dễ dàng  &&  l  <  0 ? _invertEase ( dễ dàng ) : dễ dàng ;
      }
  
      l  =  ( khoảng cách [ i ]  -  khoảng cách . tối thiểu )  /  khoảng cách . tối đa  ||  Số 0 ;
      return  _round ( khoảng cách . b  +  ( dễ dàng ? dễ dàng ( l ) : l )  *  khoảng cách . v )  +  khoảng cách . u ;  // vòng để khắc phục lỗi dấu phẩy động
    } ;
  } ,
      _roundModifier  =  function  _roundModifier ( v )  {
    // chuyển vào 0,1 lấy một hàm sẽ làm tròn đến phần mười gần nhất hoặc 5 làm tròn đến 5 gần nhất hoặc 0,001 đến gần 1000 nhất, v.v.
    var  p  =  v  <  1 ? Toán học . pow ( 10 ,  ( v  +  "" ) . length  -  2 ) : 1 ;  // để tránh lỗi toán học dấu phẩy động (như 24 * 0,1 == 2.4000000000000004), chúng tôi cắt nhỏ ở một số vị trí thập phân cụ thể (nhanh hơn nhiều so với toFixed ()
  
     hàm  trả về ( thô )  {
      trả về  Toán . floor ( Math . round ( parseFloat ( raw )  /  v )  *  v  *  p )  /  p  +  ( _isNumber ( raw ) ? 0 : getUnit ( raw ) ) ;
    } ;
  } ,
      snap  =  function  snap ( snapTo ,  value )  {
    var  isArray  =  _isArray ( snapTo ) ,
        bán kính ,
        is2D ;
  
    if  ( ! isArray  &&  _isObject ( snapTo ) )  {
      bán kính  =  isArray  =  snapTo . bán kính  ||  _bigNum ;
  
      if  ( snapTo . giá trị )  {
        snapTo  =  toArray ( giá trị snapTo . ) ;
  
        if  ( is2D  =  ! _isNumber ( snapTo [ 0 ] ) )  {
          radius  * =  bán kính ;  // tối ưu hóa hiệu suất để chúng ta không phải Math.sqrt () trong vòng lặp.
        }
      }  khác  {
        snapTo  =  _roundModifier ( tăng snapTo ) ; _
      }
    }
  
    return  _conditionalReturn ( value ,!  isArray ? _roundModifier ( snapTo ) : _isFunction ( snapTo ) ? function ( raw ) { _  
      is2D  =  snapTo ( thô ) ;
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i  =  snapTo . chiều dài ,
          dx ,
          thuốc nhuộm ;
  
      trong khi  ( tôi - )  {
        if  ( is2D )  {
          dx  =  snapTo [ i ] . x  -  x ;
          dy  =  snapTo [ i ] . y  -  y ;
          dx  =  dx  *  dx  +  dy  *  dy ;
        }  khác  {
          dx  =  Toán học . abs ( snapTo [ i ]  -  x ) ;
        }
  
        nếu  ( dx  <  phút )  {
          min  =  dx ;
          gần nhất  =  i ;
        }
      }
  
      gần nhất  =  ! bán kính  ||  min  <=  bán kính ? snapTo [ gần nhất ] : raw ;
      trả về  là2D  ||  gần nhất  ===  thô  ||  _isNumber ( thô ) ? gần nhất : gần nhất  +  getUnit ( thô ) ;
    } ) ;
  } ,
      random  =  function  random ( min ,  max ,  roundingIncrement ,  returnFunction )  {
    return  _conditionalReturn ( _isArray ( min ) ?! max : roundingIncrement === true ?! ( roundingIncrement = 0 ) :! returnFunction , function ( ) { _ _ _ _       
      return  _isArray ( tối thiểu ) ? min [ ~ ~ ( Math . random ( )  *  min . length ) ] : ( roundingIncrement  =  roundingIncrement  ||  1e-5 )  &&  ( returnFunction  =  roundingIncrement  <  1 ? Math . pow ( 10 ,  ( roundingIncrement  +  "" ) . length  - 2 ) : 1 )  &&  Toán . tầng ( Math . round ( ( min  +  Math . random ( )  *  ( max  -  min ) )  /  roundingIncrement )  *  roundingIncrement  *  returnFunction )  /  returnFunction ;
    } ) ;
  } ,
      pipe  =  function  pipe ( )  {
    for  ( var  _len  =  các đối số . length ,  functions  =  new  Array ( _len ) ,  _key  =  0 ;  _key  <  _len ;  _key ++ )  {
      các hàm [ _key ]  =  các đối số [ _key ] ;
    }
  
     hàm  trả về ( giá trị )  {
      trả về  các chức năng . giảm ( hàm  ( v ,  f )  {
        return  f ( v ) ;
      } ,  giá trị ) ;
    } ;
  } ,
      unifying  =  chức năng  thống nhất ( func ,  đơn vị )  {
     hàm  trả về ( giá trị )  {
      return  func ( parseFloat ( value ) )  +  ( unit  ||  getUnit ( value ) ) ;
    } ;
  } ,
      normalize  =  function  normalize ( min ,  max ,  value )  {
    trả về  mapRange ( tối thiểu ,  tối đa ,  0 ,  1 ,  giá trị ) ;
  } ,
      _wrapArray  =  function  _wrapArray ( a ,  wrapper ,  value )  {
    return  _conditionalReturn ( value ,  function  ( index )  {
      trả về  một [ ~ ~ wrapper ( chỉ mục ) ] ;
    } ) ;
  } ,
      wrap  =  chức năng  bọc ( tối thiểu ,  tối đa ,  giá trị )  {
    // LƯU Ý: wrap () KHÔNG THỂ là một hàm mũi tên! Một lỗi biên dịch rất kỳ lạ gây ra sự cố (không liên quan đến GSAP).
    var  range  =  max  -  min ;
    return  _isArray ( tối thiểu ) ? _wrapArray ( min ,  wrap ( 0 ,  min . length ) ,  max ) : _conditionalReturn ( value ,  function  ( value )  {
      return  ( range  +  ( value  -  min )  %  range )  %  range  +  min ;
    } ) ;
  } ,
      wrapYoyo  =  function  wrapYoyo ( tối thiểu ,  tối đa ,  giá trị )  {
    var  range  =  max  -  min ,
        tổng  =  phạm vi  *  2 ;
    return  _isArray ( tối thiểu ) ? _wrapArray ( min ,  wrapYoyo ( 0 ,  min . length  -  1 ) ,  max ) : _conditionalReturn ( value ,  function  ( value )  {
      giá trị  =  ( tổng  +  ( giá trị  -  tối thiểu )  %  tổng )  %  tổng ;
      return  min  +  ( value  >  range ? total  -  value : value ) ;
    } ) ;
  } ,
      _replaceRandom  =  function  _replaceRandom ( value )  {
    // thay thế tất cả các lần xuất hiện của random (...) trong một chuỗi bằng giá trị ngẫu nhiên được tính toán. có thể là một phạm vi như ngẫu nhiên (-100, 100, 5) hoặc một mảng như ngẫu nhiên ([0, 100, 500])
    var  pres  =  0 ,
        s  =  "" ,
        tôi ,
        nums ,
        kết thúc ,
        isArray ;
  
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums  =  giá trị . substr ( i  +  7 ,  end  -  i  -  7 ) . match ( isArray ? _delimitedValueExp : _strictNumExp ) ;
      s  + =  giá trị . Subr ( trước ,  i  -  trước )  +  ngẫu nhiên ( isArray ? nums : + nums [ 0 ] ,  + nums [ 1 ] ,  + nums [ 2 ]  ||  1e-5 ) ;
      trước  =  end  +  1 ;
    }
  
    trả về  giá trị s  +  . substr ( trước , giá trị . chiều dài - trước ) ;   
  } ,
      mapRange  =  function  mapRange ( inMin ,  inMax ,  outMin ,  outMax ,  value )  {
    var  inRange  =  inMax  -  inMin ,
        outRange  =  outMax  -  outMin ;
    return  _conditionalReturn ( value ,  function  ( value )  {
      return  outMin  +  ( ( value  -  inMin )  /  inRange  *  outRange  ||  0 ) ;
    } ) ;
  } ,
      interpolate  =  hàm  nội suy ( bắt đầu ,  kết thúc ,  tiến trình ,  biến đổi )  {
    var  func  =  isNaN ( bắt đầu  +  kết thúc ) ? 0 : hàm  ( p )  {
      return  ( 1  -  p )  *  start  +  p  *  end ;
    } ;
  
    if  ( ! func )  {
      var  isString  =  _isString ( start ) ,
          chủ  =  { } ,
          p ,
          tôi ,
          bộ nội suy ,
          l ,
          il ;
  
      tiến trình  ===  true  &&  ( biến đổi  =  1 )  &&  ( tiến trình  =  null ) ;
  
      if  ( isString )  {
        start  =  {
          p : bắt đầu
        } ;
        end  =  {
          p : end
        } ;
      }  else  if  ( _isArray ( start )  &&  ! _isArray ( end ) )  {
        bộ nội suy  =  [ ] ;
        l  =  bắt đầu . chiều dài ;
        il  =  l  -  2 ;
  
        for  ( i  =  1 ;  i  <  l ;  i ++ )  {
          bộ nội suy . push ( nội suy ( start [ i  -  1 ] ,  start [ i ] ) ) ;  // xây dựng các bộ nội suy lên phía trước như một sự tối ưu hóa hiệu suất để khi hàm được gọi nhiều lần, nó có thể sử dụng lại chúng.
        }
  
        l - ;
  
        func  =  function  func ( p )  {
          p  * =  l ;
          var  i  =  Toán học . min ( il ,  ~ ~ p ) ;
          trả về  bộ nội suy [ i ] ( p  -  i ) ;
        } ;
  
        tiến bộ  =  kết thúc ;
      }  else  if  ( ! mutate )  {
        start  =  _merge ( _isArray ( start ) ? [ ] : { } ,  start ) ;
      }
  
      if  ( ! bộ nội suy )  {
        cho  ( cuối cùng là p  ) {  
          _addPropTween . call ( master ,  start ,  p ,  "get" ,  end [ p ] ) ;
        }
  
        func  =  function  func ( p )  {
          return  _renderPropTweens ( p ,  master )  ||  ( isString ? start . p : start ) ;
        } ;
      }
    }
  
    return  _conditionalReturn ( tiến trình ,  func ) ;
  } ,
      _getLabelInDirection  =  function  _getLabelInDirection ( dòng thời gian ,  fromTime ,  lùi lại )  {
    // được sử dụng cho nextLabel () và beforeLabel ()
    var  nhãn  =  dòng thời gian . nhãn ,
        tối thiểu  =  _bigNum ,
        p ,
        khoảng cách ,
        nhãn mác ;
  
    cho  ( p  trong  các nhãn )  {
      khoảng cách  =  nhãn [ p ]  -  fromTime ;
  
      if  ( khoảng cách  <  0  ===  !! lùi && khoảng cách && min > ( khoảng cách = Toán học . abs ( khoảng cách ) ) ) {         
        nhãn  =  p ;
        min  =  khoảng cách ;
      }
    }
  
    trả lại  nhãn ;
  } ,
      _callback  =  function  _callback ( hoạt ảnh ,  loại ,  thực thiLazyFirst )  {
    var  v  =  hoạt ảnh . vars ,
        callback  =  v [ type ] ,
        params ,
        phạm vi ;
  
    if  ( ! callback )  {
      trở lại ;
    }
  
    params  =  v [ type  +  "Params" ] ;
    phạm vi  =  v . callbackScope  ||  hoạt hình ;
    thực thiLazyFirst  &&  _lazyTweens . chiều dài  &&  _lazyRender ( ) ;  // trong trường hợp việc kết xuất khiến bất kỳ cột nào bị lười biếng, chúng ta nên kết xuất chúng vì thông thường khi dòng thời gian kết thúc, người dùng mong đợi mọi thứ đã được hiển thị đầy đủ. Hãy tưởng tượng một onUpdate trên dòng thời gian báo cáo / kiểm tra các giá trị đã được tweened.
  
    trả lại  thông số ? gọi lại . apply ( scope ,  params ) : gọi lại . cuộc gọi ( phạm vi ) ;
  } ,
      _interrupt  =  function  _interrupt ( hoạt ảnh )  {
    _removeFromParent ( hoạt ảnh ) ;
  
    if  ( hoạt ảnh . tiến trình ( )  <  1 )  {
      _callback ( hoạt ảnh ,  "onInterrupt" ) ;
    }
  
    trả lại  hình ảnh động ;
  } ,
      _quickTween ,
      _createPlugin  =  function  _createPlugin ( config )  {
    cấu hình  =  ! cấu hình . tên  &&  config [ "default" ]  ||  cấu hình ;  // Đóng gói UMD bao bọc mọi thứ một cách kỳ lạ, vì vậy, ví dụ MotionPathHelper trở thành {MotionPathHelper: MotionPathHelper, mặc định: MotionPathHelper}.
  
    var  name  =  config . tên ,
        isFunc  =  _isFunction ( config ) ,
        Plugin  =  tên  &&  ! isFunc  &&  config . init ? function  ( )  {
      cái này . _props  =  [ ] ;
    } : cấu hình ,
        // trong trường hợp ai đó chuyển vào một đối tượng không phải là một plugin, như CustomEase
    instanceDefaults  =  {
      init : _emptyFunc ,
      kết xuất : _renderPropTweens ,
      thêm : _addPropTween ,
      giết : _killPropTweensOf ,
      công cụ sửa đổi : _addPluginModifier ,
      rawVars : 0
    } ,
        statics  =  {
      targetTest : 0 ,
      được : 0 ,
      getSetter : _getSetter ,
      bí danh : { } ,
      đăng ký : 0
    } ;
  
    _wake ( ) ;
  
    if  ( config  ! ==  Plugin )  {
      if  ( _plugins [ name ] )  {
        trở lại ;
      }
  
      _setDefaults ( Plugin ,  _setDefaults ( _copyExcluding ( config ,  instanceDefaults ) ,  statics ) ) ;  // phương thức tĩnh
  
  
      _merge ( Plugin . nguyên mẫu ,  _merge ( instanceDefaults ,  _copyExcluding ( config ,  statics ) ) ) ;  // phương thức phiên bản
  
  
      _plugins [ Trình cắm . prop  =  name ]  =  Trình cắm ;
  
      if  ( config . targetTest )  {
        _harnessPlugins . đẩy ( Plugin ) ;
  
        _reservedProps [ name ]  =  1 ;
      }
  
      name  =  ( name  ===  "css" ? "CSS" : name . charAt ( 0 ) . toUpperCase ( )  +  name . substr ( 1 ) )  +  "Plugin" ;  // cho tên toàn cục. "motionPath" sẽ trở thành MotionPathPlugin
    }
  
    _addGlobal ( tên ,  Plugin ) ;
  
    if  ( config . register )  {
      cấu hình . đăng ký ( gsap ,  Plugin ,  PropTween ) ;
    }
  } ,
  
  / *
   * ------------------------------------------------- -------------------------------------
   * MÀU SẮC
   * ------------------------------------------------- -------------------------------------
   * /
  _255  =  255 ,
      _colorLookup  =  {
    aqua : [ 0 ,  _255 ,  _255 ] ,
    vôi : [ 0 ,  _255 ,  0 ] ,
    bạc : [ 192 ,  192 ,  192 ] ,
    đen : [ 0 ,  0 ,  0 ] ,
    hạt dẻ : [ 128 ,  0 ,  0 ] ,
    mòng két : [ 0 ,  128 ,  128 ] ,
    xanh lam : [ 0 ,  0 ,  _255 ] ,
    hải quân : [ 0 ,  0 ,  128 ] ,
    trắng : [ _255 ,  _255 ,  _255 ] ,
    ô liu : [ 128 ,  128 ,  0 ] ,
    màu vàng : [ _255 ,  _255 ,  0 ] ,
    màu cam : [ _255 ,  165 ,  0 ] ,
    xám : [ 128 ,  128 ,  128 ] ,
    màu tím : [ 128 ,  0 ,  128 ] ,
    xanh lục : [ 0 ,  128 ,  0 ] ,
    đỏ : [ _255 ,  0 ,  0 ] ,
    màu hồng : [ _255 ,  192 ,  203 ] ,
    lục lam : [ 0 ,  _255 ,  _255 ] ,
    trong suốt : [ _255 ,  _255 ,  _255 ,  0 ]
  } ,
      _hue  =  function  _hue ( h ,  m1 ,  m2 )  {
    h  =  h  <  0 ? h  +  1 : h  >  1 ? h  -  1 : h ;
    return  ( h  *  6  <  1 ? m1  +  ( m2  -  m1 )  *  h  *  6 : h  <  .5 ? m2 : h  *  3  <  2 ? m1  +  ( m2  -  m1 )  *  ( 2/3  -  h ) * 6 _  _  : m1 ) * _255 + .5 | Số 0 ;        
  } ,
      splitColor  =  function  splitColor ( v ,  toHSL ,  forceAlpha )  {
    var  a  =  ! v ? _colorLookup . đen : _isNumber ( v ) ? [ v  >>  16 ,  v  >>  8  &  _255 ,  v  &  _255 ] : 0 ,
        r ,
        g ,
        b ,
        h ,
        s ,
        l ,
        tối đa ,
        tối thiểu ,
        d ,
        wasHSL ;
  
    nếu  ( ! a )  {
      if  ( v . substr ( - 1 )  ===  "," )  {
        // đôi khi dấu phẩy ở cuối được bao gồm và chúng ta nên cắt nó đi (thường từ danh sách giá trị được phân tách bằng dấu phẩy như textShadow: "2px 2px 2px blue, 5px 5px 5px rgb (255,0,0)" - trong ví dụ này "blue" có dấu phẩy ở cuối. Chúng tôi có thể loại bỏ nó bên trong parseComplex () nhưng chúng tôi cần làm điều đó với các giá trị đầu và cuối cộng với nó sẽ không cung cấp bảo vệ khỏi các tình huống tiềm ẩn khác như nếu người dùng chuyển giá trị tương tự.
        v = v.substr(0, v.length - 1);
      }
  
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length === 4) {
          //for shorthand like #9F0
          r = v.charAt(1);
          g  =  v . charAt ( 2 ) ;
          b  =  v . charAt ( 3 ) ;
          v  =  "#"  +  r  +  r  +  g  +  g  +  b  +  b ;
        }
  
        v  =  parseInt ( v . substr ( 1 ) ,  16 ) ;
        a  =  [ v  >>  16 ,  v  >>  8  &  _255 ,  v  &  _255 ] ;
      }  else  if  ( v . substr ( 0 ,  3 )  ===  "hsl" )  {
        a  =  wasHSL  =  v . khớp ( _strictNumExp ) ;
  
        if  ( ! toHSL )  {
          h  =  + a [ 0 ]  %  360/360  ; _  _
          s  =  + a [ 1 ]  /  100 ;
          l  =  + a [ 2 ]  /  100 ;
          g  =  l  <=  .5 ? l  *  ( s  +  1 ) : l  +  s  -  l  *  s ;
          r  =  l  *  2  -  g ;
  
          if  ( a . length  >  3 )  {
            a [ 3 ]  * =  1 ;  // ép kiểu số
          }
  
          a [ 0 ]  =  _hue ( h  +  1/3  ,  r , g ) ; _ _  
          a [ 1 ]  =  _hue ( h ,  r ,  g ) ;
          a [ 2 ]  =  _hue ( h  -  1/3  ,  r , g ) ; _ _  
        }  else  if  ( ~ v . indexOf ( "=" ) )  {
          // nếu giá trị tương đối được tìm thấy, chỉ cần trả về các chuỗi thô với các tiền tố tương đối tại chỗ.
          a  =  v . trận đấu ( _numExp ) ;
          forceAlpha  &&  a . chiều dài  <  4  &&  ( a [ 3 ]  =  1 ) ;
          trả lại  a ;
        }
      }  khác  {
        a  =  v . khớp ( _strictNumExp )  ||  _colorLookup . trong suốt ;
      }
  
      a  =  a . bản đồ ( Số ) ;
    }
  
    if  ( toHSL  &&  ! wasHSL )  {
      r  =  a [ 0 ]  /  _255 ;
      g  =  a [ 1 ]  /  _255 ;
      b  =  a [ 2 ]  /  _255 ;
      max  =  Toán học . max ( r ,  g ,  b ) ;
      min  =  Toán học . min ( r ,  g ,  b ) ;
      l  =  ( tối đa  +  tối thiểu )  /  2 ;
  
      if  ( max  ===  min )  {
        h  =  s  =  0 ;
      }  khác  {
        d  =  cực đại  - cực  tiểu ;
        s  =  l  >  0,5 ? d  /  ( 2  -  max  -  min ) : d  /  ( max  +  min ) ;
        h  =  max  ===  r ? ( g  -  b )  /  d  +  ( g  <  b ? 6 : 0 ) : max  ===  g ? ( b  -  r )  /  d  +  2 : ( r  -  g )  /  d  +  4 ;
        h  * =  60 ;
      }
  
      a [ 0 ]  =  ~ ~ ( h  +  .5 ) ;
      a [ 1 ]  =  ~ ~ ( s  *  100  +  .5 ) ;
      a [ 2 ]  =  ~ ~ ( l  *  100  +  .5 ) ;
    }
  
    forceAlpha  &&  a . chiều dài  <  4  &&  ( a [ 3 ]  =  1 ) ;
    trả lại  a ;
  } ,
      _colorOrderData  =  function  _colorOrderData ( v )  {
    // loại bỏ các màu khỏi chuỗi, tìm tất cả các vị trí số (có đơn vị) và trả về một mảng trong số đó. Mảng cũng có thuộc tính "c" là Mảng chứa các giá trị chỉ mục nơi các màu thuộc về. Điều này là để giúp giải quyết các vấn đề trong đó có thứ tự dữ liệu màu / số bị khớp sai như bóng đổ (# f00 0px 1px 2px) và bóng đổ (0x 1px 2px # f00). Về cơ bản, đây là một hàm trợ giúp được sử dụng trong _formatColors ()
    var  giá trị  =  [ ] ,
        c  =  [ ] ,
        i  =  - 1 ;
    v . tách ( _colorExp ) . forEach ( function  ( v )  {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors  =  function  _formatColors ( s ,  toHSL ,  orderMatchData )  {
    var  result  =  "" ,
        màu sắc  =  ( s  +  kết quả ) . khớp ( _colorExp ) ,
        gõ  =  toHSL ? "hsla (" : "rgba (" ,
        i  =  0 ,
        c ,
        vỏ ,
        d ,
        l & agrave ;
  
    if  ( ! màu )  {
      trả lại  s ;
    }
  
    Colors  =  màu sắc . bản đồ ( chức năng  ( màu )  {
      return  ( color  =  splitColor ( color ,  toHSL ,  1 ) )  &&  type  +  ( toHSL ? color [ 0 ]  +  ","  +  color [ 1 ]  +  "%,"  +  color [ 2 ]  +  "%,"  +  color [ 3 ] : color . Join ( "," ) )  +  ")" ;
    } ) ;
  
    if  ( orderMatchData )  {
      d  =  _colorOrderData ( các ) ;
      c  =  orderMatchData . c & ocirc ;
  
      if  ( c . tham gia ( kết quả )  ! ==  d . c . tham gia ( kết quả ) )  {
        vỏ  =  s . thay thế ( _colorExp ,  "1" ) . split ( _numWithUnitExp ) ;
        l  =  vỏ . chiều dài  -  1 ;
  
        cho  ( ;  i  <  l ;  i ++ )  {
          result  + =  shell [ i ]  +  ( ~ c . indexOf ( i ) ? Colors . shift ( )  ||  type  +  "0,0,0,0)" : ( d . length ? d : Colors . length ? Colors : orderMatchData ) . ca ( ) ) ;
        }
      }
    }
  
    if  ( ! shell )  {
      vỏ  =  s . tách ( _colorExp ) ;
      l  =  vỏ . chiều dài  -  1 ;
  
      cho  ( ;  i  <  l ;  i ++ )  {
        result  + =  shell [ i ]  +  Colors [ i ] ;
      }
    }
  
    trả về  kết quả  +  shell [ l ] ;
  } ,
      _colorExp  =  function  ( )  {
    var  s  =  "(?: \\ b (? :( ?: rgb | rgba | hsl | hsla) \\ (. +? \\)) | \\ B # (?: [0-9a-f] {3 }) {1,2} \\ b " ,
        // chúng tôi sẽ tự động xây dựng Biểu thức chính quy này để tiết kiệm kích thước tệp. Sau khi xây dựng nó, nó sẽ có thể tìm thấy rgb (), rgba (), # (hệ thập lục phân) và các giá trị màu được đặt tên như đỏ, xanh lam, tím, v.v.,
    p _
  
    cho  ( p  trong  _colorLookup )  {
      s  + =  "|"  +  p  +  "\\ b" ;
    }
  
    trả về  mới  RegExp ( s  +  ")" ,  "gi" ) ;
  } ( ) ,
      _hslExp  =  / hsl [ a ] ? \ ( / ,
      _colorStringFilter  =  function  _colorStringFilter ( a )  {
    var  kết hợp  =  a . tham gia ( "" ) ,
        toHSL ;
    _colorExp . lastIndex  =  0 ;
  
    if  ( _colorExp . test ( kết hợp ) )  {
      toHSL  =  _hslExp . kiểm tra ( kết hợp ) ;
      a [ 1 ]  =  _formatColors ( a [ 1 ] ,  toHSL ) ;
      a [ 0 ]  =  _formatColors ( a [ 0 ] ,  toHSL ,  _colorOrderData ( a [ 1 ] ) ) ;  // đảm bảo thứ tự của số / màu khớp với giá trị END.
  
      trả về  true ;
    }
  } ,
  
  / *
   * ------------------------------------------------- -------------------------------------
   * TICKER
   * ------------------------------------------------- -------------------------------------
   * /
  _tickerActive ,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch;
  
      if (elapsed > _lagThreshold) {
        _startTime += elapsed - _adjustedLag;
      }
  
      _lastUpdate += elapsed;
      _self.time = (_lastUpdate - _startTime) / 1000;
      overlap = _self.time - _nextTime;
  
      if (overlap > 0 || manual) {
        _self.frame++;
        _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
        dispatch = 1;
      }
  
      manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
  
      dispatch && _listeners.forEach(function (l) {
        return  l ( _self . time ,  Elapsed ,  _self . frame ,  v ) ;
      } ) ;
    } ;
  
    _self  =  {
      thời gian : 0 ,
      khung : 0 ,
      tick : chức năng  tick ( )  {
        _tick ( đúng ) ;
      } ,
      thức : hàm  aw ( )  {
        if  ( _coreReady )  {
          if  ( ! _coreInitted  &&  _windowExists ( ) )  {
            _win  =  _coreInitted  =  window ;
            _doc  =  _win . tài liệu  ||  { } ;
            _ cầu vồng . gsap  =  gsap ;
            ( _win . gsapVersions  ||  ( _win . gsapVersions  =  [ ] ) ) . push ( gsap . phiên bản ) ;
  
            _install ( _installScope  ||  _win . GreenSockGlobals  ||  ! _win . gsap  &&  _win  ||  { } ) ;
  
            _raf  =  _win . requestAnimationFrame ;
          }
  
          _id  &&  _self . ngủ ( ) ;
  
          _req  =  _raf  ||  hàm  ( f )  {
            return  setTimeout ( f ,  ( _nextTime  -  _self . time )  *  1000  +  1  |  0 ) ;
          } ;
  
          _tickerActive  =  1 ;
  
          _tick ( 2 ) ;
        }
      } ,
      sleep : hàm  sleep ( )  {
        ( _raf ? _win . hủyAnimationFrame : clearTimeout ) ( _id ) ;
        _tickerActive  =  0 ;
        _req  =  _emptyFunc ;
      } ,
      lagSmoothing : chức năng  lagSmoothing ( ngưỡng , thẻ  điều chỉnh )  {
        _lagThreshold  =  ngưỡng  ||  1  /  _tinyNum ;  // số không nên được hiểu về cơ bản là không giới hạn
  
        _adjustedLag  =  Toán học . min ( AdjustLag ,  _lagThreshold ,  0 ) ;
      } ,
      fps : hàm  fps ( _fps )  {
        _gap  =  1  /  ( _fps  ||  240 ) ;
        _nextTime  =  _self . thời gian  +  _gap ;
      } ,
      add : function  add ( callback )  {
        _ người nghe . indexOf ( gọi lại )  <  0  &&  _listists . push ( gọi lại ) ;
  
        _wake ( ) ;
      } ,
      remove : function  remove ( callback )  {
        var  i ;
        ~ ( i  =  _listists . indexOf ( callback ) )  &&  _listists . mối nối ( i ,  1 ) ;
      } ,
      _listists : _listists
    } ;
    trở về  chính mình ;
  } ( ) ,
      _wake  =  function  _wake ( )  {
    trở lại  ! _tickerActive  &&  _ticker . đánh thức ( ) ;
  } ,
      // cũng đảm bảo các lớp lõi được khởi tạo.
  
  / *
  * -------------------------------------------------
  * DỄ DÀNG
  * -------------------------------------------------
  * /
  _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l  =  tách ra . chiều dài ,
        chỉ mục ,
        val ,
        parsedVal ;
  
    cho  ( ;  i  <  l ;  i ++ )  {
      val  =  chia [ i ] ;
      chỉ số  =  i  ! ==  l  -  1 ? valy . lastIndexOf ( "," ) : val . chiều dài ;
      parsedVal  =  val . substr ( 0 ,  chỉ mục ) ;
      obj [ key ]  =  isNaN ( parsedVal ) ? parsedVal . thay thế ( _quotesExp ,  "" ) . trim ( ) : + parsedVal ;
      phím  =  val . substr ( chỉ số  +  1 ) . xén ( ) ;
    }
  
    trả lại  obj ;
  } ,
      _configEaseFromString  =  function  _configEaseFromString ( tên )  {
    // tên có thể là một chuỗi như "astic.out (1,0.5) "và chuyển vào _easeMap dưới dạng obj và nó sẽ phân tích cú pháp và gọi hàm thực như _easeMap.Elastic.easeOut.config (1,0,5) . Nó cũng sẽ phân tích cú pháp các chuỗi dễ dàng tùy chỉnh miễn là CustomEase được tải và đăng ký (nội bộ với tên _easeMap._CE).
    var  split  =  ( name  +  "" ) . tách ( "(" ) ,
         easy =  _easeMap [ split [ 0 ] ] ;
    trả lại  dễ dàng  &&  tách . chiều dài  >  1  &&  dễ dàng . cấu hình ? dễ dàng . cấu hình . apply ( null ,  ~ name . indexOf ( "{" ) ? [ _parseObjectInString ( split [ 1 ] ) ] : _parenthesesExp . execute ( name ) [ 1 ] . split ( "," ). map ( _numericIfPossible ) ) : _easeMap . _CE  &&  _customEaseExp . kiểm tra ( tên ) ? _easeMap . _CE ( "" ,  name ) : dễ dàng ;
  } ,
      _invertEase  =  function  _invertEase ( dễ dàng )  {
     hàm  trả về ( p )  {
      return  1  -  dễ dàng ( 1  -  p ) ;
    } ;
  } ,
      // cho phép đặt yoyoEase ở trẻ em và có những cái bị ảnh hưởng khi yoyos dòng thời gian của cha mẹ / tổ tiên.
  _propagateYoyoEase  =  function  _propagateYoyoEase ( timeline ,  isYoyo )  {
    var  con  =  dòng thời gian . _thứ nhất ,
        nhẹ nhàng ;
  
    trong khi  ( con )  {
      if  ( phiên bản con của  Dòng  thời gian )  {
        _propagateYoyoEase ( con ,  isYoyo ) ;
      }  else  if  ( child . vars . yoyoEase  &&  ( ! child . _yoyo  ||  ! child . _repeat )  &&  child . _yoyo  ! ==  isYoyo )  {
        if  ( con . dòng thời gian )  {
          _propagateYoyoEase ( con . dòng thời gian ,  isYoyo ) ;
        }  khác  {
          dễ dàng  =  con . _dễ dàng ;
          đứa trẻ . _ease  =  con . _yEase ;
          đứa trẻ . _yEase  =  dễ dàng ;
          đứa trẻ . _yoyo  =  isYoyo ;
        }
      }
  
      con  =  con . _tiếp theo ;
    }
  } ,
      _parseEase  =  function  _parseEase ( easy , defaultEase ) {  
    trở lại  ! dễ dàng ? defaultEase : ( _isFunction ( dễ dàng ) ? easy : _easeMap [ dễ dàng ] || _configEaseFromString ( dễ dàng ) ) || defaultEase ;    
  } ,
      _insertEase  =  function  _insertEase ( tên ,  easyIn ,  easyOut ,  easyInOut )  {
    if  ( easyOut  ===  void  0 )  {
      easyOut  =  chức năng  easyOut ( p )  {
        return  1  -  easyIn ( 1  -  p ) ;
      } ;
    }
  
    if  ( easyInOut  ===  void  0 )  {
      easyInOut  =  chức năng  easyInOut ( p )  {
        trả về  p  <  .5 ? easyIn ( p  *  2 )  /  2 : 1  -  easyIn ( ( 1  -  p )  *  2 )  /  2 ;
      } ;
    }
  
    var  easy  =  {
      easyIn : dễ dàngIn ,
      easyOut : dễ dàng
      easyInOut : easyInOut
    } ,
        lowercaseName ;
  
    _forEachName ( tên ,  hàm  ( tên )  {
      _easeMap [ name ]  =  _globals [ name ]  =  dễ dàng ;
      _easeMap [ lowercaseName  =  tên . toLowerCase ( ) ]  =  easyOut ;
  
      for  ( var  p  in  easy )  {
        _easeMap [ lowercaseName  +  ( p  ===  "easyIn" ? ".in" : p  ===  "easyOut" ? ".out" : ".inOut" ) ]  =  _easeMap [ name  +  "."  +  p ]  =  easy [ p ] ;
      }
    } ) ;
  
    trở lại  dễ dàng ;
  } ,
      _easeInOutFromOut  =  function  _easeInOutFromOut ( easyOut )  {
     hàm  trả về ( p )  {
      trả về  p  <  .5 ? ( 1  -  easyOut ( 1  -  p  *  2 ) )  /  2 : .5  +  easyOut ( ( p  -  .5 )  *  2 )  /  2 ;
    } ;
  } ,
      _configElastic  =  function  _configElastic ( loại ,  biên độ ,  chu kỳ )  {
    var  p1  =  biên độ  > =  1 ? biên độ : 1 ,
        // lưu ý: nếu biên độ <1, chúng ta chỉ cần điều chỉnh khoảng thời gian để có cảm giác tự nhiên hơn. Nếu không, phép toán không hoạt động đúng và đường cong bắt đầu từ 1.
    p2  =  ( chu kỳ  ||  ( loại ? .3 : .45 ) )  /  ( biên độ  <  1 ? biên độ : 1 ) ,
        p3  =  p2  /  _2PI  *  ( Math . asin ( 1  /  p1 )  ||  0 ) ,
        easyOut  =  chức năng  easyOut ( p )  {
      trả về  p  ===  1 ? 1 : p1  *  Toán . pow ( 2 ,  - 10  *  p )  *  _sin ( ( p  -  p3 )  *  p2 )  +  1 ;
    } ,
        dễ dàng  =  loại  ===  "ra" ? easyOut : gõ  ===  "vào" ? hàm  ( p )  {
      return  1  -  easyOut ( 1  -  p ) ;
    } : _easeInOutFromOut ( easyOut ) ;
  
    p2  =  _2PI  /  p2 ;  // tính toán trước để tối ưu hóa
  
    dễ dàng . config  =  chức năng  ( biên độ ,  chu kỳ )  {
      return  _configElastic ( loại ,  biên độ ,  chu kỳ ) ;
    } ;
  
    trở lại  dễ dàng ;
  } ,
      _configBack  =  function  _configBack ( type ,  overshoot )  {
    if  ( vượt quá  ===  void  0 )  {
      vọt lố  =  1.70158 ;
    }
  
    var  easyOut  =  function  easyOut ( p )  {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut ( easyOut ) ;
  
    dễ dàng . config  =  function  ( vượt quá )  {
      return  _configBack ( loại ,  vượt quá ) ;
    } ;
  
    trở lại  dễ dàng ;
  } ;  // một cách rẻ hơn (kb và cpu) nhưng nhẹ nhàng hơn để có được sự dễ dàng có trọng số được tham số hóa bằng cách đưa vào một giá trị giữa -1 (easyIn) và 1 (easyOut) trong đó 0 là tuyến tính.
  // _weightedEase = ratio => {
  // cho y = 0.5 + ratio / 2;
  // return p => (2 * (1 - p) * p * y + p * p);
  //},
  // tính dễ dàng có trọng số được tham số hóa mạnh hơn (nhưng đắt hơn kb / cpu) cho phép bạn cung cấp giá trị từ -1 (easyIn) đến 1 (easyOut) trong đó 0 là tuyến tính.
  // _weightedEaseStrong = ratio => {
  // tỷ lệ = .5 + tỷ lệ / 2;
  // cho o = 1/3 * (ratio <.5? ratio: 1 - ratio),
  // b = ratio - o,
  // c = ratio + o;
  // trả về p => p === 1? p: 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
  //};
  
  
  hàng xuất khẩu . _ticker  =  _ticker ;
  hàng xuất khẩu . _colorStringFilter  =  _colorStringFilter ;
  hàng xuất khẩu . splitColor  =  splitColor ;
  hàng xuất khẩu . interpolate  =  nội suy ;
  hàng xuất khẩu . mapRange  =  mapRange ;
  hàng xuất khẩu . _replaceRandom  =  _replaceRandom ;
  hàng xuất khẩu . wrapYoyo  =  quấnYoyo ;
  hàng xuất khẩu . bọc  =  bọc ;
  hàng xuất khẩu . normalize  =  bình thường hóa ;
  hàng xuất khẩu . unifying  =  hợp nhất ;
  hàng xuất khẩu . pipe  =  ống dẫn ;
  hàng xuất khẩu . random  =  ngẫu nhiên ;
  hàng xuất khẩu . snap  =  chụp nhanh ;
  hàng xuất khẩu . _roundModifier  =  _roundModifier ;
  hàng xuất khẩu . phân phối  =  phân phối ;
  hàng xuất khẩu . shuffle  =  xáo trộn ;
  hàng xuất khẩu . toArray  =  toArray ;
  hàng xuất khẩu . cái kẹp  =  cái kẹp ;
  hàng xuất khẩu . getUnit  =  getUnit ;
  hàng xuất khẩu . _removeLinkedListItem  =  _removeLinkedListItem ;
  hàng xuất khẩu . _setDefaults  =  _setDefaults ;
  hàng xuất khẩu . _round  =  _round ;
  hàng xuất khẩu . _forEachName  =  _forEachName ;
  hàng xuất khẩu . _getProperty  =  _getProperty ;
  hàng xuất khẩu . _getCache  =  _getCache ;
  hàng xuất khẩu . _plugins  =  _plugins ;
  hàng xuất khẩu . _missingPlugin  =  _missingPlugin ;
  hàng xuất khẩu . _relExp  =  _relExp ;
  hàng xuất khẩu . _numWithUnitExp  =  _numWithUnitExp ;
  hàng xuất khẩu . _numExp  =  _numExp ;
  hàng xuất khẩu . _isUndefined  =  _isUndefined ;
  hàng xuất khẩu . _isString  =  _isString ;
  hàng xuất khẩu . _config  =  _config ;
  
  _forEachName ( "Linear, Quad, Cubic, Quart, Quint, Strong" ,  function  ( name ,  i )  {
    var  power  =  i  <  5 ? i  +  1 : i ;
  
    _insertEase ( name  +  ", Power"  +  ( power  -  1 ) ,  i ? function  ( p )  {
      trả về  Toán . pow ( p ,  quyền lực ) ;
    } : function  ( p )  {
      trả lại  p ;
    } ,  hàm  ( p )  {
      return  1  -  Toán học . pow ( 1  -  p ,  lũy thừa ) ;
    } ,  hàm  ( p )  {
      trả về  p  <  .5 ? Toán học . pow ( p  *  2 ,  lũy thừa )  /  2 : 1  -  Toán học . pow ( ( 1  -  p )  *  2 ,  lũy thừa )  /  2 ;
    } ) ;
  } ) ;
  
  _easeMap . Tuyến tính . easyNone  =  _easeMap . none  =  _easeMap . Tuyến tính . dễ dàng trong ;
  
  _insertEase ( "Elastic" ,  _configElastic ( "in" ) ,  _configElastic ( "out" ) ,  _configElastic ( ) ) ;
  
  ( hàm  ( n ,  c )  {
    var  n1  =  1  /  c ,
        n2  =  2  *  n1 ,
        n3  =  2,5  *  n1 ,
        easyOut  =  chức năng  easyOut ( p )  {
      trả về  p  <  n1 ? n  *  p  *  p : p  <  n2 ? n  *  Toán học . pow ( p  -  1.5  /  c ,  2 )  +  .75 : p  <  n3 ? n  *  ( p  - =  2.25  /  c )  *  p  +  .9375 : n  *  Toán . pow ( p  - 2.625  /  c ,  2 )  +  .984375 ;
    } ;
  
    _insertEase ( "Số lần trả lại" ,  hàm  ( p )  {
      return  1  -  easyOut ( 1  -  p ) ;
    } ,  easyOut ) ;
  } ) ( 7,5625 ,  2,75 ) ;
  
  _insertEase ( "Hội chợ triển lãm" ,  function  ( p )  {
    trả lại  p ? Toán học . pow ( 2 ,  10  *  ( p  -  1 ) ) : 0 ;
  } ) ;
  
  _insertEase ( "Circ" ,  function  ( p )  {
    return  - ( _sqrt ( 1  -  p  *  p )  -  1 ) ;
  } ) ;
  
  _insertEase ( "Sine" ,  function  ( p )  {
    trả về  p  ===  1 ? 1 : - _cos ( p  *  _HALF_PI )  +  1 ;
  } ) ;
  
  _insertEase ( "Quay lại" ,  _configBack ( "vào" ) ,  _configBack ( "ra" ) ,  _configBack ( ) ) ;
  
  _easeMap . SteppedEase  =  _easeMap . bước  =  _globals . SteppedEase  =  {
    config : cấu hình chức năng  ( các bước , khởi động ngay lập tức ) {  
      if  ( các bước  ===  void  0 )  {
        bước  =  1 ;
      }
  
      var  p1  =  1  /  bước ,
          p2  =  bước  +  ( bắt đầu ngay lập tức ? 0 : 1 ) ,
          p3  =  ngay lập tức Bắt đầu ? 1 : 0 ,
          max  =  1  -  _tinyNum ;
       hàm  trả về ( p )  {
        return  ( ( p2  *  _clamp ( 0 ,  max ,  p )  |  0 )  +  p3 )  *  p1 ;
      } ;
    }
  } ;
  _ mặc định . easy = _easeMap  [ "quad.out" ] ; 
  
  _forEachName ( "onComplete, onUpdate, onStart, onRepeat, onReverseComplete, onInterrupt" ,  function  ( name )  {
    return  _callbackNames  + =  name  +  ","  +  name  +  "Params," ;
  } ) ;
  / *
   * ------------------------------------------------- -------------------------------------
   * CACHE
   * ------------------------------------------------- -------------------------------------
   * /
  
  
  var  GSCache  =  function  GSCache ( target ,  harness )  {
    cái này . id  =  _gsID ++ ;
    mục tiêu . _gsap  =  cái này ;
    cái này . target  =  mục tiêu ;
    cái này . harness  =  dây nịt ;
    cái này . lấy  =  dây nịt ? dây nịt . lấy : _getProperty ;
    cái này . bộ  =  dây nịt ? dây nịt . getSetter : _getSetter ;
  } ;
  / *
   * ------------------------------------------------- -------------------------------------
   * ANIMATION
   * ------------------------------------------------- -------------------------------------
   * /
  
  
  hàng xuất khẩu . GSCache  =  GSCache ;
  
  var  Animation  =  / * # __ PURE __ * / function  ( )  {
    function  Animation ( vars ,  time )  {
      var  parent  =  vars . cha mẹ  ||  _globalTimeline ;
      cái này . vars  =  vars ;
      this._delay = +vars.delay || 0;
  
      if (this._repeat = vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
  
      this._ts = 1;
  
      _setDuration(this, +vars.duration, 1);
  
      this.data = vars.data;
      _tickerActive || _ticker.wake();
      parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
      vars.reversed && this.reverse();
      vars.paused && this.paused(true);
    }
  
    var _proto = Animation.prototype;
  
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
  
      return this._delay;
    };
  
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
  
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
  
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
  
    _proto . totalTime  =  function  totalTime ( _totalTime ,  Suppevents )  {
      _wake ( ) ;
  
      if  ( ! đối số . length )  {
        trả lại  cái này . _t Thời gian ;
      }
  
      var  parent  =  this . cha mẹ  ||  cái này . _dp ;
  
      if  ( parent  &&  parent . SmoothChildTiming  &&  this . _ts )  {
        // if (! parent._dp && parent._time === parent._dur) {// nếu dòng thời gian gốc hoàn thành ... và sau đó một lúc sau một trong các phần tử con của nó tiếp tục, chúng ta phải quay playhead tới nơi nó nên khôn ngoan, nếu không đứa trẻ sẽ nhảy xuống đường cùng. Mặt trái: điều này giả sử rằng nó đang sử dụng _ticker.time làm tham chiếu.
        // parent._time = _ticker.time - parent._start;
        //}
        cái này . _start  =  _round ( parent . _time  -  ( this . _ts  >  0 ? _totalTime  /  this . _ts : ( ( this . _dirty ? this . totalDuration ( ) : this . _tDur )  -  _totalTime )  /  - this . _ts ) ) ;
  
        _setEnd ( this ) ;
  
        if  ( ! cha mẹ . _dirty )  {
          // để cải thiện hiệu suất. Nếu bộ nhớ đệm của cha mẹ đã bị bẩn, nó cũng đã quan tâm đến việc đánh dấu tổ tiên là bẩn, vì vậy hãy bỏ qua lệnh gọi hàm ở đây.
          _uncache ( cha ) ;
        }  // trong trường hợp bất kỳ dòng thời gian tổ tiên nào đã hoàn thành nhưng hiện đã được kích hoạt, chúng ta nên đặt lại totalTime () của chúng, điều này cũng sẽ đảm bảo rằng chúng được sắp xếp đúng cách và được kích hoạt. Bỏ qua cho các hoạt ảnh ở gốc (lãng phí). Ví dụ: một TimelineLite.exportRoot () được thực hiện khi có một tween bị tạm dừng trên thư mục gốc, quá trình xuất sẽ không hoàn tất cho đến khi tween đó không bị tạm dừng, nhưng hãy tưởng tượng một đứa trẻ được khởi động lại sau đó, sau khi tất cả các tween [không tạm dừng] đã hoàn thành. Sự khởi đầu của đứa trẻ đó sẽ bị đẩy ra ngoài, nhưng một trong những tổ tiên có thể đã hoàn thành.
  
  
        while  ( cha mẹ . cha mẹ )  {
          if  ( cha . cha . _time  ! ==  cha . _start  +  ( cha . _ts  > =  0 ? cha . _tTime  /  cha . _ts : ( cha . totalDuration ( )  -  cha . _tTime )  /  - cha . _ts ) )  {
            cha mẹ . totalTime ( cha . _tTime ,  true ) ;
          }
  
          cha  =  mẹ . cha, mẹ ;
        }
  
        if  ( ! this . parent  &&  this . _dp . autoRemoveChildren )  {
          // nếu hoạt ảnh không có cha mẹ, hãy đặt nó trở lại thành cha cuối cùng của nó (được ghi là _dp đối với những trường hợp chính xác như thế này). Giới hạn đối với cha mẹ với autoRemoveChildren (như globalTimeline) để nếu người dùng xóa hoạt ảnh khỏi dòng thời gian theo cách thủ công và sau đó thay đổi playhead của nó, nó sẽ không được thêm lại.
          _addToTimeline ( this . _dp ,  this ,  this . _start  -  this . _delay ) ;
        }
      }
  
      if  ( this . _tTime  ! ==  _totalTime  ||  ! this . _dur  &&  ! suppEvents  ||  this . _initted  &&  Math . abs ( this . _zTime )  ===  _tinyNum  ||  ! _totalTime  &&  ! this . _initted )  {
        cái này . _ts  ||  ( this . _pTime  =  _totalTime ) ;  // ngược lại, nếu một hoạt ảnh bị tạm dừng, thì playhead sẽ được chuyển về 0, sau đó được tiếp tục lại, nó sẽ trở lại thời điểm ban đầu tại thời điểm tạm dừng
  
        _lazySafeRender ( this ,  _totalTime ,  suppevents ) ;
      }
  
      trả lại  cái này ;
    } ;
  
    _proto . time  = thời  gian chức năng  ( giá trị , kìm hãm ) {  
      trả về  đối số . độ dài ? cái này . totalTime ( Math . min ( this . totalDuration ( ) ,  value  +  _elapsedCycleDuration ( this ) )  %  this . _dur  ||  ( value ? this . _dur : 0 ) ,  SuppressionEvents ) : this . _thời gian ; // lưu ý: nếu mô-đun dẫn đến kết quả là 0, đầu phát có thể chính xác ở cuối hoặc đầu và chúng tôi luôn trì hoãn kết thúc với giá trị khác 0, ngược lại nếu bạn đặt thời gian () thành cuối cùng ( thời lượng ()), nó sẽ hiển thị lúc BẮT ĐẦU!
    } ;
  
    _proto . tổng  số  _  _ _ _ _  _ _  _
      trả về  đối số . độ dài ? cái này . totalTime ( giá trị this . totalDuration ( )  *  , domainsEvents ) : cái này . TotalDuration ( ) ? Toán học . min ( 1 , this . _tTime / this . _tDur ) : cái này . tỷ lệ ;    
    } ;
  
    _proto . tiến trình  =  tiến trình chức năng  ( giá trị , kìm hãm ) {  
      trả về  đối số . độ dài ? cái này . totalTime ( this . time ( ) * ( this . _yoyo && ! ( this . iteration ( ) & 1 ) ? 1 - value : value ) + _elapsedCycleDuration ( this ) , suppEvents ) : this . thời lượng ( ) ?           Toán học . min ( 1 ,  this . _time  /  this . _dur ) : cái này . tỷ lệ ;
    } ;
  
    _proto . lần lặp lại  = lần  lặp hàm  ( giá trị , ức chế ) {  
      var  cycleDuration  =  this . thời lượng ( )  +  cái này . _rRay ;
  
      trả về  đối số . độ dài ? cái này . totalTime ( this . _time  +  ( value  -  1 )  *  cycleDuration ,  ressionEvents ) : cái này . _lặp lại ? _animationCycle ( this . _tTime ,  cycleDuration )  +  1 : 1 ;
    }  // bổ sung tiềm năng trong tương lai:
    // isPlayingBackwards () {
    // let animation = this,
    // định hướng = 1; // 1 = tiến, -1 = lùi
    // while (hoạt ảnh) {
    // định hướng * = animation.reversed () || (animation.repeat () &&! (animation.iteration () & 1))? -1: 1;
    // animation = animation.parent;
    //}
    // trả về định hướng <0;
    //}
    ;
  
    _proto . timeScale  =  function  timeScale ( giá trị )  {
      if  ( ! đối số . length )  {
        trả lại  cái này . _ sơ mi === - _tinyNum  ? 0 : cái này . _ áo sơ mi ; // ghi lại timeScale. Trường hợp đặc biệt: nếu ai đó gọi hàm reverse () trên hoạt ảnh có timeScale bằng 0, chúng tôi gán nó -_tinyNum để ghi nhớ nó đã bị đảo ngược.  
      }
  
      if  ( this . _rts  ===  value )  {
        trả lại  cái này ;
      }
  
      var  tTime  =  this . cha mẹ  &&  cái này . _sao ? _parentToChildTotalTime ( this . parent . _time ,  this ) : cái này . _t Thời gian ;  // đảm bảo thực hiện parentToChildTotalTime () TRƯỚC khi thiết lập _ts mới vì _ts cũ phải được sử dụng trong phép tính đó.
      // ưu tiên hiển thị ở nơi mà playhead của cha mẹ xếp hàng thay vì this._tTime vì có thể có một tween đang tạo hoạt ảnh timeScale của một tween khác trong cùng một vòng lặp kết xuất (cùng một cha mẹ), do đó nếu timeScale tween hiển thị trước, nó sẽ thay đổi _start BEFORE _tTime đã được thiết lập trên đánh dấu đó (trong vòng kết xuất), đóng băng nó một cách hiệu quả cho đến khi tween timeScale kết thúc.
  
      cái này . _rts  =  + value  ||  Số 0 ;
      cái này . _ts  =  cái này . _ps  ||  giá trị  ===  - _tinyNum ? 0 : cái này . _ áo sơ mi ;  // _ts là hàm timeScale sẽ là 0 nếu hoạt ảnh bị tạm dừng.
  
      return  _recacheAncestors ( this . totalTime ( _clamp ( 0 ,  this . _tDur ,  tTime ) ,  true ) ) ;
    } ;
  
    _proto . tạm dừng  =  chức năng  bị tạm dừng ( giá trị )  {
      if  ( ! đối số . length )  {
        trả lại  cái này . _ps ;
      }
  
      if  ( this . _ps  ! ==  value )  {
        cái này . _ps  =  giá trị ;
  
        if  ( giá trị )  {
          cái này . _pTime  =  cái này . _t Thời gian  ||  Toán học . max ( - this . _delay ,  this . rawTime ( ) ) ;  // nếu tạm dừng xảy ra trong giai đoạn trì hoãn, hãy đảm bảo điều đó được tính vào khi tiếp tục.
  
          cái này . _ts  =  cái này . _act  =  0 ;  // _ts là timeScale chức năng, vì vậy một tween bị tạm dừng thực sự sẽ có timeScale bằng 0. Chúng tôi ghi lại timeScale "thực" dưới dạng _rts (đã ghi lại thang thời gian)
        }  khác  {
          _wake ( ) ;
  
          cái này . _ts  =  cái này . _ áo sơ mi ;  // chỉ hoãn lại _pTime (pauseTime) nếu tTime bằng 0. Hãy nhớ rằng ai đó có thể tạm dừng () một hoạt ảnh, sau đó làm sạch playhead và tiếp tục (). Nếu cha mẹ không có SmoothChildTiming, chúng tôi kết xuất tại rawTime () vì startTime sẽ không được cập nhật.
  
          cái này . totalTime ( this . parent  &&  ! this . parent . SmoothChildTiming ? this . rawTime ( ) : this . _tTime  ||  this . _pTime ,  this . process ( ) === 1 && ( this . _tTime - = _tinyNum ) && Math . abs ( cái này . _zTime )         ! ==  _tinyNum ) ;  // edge case: animation.progress (1) .pause (). play () sẽ không hiển thị lại bởi vì playhead đã ở cuối, nhưng lệnh gọi đến totalTime () bên dưới sẽ thêm nó trở lại gốc của nó .. .và không xóa nó lần nữa (vì việc xóa chỉ xảy ra khi hiển thị vào một thời điểm mới). Việc bù trừ một chút _tTime được thực hiện đơn giản để khiến kết xuất cuối cùng trong totalTime () sẽ bật ra khỏi dòng thời gian của nó (tất nhiên nếu autoRemoveChildren là true). Kiểm tra để đảm bảo _zTime không phải -_tinyNum để tránh trường hợp cạnh mà playhead được đẩy đến cuối nhưng BÊN TRONG một tween / callback, chính dòng thời gian bị tạm dừng do đó sẽ tạm dừng hiển thị và để lại một số không hiển thị. Khi tiếp tục, nó sẽ không hiển thị những thứ đó theo cách khác.
        }
      }
  
      trả lại  cái này ;
    } ;
  
    _proto . startTime  =  function  startTime ( value )  {
      if  ( đối số . độ dài )  {
        cái này . _start  =  giá trị ;
        var  parent  =  this . cha mẹ  ||  cái này . _dp ;
        cha  &&  ( cha . _sort  ||  ! this . parent )  &&  _addToTimeline ( cha ,  this ,  value  -  this . _delay ) ;
        trả lại  cái này ;
      }
  
      trả lại  cái này . _bắt đầu ;
    } ;
  
    _proto . endTime  =  function  endTime ( includeRepeats )  {
      trả lại  cái này . _start  +  ( _isNotFalse ( includeRepeats ) ? this . totalDuration ( ) : cái này . thời lượng ( ) )  /  Toán học . abs ( this . _ts ) ;
    } ;
  
    _proto . rawTime  =  function  rawTime ( wrapRepeats )  {
      var  parent  =  this . cha mẹ  ||  cái này . _dp ;  // _dp = cha mẹ được phát hiện
  
      trở lại  ! cha mẹ ? cái này . _tTime : wrapRepeats  &&  ( ! this . _ts  ||  this . _repeat  &&  this . _time  &&  this . totalProgress ( )  <  1 ) ? cái này . _time  %  ( this . _dur  +  this . _rDelay ) :! _ cái này . _sao ? cái này. _tTime : _parentToChildTotalTime ( cha . rawTime ( wrapRepeats ) ,  this ) ;
    }  // globalTime (rawTime) {
    // let animation = this,
    // thời gian = đối số.length? rawTime: animation.rawTime ();
    // while (hoạt ảnh) {
    // time = animation._start + time / (animation._ts || 1);
    // animation = animation.parent;
    //}
    // quay trở lại thời gian;
    //}
    ;
  
    _proto . repeat  =  chức năng  lặp lại ( giá trị )  {
      if  ( đối số . độ dài )  {
        cái này . _repeat  =  giá trị ;
        return  _onUpdateTotalDuration ( this ) ;
      }
  
      trả lại  cái này . _lặp lại ;
    } ;
  
    _proto . repeatDelay  =  function  repeatDelay ( value )  {
      if  ( đối số . độ dài )  {
        cái này . _rDelay  =  giá trị ;
        return  _onUpdateTotalDuration ( this ) ;
      }
  
      trả lại  cái này . _rRay ;
    } ;
  
    _proto . yoyo  =  function  yoyo ( value )  {
      if  ( đối số . độ dài )  {
        cái này . _yoyo  =  giá trị ;
        trả lại  cái này ;
      }
  
      trả lại  cái này . _yoyo ;
    } ;
  
    _proto . seek  =  chức năng  tìm kiếm ( vị trí ,  ức chế )  {
      trả lại  cái này . totalTime ( _parsePosition ( this ,  position ) ,  _isNotFalse ( ressionEvents ) ) ;
    } ;
  
    _proto . restart  =  khởi động lại chức năng  ( includeDelay , Suppevents ) {  
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
  
    _proto.play = function play(from, suppressEvents) {
      if (from != null) {
        this.seek(from, suppressEvents);
      }
  
      trả lại  cái này . đảo ngược ( sai ) . tạm dừng ( sai ) ;
    } ;
  
    _proto . ngược  =  chức năng  đảo ngược ( từ ,  ức chế )  {
      if  ( from  ! =  null )  {
        cái này . seek ( from  ||  this . totalDuration ( ) ,  osystemEvents ) ;
      }
  
      trả lại  cái này . đảo ngược ( đúng ) . tạm dừng ( sai ) ;
    } ;
  
    _proto . pause  =  chức năng  tạm dừng ( atTime ,  Suppevents )  {
      if  ( atTime  ! =  null )  {
        cái này . tìm kiếm ( atTime ,  ressionEvents ) ;
      }
  
      trả lại  cái này . tạm dừng ( đúng ) ;
    } ;
  
    _proto . Resume  =  function  resume ( )  {
      trả lại  cái này . tạm dừng ( sai ) ;
    } ;
  
    _proto . đảo ngược  =  chức năng  bị đảo ngược ( giá trị )  {
      if  ( đối số . độ dài )  {
        if  ( !! value ! == this . reverse ( ) ) {   
          cái này . timeScale ( - this . _rts  ||  ( value ? - _tinyNum : 0 ) ) ;  // trong trường hợp timeScale bằng 0, việc đảo ngược sẽ không có tác dụng gì nên chúng ta sử dụng _tinyNum.
        }
  
        trả lại  cái này ;
      }
  
      trả lại  cái này . _ sơ mi  <  0 ;
    } ;
  
    _proto . voidate  =  function  voidate ( )  {
      cái này . _initted  =  0 ;
      cái này . _zTime  =  - _tinyNum ;
      trả lại  cái này ;
    } ;
  
    _proto . isActive  =  function  isActive ( hasStarted )  {
      var  parent  =  this . cha mẹ  ||  cái này . _dp ,
          start  =  cái này . _bắt đầu ,
          rawTime ;
      trở lại  ! ! ( ! parent  ||  this . _ts  &&  ( this . _initted  ||  ! hasStarted )  &&  parent . isActive ( hasStarted )  &&  ( rawTime  =  parent . rawTime ( true ) )  > =  start  &&  rawTime  <  this . endTime ( true )  -  _tinyNum ) ;
    } ;
  
    _proto . eventCallback  =  function  eventCallback ( type ,  callback ,  params )  {
      var  vars  =  this . vars ;
  
      if  ( đối số . độ dài  >  1 )  {
        if  ( ! callback )  {
          xóa  vars [ loại ] ;
        }  khác  {
          vars [ type ]  =  callback ;
  
          if  ( params )  {
            vars [ type  +  "Params" ]  =  params ;
          }
  
          if  ( type  ===  "onUpdate" )  {
            cái này . _onUpdate  =  gọi lại ;
          }
        }
  
        trả lại  cái này ;
      }
  
      return  vars [ type ] ;
    } ;
  
    _proto . then  =  function  then ( onFulfilled )  {
      var  self  =  this ;
      trả về  lời hứa mới  ( hàm ( giải quyết ) {  
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
  
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
  
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
  
    _proto.kill = function kill() {
      _interrupt(this);
    };
  
    return Animation;
  }();
  
  exports.Animation = Animation;
  
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    cha mẹ : null ,
    _initted : false ,
    _rDelay : 0 ,
    _ts : 1 ,
    _dp : 0 ,
    tỷ lệ : 0 ,
    _zTime : - _tinyNum ,
    _prom : 0 ,
    _ps : false ,
    _ sơ mi : 1
  } ) ;
  / *
   * -------------------------------------------------
   * MỐC THỜI GIAN
   * -------------------------------------------------
   * /
  
  
  var  Timeline  =  / * # __ PURE __ * / function  ( _Animation )  {
    _inheritsLoose ( Dòng thời gian ,  _Animation ) ;
  
    chức năng  Dòng thời gian ( vars ,  thời gian )  {
      var  _this ;
  
      if  ( vars  ===  void  0 )  {
        vars  =  { } ;
      }
  
      _this  =  _Animation . gọi ( cái này ,  vars ,  thời gian )  ||  cái này ;
      _này . nhãn  =  { } ;
      _này . SmoothChildTiming  =  ! ! vars . SmoothChildTiming ;
      _này . autoRemoveChildren  =  ! ! vars . autoRemoveChildren ;
      _này . _sort  =  _isNotFalse ( vars . sortChildren ) ;
      _này . cha  &&  _postAddChecks ( _this . parent ,  _assertThisInitialized ( _this ) ) ;
      vars . scrollTrigger  &&  _scrollTrigger ( _assertThisInitialized ( _this ) ,  vars . scrollTrigger ) ;
      return  _ cái này ;
    }
  
    var  _proto2  =  Dòng thời gian . nguyên mẫu ;
  
    _proto2 . to  =  function  to ( target ,  vars ,  position )  {
      new  Tween ( target ,  _parseVars ( các đối số ,  0 ,  this ) ,  _parsePosition ( this ,  _isNumber ( vars ) ? các đối số [ 3 ] : position ) ) ;
      trả lại  cái này ;
    } ;
  
    _proto2 . from  =  function  from ( target ,  vars ,  position )  {
      new  Tween ( target ,  _parseVars ( các đối số ,  1 ,  this ) ,  _parsePosition ( this ,  _isNumber ( vars ) ? các đối số [ 3 ] : vị trí ) ) ;
      trả lại  cái này ;
    } ;
  
    _proto2 . fromTo  =  function  fromTo ( target ,  fromVars ,  toVars ,  position )  {
      new  Tween ( target ,  _parseVars ( đối số ,  2 ,  this ) ,  _parsePosition ( this ,  _isNumber ( fromVars ) ? objects [ 4 ] : ​​position ) ) ;
      trả lại  cái này ;
    } ;
  
    _proto2 . set  =  bộ chức năng  ( mục tiêu , vars , vị trí ) {   
      vars . thời lượng  =  0 ;
      vars . cha mẹ  =  cái này ;
      _inheritDefaults ( vars ) . repeatDelay  ||  ( vars . repeat  =  0 ) ;
      vars . ngay lập tứcRender  =  ! ! vars . ngay lập tức ;
      new  Tween ( target ,  vars ,  _parsePosition ( this ,  position ) ,  1 ) ;
      trả lại  cái này ;
    } ;
  
    _proto2 . call  =  hàm  gọi ( callback ,  params ,  position )  {
      return  _addToTimeline ( this ,  Tween . delayCall ( 0 ,  callback ,  params ) ,  _parsePosition ( this ,  position ) ) ;
    }  // CHỈ để tương thích ngược! Có thể xóa?
    ;
  
    _proto2 . st  _  _  _ _ _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
      vars . thời lượng  =  thời lượng ;
      vars . leng keng  =  vars . loạng choạng  ||  loạng choạng ;
      vars . onComplete  =  onCompleteAll ;
      vars . onCompleteParams  =  onCompleteAllParams ;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
  
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
  
    _proto2 . st  _  _  _ _ _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
      toVars . startAt  =  fromVars ;
      _inheritDefaults ( toVars ) . ngay lập tứcRender  =  _isNotFalse ( toVars . ngay lập tứcRender ) ;
      trả lại  cái này . stirenTo ( mục tiêu ,  thời lượng ,  toVars , trì  trệ ,  vị trí ,  onCompleteAll ,  onCompleteAllParams ) ;
    } ;
  
    _proto2 . render  =  chức năng  kết xuất ( totalTime ,  ressionEvents ,  force )  {
      var  presTime  =  this . _thời gian ,
          tDur  =  cái này . _bẩn thỉu ? cái này . totalDuration ( ) : cái này . _tDur ,
          dur  =  cái này . _dur ,
          tTime  =  this  ! ==  _globalTimeline  &&  totalTime  >  tDur  -  _tinyNum  &&  totalTime  > =  0 ? tDur : totalTime  <  _tinyNum ? 0 : totalTime ,
          crossStart  =  cái này . _zTime  <  0  ! ==  totalTime  <  0  &&  ( this . _initted  ||  ! dur ) ,
          thời gian ,
          đứa trẻ ,
          tiếp theo ,
          sự lặp lại ,
          cycleDuration ,
          Đã tạm dừng ,
          tạm dừng giữa ,
          timeScale ,
          Bắt đầu ,
          sự thịnh hành ,
          yoyo ,
          isYoyo ;
  
      if  ( tTime  ! ==  this . _tTime  ||  force  ||  crossStart )  {
        nếu  ( thời gian trước ! == cái này . _time  && dur ) {    
          // nếu totalDuration () tìm thấy một phần tử con có startTime âm và SmoothChildTiming là true, mọi thứ sẽ thay đổi trong nội bộ vì vậy chúng ta cần điều chỉnh thời gian cho phù hợp. Ví dụ: nếu một tween bắt đầu ở -30, chúng ta phải chuyển MỌI THỨ về phía trước 30 giây và di chuyển startTime của dòng thời gian này lùi lại 30 giây để mọi thứ phù hợp với tiêu đề phát (không nhảy).
          tTime  + =  this . _time  -  trước thời gian ;
          TotalTime  + =  this . _time  -  trước thời gian ;
        }
  
        thời gian  =  tTime ;
        trước đây, khởi động  =  cái này . _bắt đầu ;
        timeScale  =  cái này . _ts ;
        trước đây đã được sử dụng  =  ! tỷ lệ thời gian ;
  
        if  ( crossStart )  {
          dur  ||  ( presTime  =  this . _zTime ) ;  // khi đầu phát đến thời điểm CHÍNH XÁC 0 (bên phải trên cùng) của dòng thời gian có thời lượng bằng 0, chúng ta cần phân biệt xem các sự kiện có bị chặn hay không để khi đầu phát di chuyển lại (lần sau), nó sẽ kích hoạt lệnh gọi lại. Nếu các sự kiện KHÔNG bị chặn, hiển nhiên lệnh gọi lại sẽ được kích hoạt trong kết xuất này. Về cơ bản, lệnh gọi lại sẽ kích hoạt khi đầu phát ĐẾN hoặc RỜI ĐI chính xác vị trí này, không phải cả hai. Hãy tưởng tượng thực hiện một timeline.seek (0) và có một lệnh gọi lại ở mức 0. Vì các sự kiện bị chặn trên seek () đó theo mặc định, không có gì sẽ kích hoạt, nhưng khi playhead di chuyển khỏi vị trí đó, lệnh gọi lại sẽ kích hoạt. Hành vi này là những gì mọi người trực giác mong đợi.
  
          ( totalTime  ||  ! suppEvents )  &&  ( this . _zTime  =  totalTime ) ;
        }
  
        if  ( this . _repeat )  {
          // điều chỉnh thời gian lặp lại và yoyos
          yoyo  =  cái này . _yoyo ;
          cycleDuration  =  dur  +  this . _rRay ;
          time  =  _round ( tTime  %  cycleDuration ) ;  // làm tròn để tránh lỗi dấu phẩy động. (4% 0,8 phải là 0 nhưng một số trình duyệt báo cáo là 0,79999999!)
  
          if  ( time  >  dur  ||  tDur  ===  tTime )  {
            thời gian  =  dur ;
          }
  
          lần lặp  =  ~ ~ ( tTime  /  cycleDuration ) ;
  
          if  ( lần lặp  & &  lần lặp  ===  tTime  /  cycleDuration )  {
            thời gian  =  dur ;
            phép lặp - ;
          }
  
           thịnh hành =  _animationCycle ( this . _tTime , cycleDuration ) ; 
          ! thời gian && điều  này . _t Thời gian && trước đây ! == lần lặp && ( trước đó = lần lặp ) ; // edge case - nếu ai đó thực hiện addPause () ở đầu dòng thời gian lặp lại, về mặt kỹ thuật, khoảng dừng đó sẽ ở cùng vị trí với phần cuối khiến this._time được đặt thành 0 khi totalTime thông thường sẽ đặt playhead ở kết thúc. Xem https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment- 113005          
  
          if  ( yoyo  &&  lần lặp  &  1 )  {
            time = dur - time;
            isYoyo = 1;
          }
          /*
          make sure children at the end/beginning of the timeline are rendered properly. If, for example,
          a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
          would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
          could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
          we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
          ensure that zero-duration tweens at the very beginning or end of the Timeline work.
          */
  
  
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
  
            if (iteration < prevIteration) {
              rewinding = !rewinding;
            }
  
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
  
            if (!suppressEvents && this.parent) {
              _callback(this, "onRepeat");
            }
  
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
  
            if (prevTime !== this._time || prevPaused !== !this._ts) {
              return this;
            }
  
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur + 0.0001 : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
  
            this._lock = 0;
  
            if (!this._ts && !prevPaused) {
              return this;
            }  // để yoyoEase hoạt động bình thường khi có sự cố giật, chúng ta phải hoán đổi sự dễ dàng trong mỗi tween con.
  
  
            _propagateYoyoEase ( this ,  isYoyo ) ;
          }
        }
  
        if  ( this . _hasPause  &&  ! this . _forcing  &&  this . _lock  <  2 )  {
          pauseTween  =  _findNextPauseTween ( this ,  _round ( trướcTime ) ,  _round ( thời gian ) ) ;
  
          if  ( pauseTween )  {
            tTime  - =  time  -  ( time  =  pauseTween . _start ) ;
          }
        }
  
        cái này . _tTime  =  tTime ;
        cái này . _time  =  thời gian ;
        cái này . _act  =  ! tỷ lệ thời gian ;  // miễn là nó không bị tạm dừng, hãy buộc nó hoạt động để nếu người dùng hiển thị độc lập với dòng thời gian chính, nó sẽ buộc phải hiển thị lại vào lần đánh dấu tiếp theo.
  
        if  ( ! this . _initted )  {
          cái này . _onUpdate  =  cái này . vars . onUpdate ;
          cái này . _initted  =  1 ;
          cái này . _zTime  =  totalTime ;
        }
  
        nếu  ( ! thời gian thịnh hành && thời gian && ! kìm hãmEvents  ) {    
          _callback ( this ,  "onStart" ) ;
        }
  
        if  ( time  > =  beforeTime  &&  totalTime  > =  0 )  {
          con  =  cái này . _thứ nhất ;
  
          trong khi  ( con )  {
            tiếp theo  =  con . _tiếp theo ;
  
            if  ( ( child . _act  ||  time  > =  child . _start )  &&  child . _ts  &&  pauseTween  ! ==  child )  {
              if  ( child . parent  ! ==  this )  {
                // một trường hợp cực biên - kết xuất của đứa trẻ có thể thực hiện một cái gì đó như kill () cái "tiếp theo" trong danh sách được liên kết hoặc hiển thị lại nó. Trong trường hợp đó, chúng ta phải khởi tạo lại toàn bộ kết xuất để an toàn.
                trả lại  cái này . kết xuất ( tổng thời gian ,  kìm hãm ,  lực lượng ) ;
              }
  
              đứa trẻ . render ( child . _ts  >  0 ? ( time  -  child . _start )  *  child . _ts : ( child . _dirty ? child . totalDuration ( ) : child . _tDur )  +  ( time  -  child . _start )  *  child . _ts ,  ressionEvents ,  lực lượng) ;
  
              if  ( time  ! ==  this . _time  ||  ! this . _ts  &&  ! prevPaused )  {
                // trong trường hợp một tween tạm dừng hoặc tìm kiếm dòng thời gian khi hiển thị, chẳng hạn như bên trong onUpdate / onComplete
                pauseTween  =  0 ;
                tiếp theo  &&  ( tTime  + =  this . _zTime  =  - _tinyNum ) ;  // nó không kết thúc hiển thị, vì vậy hãy gắn cờ zTime là phủ định để lần sau khi kết xuất () được gọi là nó sẽ bị buộc (hiển thị bất kỳ phần tử nào còn lại)
  
                phá vỡ ;
              }
            }
  
            con  =  tiếp theo ;
          }
        }  khác  {
          con  =  cái này . _ cuối cùng ;
          var  AdjustTime  =  totalTime  <  0 ? totalTime : thời gian ;  // khi playhead đi lùi sau thời gian bắt đầu của dòng thời gian này, chúng ta phải chuyển thông tin đó xuống các hoạt ảnh con để các thanh thời lượng bằng không biết nên hiển thị giá trị bắt đầu hay kết thúc của chúng.
  
          trong khi  ( con )  {
            tiếp theo  =  con . _prev ;
  
            if  ( ( child . _act  ||  AdjustTime  <=  child . _end )  &&  child . _ts  &&  pauseTween  ! ==  child )  {
              if  ( child . parent  ! ==  this )  {
                // một trường hợp cực biên - kết xuất của đứa trẻ có thể thực hiện một cái gì đó như kill () cái "tiếp theo" trong danh sách được liên kết hoặc hiển thị lại nó. Trong trường hợp đó, chúng ta phải khởi tạo lại toàn bộ kết xuất để an toàn.
                trả lại  cái này . kết xuất ( tổng thời gian ,  kìm hãm ,  lực lượng ) ;
              }
  
              đứa trẻ . kết xuất ( con . _ts  >  0 ? ( Thời gian điều chỉnh  -  con . _ bắt đầu )  *  con . _ts : ( con . _dirty ? con . totalDuration ( ) : con . _tDur )  +  ( Thời gian điều chỉnh  -  con . _ bắt đầu ) * con . _ts , kìm hãmEvents ,    lực lượng ) ;
  
              if (time !== this._time || !this._ts && !prevPaused) {
                //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
  
                phá vỡ ;
              }
            }
  
            con  =  tiếp theo ;
          }
        }
  
        if  ( pauseTween  &&  ! suppEvents )  {
          cái này . tạm dừng ( ) ;
          tạm dừng giữa . kết xuất ( thời gian  > = Thời gian  áp dụng ? 0 : - _tinyNum ) . _zTime = thời gian > = trước thời gian ? 1 : - 1 ;    
  
          if  ( this . _ts )  {
            // cuộc gọi lại được tiếp tục phát lại! Vì vậy, vì chúng tôi có thể đã giữ lại playhead do vị trí tạm dừng, hãy tiếp tục và chuyển đến vị trí nó ĐƯỢC BỔ SUNG (nếu không xảy ra tạm dừng).
            cái này . _start  =  prevStart ;  // nếu thời gian tạm dừng trước đó và người dùng tiếp tục cuộc gọi lại, nó có thể định vị lại dòng thời gian (thay đổi startTime của nó), làm mọi thứ hơi sai lệch, vì vậy chúng tôi đảm bảo rằng _start không thay đổi.
  
            _setEnd ( this ) ;
  
            trả lại  cái này . kết xuất ( tổng thời gian ,  kìm hãm ,  lực lượng ) ;
          }
        }
  
        cái này . _cập nhật  &&  ! ressionEvents  &&  _callback ( this ,  "onUpdate" ,  true ) ;
        if  ( tTime  ===  tDur  &&  tDur  > =  this . totalDuration ( )  ||  ! tTime  &&  prevTime )  if  ( prevStart  ===  this . _start  ||  Math . abs ( timeScale )  ! ==  Math . abs ( this . _ts ) )  if  ( ! this . _lock )  {
          // if ((tTime === tDur && tDur> = this.totalDuration ()) || (! tTime && this._ts <0)) if (prevStart === this._start || Math.abs (timeScale) ! == Math.abs (this._ts)) if (! This._lock) {
          // (totalTime ||! dur) && ((totalTime && this._ts> 0) || (! tTime && this._ts <0)) && _removeFromParent (this, 1); // không xóa nếu dòng thời gian bị đảo ngược và đầu phát không ở 0, nếu không thì tl.progress (1) .reverse () sẽ không hoạt động. Chỉ xóa nếu đầu phát ở cuối và timeScale là dương hoặc nếu đầu phát ở 0 và timeScale là âm.
          ( totalTime  ||  ! dur )  &&  ( tTime  ===  tDur  &&  this . _ts  >  0  ||  ! tTime  &&  this . _ts  <  0 )  &&  _removeFromParent ( this ,  1 ) ;  // không xóa nếu dòng thời gian bị đảo ngược và đầu phát không ở 0, nếu không thì tl.progress (1) .reverse () sẽ không hoạt động. Chỉ xóa nếu đầu phát ở cuối và timeScale là dương hoặc nếu đầu phát ở 0 và timeScale là âm.
  
          if  ( ! ressionEvents  &&  ! ( totalTime  <  0  &&  ! prevTime )  &&  ( tTime  ||  prevTime ) )  {
            _callback ( this ,  tTime  ===  tDur ? "onComplete" : "onReverseComplete" ,  true ) ;
  
            cái này . _prom  &&  ! ( tTime  <  tDur  &&  this . timeScale ( )  >  0 )  &&  this . _prom ( ) ;
          }
        }
      }
  
      trả lại  cái này ;
    } ;
  
    _proto2 . add  =  chức năng  thêm ( con ,  chức vụ )  {
      var  _this2  =  this ;
  
      if  ( ! _isNumber ( position ) )  {
        position  =  _parsePosition ( this ,  position ) ;
      }
  
      if  ( ! ( ví dụ con  của Animation ) ) {  
        if  ( _isArray ( con ) )  {
          đứa trẻ . forEach ( function  ( obj )  {
            return  _this2 . thêm ( obj ,  vị trí ) ;
          } ) ;
          return  _uncache ( this ) ;
        }
  
        if  ( _isString ( con ) )  {
          trả lại  cái này . addLabel ( con ,  vị trí ) ;
        }
  
        if  ( _isFunction ( con ) )  {
          con  =  Tween . delayCall ( 0 ,  con ) ;
        }  khác  {
          trả lại  cái này ;
        }
      }
  
      trả lại  cái này  ! ==  con ? _addToTimeline ( this ,  child ,  position ) : this ;  // không cho phép dòng thời gian được thêm vào chính nó khi còn nhỏ!
    } ;
  
    _proto2 . getChildren  =  function  getChildren ( lồng nhau ,  hai tuổi , dòng thời gian , ignoreBeforeTime ) {   
      if  ( lồng nhau  ===  void  0 )  {
        lồng nhau  =  true ;
      }
  
      if  ( tweens  ===  void  0 )  {
        tweens  =  đúng ;
      }
  
      if  ( timeline  ===  void  0 )  {
        các mốc thời gian  =  true ;
      }
  
      if  ( ignoreBeforeTime  ===  void  0 )  {
        bỏ quaBeforeTime  =  - _bigNum ;
      }
  
      var  a  =  [ ] ,
          con  =  cái này . _thứ nhất ;
  
      trong khi  ( con )  {
        if  ( child . _start  > =  ignoreBeforeTime )  {
          if  ( instance con  của Tween ) {  
             trẻ  em && a . đẩy ( trẻ em ) ;
          }  khác  {
            các mốc thời gian  &&  a . đẩy ( trẻ em ) ;
            lồng nhau  &&  a . đẩy . apply ( a ,  child . getChildren ( true ,  tweens ,  timeline ) ) ;
          }
        }
  
        con  =  con . _tiếp theo ;
      }
  
      trả lại  a ;
    } ;
  
    _proto2 . getById  =  function  getById ( id )  {
      var  animations  =  this . getChildren ( 1 ,  1 ,  1 ) ,
          i  =  hình ảnh động . chiều dài ;
  
      trong khi  ( tôi - )  {
        if  ( animations [ i ] . vars . id  ===  id )  {
          trả về  hình ảnh động [ i ] ;
        }
      }
    } ;
  
    _proto2 . remove  =  function  remove ( child )  {
      if  ( _isString ( con ) )  {
        trả lại  cái này . removeLabel ( con ) ;
      }
  
      if  ( _isFunction ( con ) )  {
        trả lại  cái này . killTweensOf ( con ) ;
      }
  
      _removeLinkedListItem ( this ,  child ) ;
  
      if  ( child  ===  this . _recent )  {
        cái này . _recent  =  cái này . _ cuối cùng ;
      }
  
      return  _uncache ( this ) ;
    } ;
  
    _proto2 . totalTime  =  function  totalTime ( _totalTime2 ,  Suppevents )  {
      if  ( ! đối số . length )  {
        trả lại  cái này . _t Thời gian ;
      }
  
      cái này . _forcing  =  1 ;
  
      if  ( ! this . parent  &&  ! this . _dp  &&  this . _ts )  {
        // trường hợp đặc biệt cho dòng thời gian toàn cục (hoặc bất kỳ dòng thời gian nào khác không có cha mẹ hoặc cha mẹ tách rời).
        cái này . _start  =  _round ( _ticker . time  -  ( this . _ts  >  0 ? _totalTime2  /  this . _ts : ( this . totalDuration ( )  -  _totalTime2 )  /  - this . _ts ) ) ;
      }
  
      _Đồng chí . nguyên mẫu . tổng thời gian . gọi ( this ,  _totalTime2 ,  suppevents ) ;
  
      this._forcing = 0;
      return this;
    };
  
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
  
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
  
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
  
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
  
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
  
        child = child._next;
      }
    };
  
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;
  
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
  
      return this;
    };
  
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          children;
  
      trong khi  ( con )  {
        if  ( instance con  của Tween ) {  
          if  ( _arrayContainsAny ( child . _targets ,  parsedTargets )  &&  ( ! onlyActive  ||  child . isActive ( onlyActive  ===  "started" ) ) )  {
            a . đẩy ( trẻ em ) ;
          }
        }  else  if  ( ( children  =  child . getTweensOf ( parsedTargets ,  onlyActive ) ) . length )  {
          a . đẩy . áp dụng ( a ,  trẻ em ) ;
        }
  
        con  =  con . _tiếp theo ;
      }
  
      trả lại  a ;
    } ;
  
    _proto2 . tweenTo  =  function  tweenTo ( position ,  vars )  {
      vars  =  vars  ||  { } ;
  
      var  tl  =  this ,
          endTime  =  _parsePosition ( tl ,  vị trí ) ,
          _vars  =  vars ,
          startAt  =  _vars . startAt ,
          _onStart  =  _vars . onStart ,
          onStartParams  =  _vars . onStartParams ,
          tween  =  Tween . to ( tl ,  _setDefaults ( vars ,  {
        dễ dàng : "không" ,
        lười biếng : sai ,
        time : endTime ,
        thời lượng : vars . thời lượng  ||  Toán học . abs ( ( endTime  -  ( startAt  &&  "time"  trong  startAt ? startAt . time : tl . _time ) )  /  tl . timeScale ( ) )  ||  _tinyNum ,
        onStart : function  onStart ( )  {
          tl . tạm dừng ( ) ;
          var  thời lượng  =  vars . thời lượng  ||  Toán học . abs ( ( endTime  -  tl . _time )  /  tl . timeScale ( ) ) ;
          tuổi mười bảy . _dur  ! ==  thời lượng  &&  _setDuration ( mười bảy ,  thời lượng ) . kết xuất ( tween . _time ,  true ,  true ) ;
          _onStart  &&  _onStart . áp dụng ( tween ,  onStartParams  ||  [ ] ) ;  // trong trường hợp người dùng có onStart trong vars - chúng tôi không muốn ghi đè nó.
        }
      } ) ) ;
  
      trả lại  tween ;
    } ;
  
    _proto2 . tweenFromTo  =  function  tweenFromTo ( fromPosition ,  toPosition ,  vars )  {
      trả lại  cái này . tweenTo ( toPosition ,  _setDefaults ( {
        startAt : {
          time : _parsePosition ( this ,  fromPosition )
        }
      } ,  vars ) ) ;
    } ;
  
    _proto2 . gần đây  =  hàm  gần đây ( )  {
      trả lại  cái này . _cung ;
    } ;
  
    _proto2 . nextLabel  =  function  nextLabel ( afterTime )  {
      if  ( afterTime  ===  void  0 )  {
        afterTime  =  cái này . _thời gian ;
      }
  
      return  _getLabelInDirection ( this ,  _parsePosition ( this ,  afterTime ) ) ;
    } ;
  
    _proto2 . beforeLabel  =  function  beforeLabel ( beforeTime )  {
      if  ( beforeTime  ===  void  0 )  {
        beforeTime  =  cái này . _thời gian ;
      }
  
      return  _getLabelInDirection ( this ,  _parsePosition ( this ,  beforeTime ) ,  1 ) ;
    } ;
  
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
  
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
  
      var child = this._first,
          labels = this.labels,
          p;
  
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
        }
  
        child = child._next;
      }
  
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
  
      return _uncache(this);
    };
  
    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;
  
      while (child) {
        đứa trẻ . làm mất hiệu lực ( ) ;
        con  =  con . _tiếp theo ;
      }
  
      return  _Animation . nguyên mẫu . làm mất hiệu lực . gọi ( cái này ) ;
    } ;
  
    _proto2 . clear  =  function  clear ( includeLabels )  {
      if  ( includeLabels  ===  void  0 )  {
        includeLabels  =  true ;
      }
  
      var  child  =  this . _thứ nhất ,
          tiếp theo ;
  
      trong khi  ( con )  {
        tiếp theo  =  con . _tiếp theo ;
        cái này . loại bỏ ( con ) ;
        con  =  tiếp theo ;
      }
  
      cái này . _time  =  cái này . _tTime  =  cái này . _pTime  =  0 ;
  
      if  ( includeLabels )  {
        cái này . nhãn  =  { } ;
      }
  
      return  _uncache ( this ) ;
    } ;
  
    _proto2 . totalDuration  =  hàm  totalDuration ( giá trị )  {
      var  max  =  0 ,
          self  =  this ,
          con  =  bản thân . _ cuối cùng ,
          prevStart  =  _bigNum ,
          trước ,
          kết thúc ,
          bắt đầu ,
          cha, mẹ ;
  
      if  ( đối số . độ dài )  {
        trở về  tự . timeScale ( ( self . _repeat  <  0 ? self . time ( ) : self . totalDuration ( ) ) / ( self . reverseed ( ) ? - value : value ) ) ;  
      }
  
      if  ( self . _dirty )  {
        cha mẹ  =  bản thân . cha, mẹ ;
  
        trong khi  ( con )  {
          trước đây  =  con . _prev ;  // ghi lại nó ở đây trong trường hợp tween thay đổi vị trí trong chuỗi ...
  
          đứa trẻ . _đồ bẩn  &&  con . TotalDuration ( ) ;  // có thể thay đổi tween._startTime, vì vậy hãy đảm bảo rằng bộ nhớ cache của hoạt ảnh sạch trước khi phân tích nó.
  
          start  =  con . _bắt đầu ;
  
          if  ( start  >  prev Bắt đầu  &&  self . _sort  &&  child . _ts  &&  ! self . _lock )  {
            // trong trường hợp một trong hai cột bị dịch chuyển không theo thứ tự, nó cần được chèn lại vào vị trí chính xác trong trình tự
            bản thân . _khóa  =  1 ;  // ngăn chặn các cuộc gọi đệ quy vô tận - có những phương thức được kích hoạt để kiểm tra thời lượng / totalDuration khi chúng ta thêm ().
  
            _addToTimeline ( tự ,  con ,  bắt đầu  -  con . _delay ,  1 ) . _lock  =  0 ;
          }  khác  {
            prevStart  =  bắt đầu ;
          }
  
          if  ( start  <  0  &&  child . _ts )  {
            // con không được phép có startTimes phủ định trừ khi SmoothChildTiming là true, vì vậy hãy điều chỉnh tại đây nếu tìm thấy.
            max  - =  bắt đầu ;
  
            if  ( ! parent  &&  ! self . _dp  ||  parent  &&  parent . SmoothChildTiming )  {
              bản thân . _start  + =  start  /  self . _ts ;
              bản thân . _time  - =  bắt đầu ;
              bản thân . _tTime  - =  bắt đầu ;
            }
  
            bản thân . shiftChildren ( - start ,  false ,  - 1e999 ) ;
            trước khi bắt đầu  =  0 ;
          }
  
          end  =  _setEnd ( con ) ;
  
          if  ( end  >  max  &&  child . _ts )  {
            max  =  kết thúc ;
          }
  
          con  =  trước ;
        }
  
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1);
  
        self._dirty = 0;
      }
  
      return self._tDur;
    };
  
    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
  
        _lastRenderedFrame = _ticker.frame;
      }
  
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
  
          child || _ticker.sleep();
        }
      }
    };
  
    return Timeline;
  }(Animation);
  
  exports.TimelineLite = exports.TimelineMax = exports.Timeline = Timeline;
  
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  
  var  _addComplexStringPropTween  =  function  _addComplexStringPropTween ( target ,  prop ,  start ,  end ,  setter ,  stringFilter ,  funcParam )  {
    // lưu ý: chúng tôi gọi _addComplexStringPropTween.call (tweenInstance ...) để đảm bảo rằng nó được phân bổ đúng phạm vi. Chúng tôi cũng có thể gọi nó từ bên trong một plugin, do đó "this" sẽ đề cập đến plugin.
    var  pt  =  new  PropTween ( this . _pt ,  target ,  prop ,  0 ,  1 ,  _renderComplexString ,  null ,  setter ) ,
        chỉ mục  =  0 ,
        matchIndex  =  0 ,
        kết quả ,
        startNums ,
        màu sắc ,
        endNum ,
        khúc gỗ ,
        startNum ,
        hasRandom ,
        a ;
    pt . b  =  bắt đầu ;
    pt . e  =  kết thúc ;
    start  + =  "" ;  // đảm bảo các giá trị là chuỗi
  
    end  + =  "" ;
  
    if  ( hasRandom  =  ~ end . indexOf ( "random (" ) )  {
      end  =  _replaceRandom ( kết thúc ) ;
    }
  
    if  ( stringFilter )  {
      a  =  [ bắt đầu ,  kết thúc ] ;
      stringFilter ( a ,  target ,  prop ) ;  // truyền một mảng với các giá trị bắt đầu và kết thúc và để bộ lọc thực hiện bất cứ điều gì nó cần đối với các giá trị.
  
      start  =  a [ 0 ] ;
      end  =  a [ 1 ] ;
    }
  
    startNums  =  bắt đầu . khớp ( _complexStringNumExp )  ||  [ ] ;
  
    trong khi  ( kết quả  =  _complexStringNumExp . thi hành ( end ) )  {
      endNum  =  result [ 0 ] ;
      chunk  =  kết thúc . chuỗi con ( chỉ mục ,  kết quả . chỉ mục ) ;
  
      nếu  ( màu )  {
        màu  =  ( màu  +  1 )  %  5 ;
      }  else  if  ( chunk . substr ( - 5 )  ===  "rgba (" )  {
        màu  =  1 ;
      }
  
      if  ( endNum  ! ==  startNums [ matchIndex ++ ] )  {
        startNum  =  parseFloat ( startNums [ matchIndex  -  1 ] )  ||  Số 0 ;  // các PropTweens lồng nhau này được xử lý theo một cách đặc biệt - chúng tôi sẽ không bao giờ thực sự gọi một phương thức render hoặc setter trên chúng. Chúng tôi sẽ chỉ lặp lại chúng trong phương thức kết xuất chuỗi phức hợp cha của PropTween.
  
        pt . _pt  =  {
          _tiếp theo : pt . _pt ,
          p : chunk  ||  matchIndex  ===  1 ? đoạn : "," ,
          // lưu ý: Thông số SVG cho phép bỏ qua dấu phẩy / dấu cách khi dấu âm được chèn giữa hai số, như 2,5-5,3 thay vì 2,5, -5,3 nhưng khi tweening, giá trị âm có thể chuyển sang dương, vì vậy chúng tôi chỉ chèn dấu phẩy trong trường hợp.
          s : startNum ,
          c : endNum . charAt ( 1 )  ===  "=" ? parseFloat ( endNum . substr ( 2 ) )  *  ( endNum . charAt ( 0 )  ===  "-" ? - 1 : 1 ) : parseFloat ( endNum )  -  startNum ,
          m : màu  &&  màu  <  4 ? Toán học . vòng : 0
        } ;
        chỉ mục  =  _complexStringNumExp . lastIndex ;
      }
    }
  
    pt . c  =  index  <  end . độ dài ? kết thúc . chuỗi con ( chỉ mục ,  kết thúc . chiều dài ) : "" ;  // chúng ta sử dụng "c" của PropTween để lưu phần cuối cùng của chuỗi (sau số cuối cùng)
  
    pt . fp  =  funcParam ;
  
    if  ( _relExp . test ( end )  ||  hasRandom )  {
      pt . e  =  0 ;  // nếu chuỗi kết thúc chứa giá trị tương đối hoặc giá trị ngẫu nhiên động (...), hãy xóa phần cuối của nó để trên kết xuất cuối cùng, chúng tôi không thực sự đặt nó thành chuỗi có ký tự + = hoặc - = (buộc nó phải sử dụng giá trị được tính toán).
    }
  
    cái này . _pt  =  pt ;  // bắt đầu danh sách liên kết với PropTween mới này. Hãy nhớ rằng, chúng tôi gọi _addComplexStringPropTween.call (tweenInstance ...) để đảm bảo rằng nó được phân bổ đúng phạm vi. Chúng tôi cũng có thể gọi nó từ bên trong một plugin, do đó "this" sẽ đề cập đến plugin.
  
    trả về  pt ;
  } ,
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3 ) ] ( funcParam ) : target [ prop ] ( ) ,
        setter  =  ! _isFunction ( currentValue ) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc ,
        pt ;
  
    if  ( _isString ( end ) )  {
      if  ( ~ end . indexOf ( "random (" ) )  {
        end  =  _replaceRandom ( kết thúc ) ;
      }
  
      if  ( end . charAt ( 1 )  ===  "=" )  {
        end  =  parseFloat ( parsedStart )  +  parseFloat ( end . substr ( 2 ) )  *  ( end . charAt ( 0 )  ===  "-" ? - 1 : 1 )  +  ( getUnit ( parsedStart )  ||  0 ) ;
      }
    }
  
    if  ( parsedStart  ! ==  end )  {
      if  ( ! isNaN ( parsedStart  +  end ) )  {
        pt  =  new  PropTween ( this . _pt ,  target ,  prop ,  + parsedStart  ||  0 ,  end  -  ( parsedStart  ||  0 ) ,  typeof  currentValue  ===  "boolean" ? _renderBoolean : _renderPlain ,  0 ,  setter ) ;
        funcParam  &&  ( pt . fp  =  funcParam ) ;
        bổ ngữ  &&  pt . modifier ( bổ ngữ ,  cái này ,  mục tiêu ) ;
        trả lại  cái này . _pt  =  pt ;
      }
  
      ! giá trị hiện tại &&  ! ( hỗ trợ mục tiêu ) && _missingPlugin ( chống đỡ , kết thúc ) ;      
      return  _addComplexStringPropTween . gọi ( this ,  target ,  prop ,  parsedStart ,  end ,  setter ,  stringFilter  ||  _config . stringFilter ,  funcParam ) ;
    }
  } ,
      // tạo một bản sao của đối tượng vars và xử lý bất kỳ giá trị dựa trên hàm nào (đặt các giá trị kết quả trực tiếp vào bản sao) cũng như các chuỗi có "random ()" trong đó. Nó KHÔNG xử lý các giá trị tương đối.
  _processVars  =  function  _processVars ( vars ,  index ,  target ,  target ,  tween )  {
    if  ( _isFunction ( vars ) )  {
      vars  =  _parseFuncOrString ( vars ,  tween ,  index ,  target ,  target ) ;
    }
  
    if  ( ! _isObject ( vars )  ||  vars . style  &&  vars . nodeType  ||  _isArray ( vars ) )  {
      return  _isString ( vars ) ? _parseFuncOrString ( vars ,  tween ,  index ,  target ,  target ) : vars ;
    }
  
    var  copy  =  { } ,
        p _
  
    for  ( p  in  vars )  {
      copy [ p ]  =  _parseFuncOrString ( vars [ p ] ,  tween ,  index ,  target ,  target ) ;
    }
  
    trả lại  bản sao ;
  } ,
      _checkPlugin  =  function  _checkPlugin ( thuộc tính ,  vars ,  tween ,  index ,  target ,  target )  {
    var  plugin ,  pt ,  ptLookup ,  i ;
  
    if  ( _plugins [ property ]  &&  ( plugin  =  new  _plugins [ property ] ( ) ) . init ( target ,  plugin . rawVars ? vars [ property ] : _processVars ( vars [ property ] ,  index ,  target ,  target ,  tween ) ,  tween ,  chỉ mục , target )  ! ==  false )  {
      tuổi mười bảy . _pt  =  pt  =  new  PropTween ( tween . _pt ,  target ,  property ,  0 ,  1 ,  plugin . render ,  plugin ,  0 ,  plugin . priority ) ;
  
      if  ( tween  ! ==  _quickTween )  {
        ptLookup  =  tween . _ptLookup [ tween . _mục tiêu . indexOf ( target ) ] ;  // lưu ý: chúng ta không thể sử dụng tween._ptLookup [index] bởi vì đối với các cột xếp so le, chỉ mục từ mảng fullTargets sẽ không khớp với chỉ mục trong từng tween riêng lẻ sinh ra từ dãy số.
  
        i  =  plugin . _ đạo cụ . chiều dài ;
  
        trong khi  ( tôi - )  {
          ptLookup [ plugin . _props [ i ] ]  =  pt ;
        }
      }
    }
  
    trả lại  plugin ;
  } ,
      _overwritingTween ,
      // lưu trữ một tham chiếu tạm thời để chúng ta có thể tránh ghi đè lên chính nó.
  _initTween  =  function  _initTween ( tween ,  time )  {
    var  vars  =  tween . vars ,
        dễ dàng  =  vars . bình tĩnh ,
        startAt  =  vars . startAt ,
        ngay lập tứcRender  =  vars . ngay lập tức
        lười biếng  =  vars . lười biếng ,
        onUpdate  =  vars . onUpdate ,
        onUpdateParams  =  vars . onUpdateParams ,
        callbackScope  =  vars . callbackScope ,
        runBackwards  =  vars . runBackwards ,
        yoyoEase  =  vars . yoyoEase ,
        keyframes  =  vars . khung hình chính ,
        autoRevert  =  vars . autoRevert ,
        dur  =  tween . _dur ,
        trước đây .StartAt  =  tween . _startAt ,
        target  =  tween . _ mục tiêu ,
        phụ huynh  =  tween . cha mẹ ,
        fullTargets  =  parent  &&  parent . dữ liệu  ===  "lồng vào nhau" ? cha mẹ . cha mẹ . _targets : mục tiêu ,
        autoOverwrite  =  tween . _overwrite  ===  "auto" ,
        tl  =  tween . dòng thời gian ,
        cleanVars ,
        tôi ,
        p ,
        pt ,
        mục tiêu ,
        đã có ,
        gsData ,
        dây nịt ,
        plugin ,
        ptLookup ,
        chỉ mục ,
        harnessVars ;
    tl  &&  ( ! keyframes  ||  ! easy )  &&  ( easy  =  "none" ) ;
    tuổi mười bảy . _ease  =  _parseEase ( dễ dàng ,  _defaults . dễ dàng ) ;
    tuổi mười bảy . _yEase  =  yoyoEase ? _invertEase ( _parseEase ( yoyoEase  ===  true ? easy : yoyoEase , _defaults . easy ) ) : 0 ; 
  
    if  ( yoyoEase  &&  tween . _yoyo  &&  ! tween . _repeat )  {
      // chắc hẳn đã có một dòng thời gian chính với yoyo: true hiện đang ở giai đoạn yoyo của nó, vì vậy hãy lật ngược lại.
      yoyoEase  =  tween . _yEase ;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
  
    if (!tl) {
      //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
  
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();
  
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
  
  
        if (immediateRender) {
          if (time > 0) {
            !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
          } else if (dur) {
            return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
          }
        }
      } else if (runBackwards && dur) {
        //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
  
          p = _merge(cleanVars, {
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            // không-thời gian kéo dài thời gian hiển thị ngay lập tức theo mặc định, nhưng nếu chúng tôi không được hướng dẫn cụ thể để hiển thị tween này ngay lập tức, chúng tôi nên bỏ qua điều này và chỉ cần _init () để ghi lại các giá trị bắt đầu (hiển thị chúng ngay lập tức sẽ đẩy chúng hoàn thành lãng phí trong trường hợp đó - chúng tôi sẽ phải hiển thị (-1) ngay sau đó)
            loạng choạng : 0 ,
            parent : parent  // đảm bảo rằng các tween lồng vào nhau có dấu ngăn cách được xử lý đúng cách, như gsap.from (". class", {y: gsap.utils.wrap ([- 100,100])})
  
          } ) ;
          harnessVars  &&  ( p [ harness . prop ]  =  harnessVars ) ;  // trong trường hợp ai đó làm điều gì đó như .from (..., {css: {}})
  
          _removeFromParent ( tween . _startAt  =  Tween . set ( target ,  p ) ) ;
  
          if  ( ! ngay lập tức )  {
            _initTween ( tween . _startAt ,  _tinyNum ) ;  // đảm bảo rằng các giá trị ban đầu được ghi lại
  
          }  else  if  ( ! time )  {
            trở lại ;
          }
        }
      }
  
      tuổi mười bảy . _pt  =  0 ;
      lười biếng  =  dur  &&  _isNotFalse ( lười biếng )  ||  lười biếng  &&  ! dur ;
  
      for  ( i  =  0 ;  i  <  target . length ;  i ++ )  {
        target  =  target [ i ] ;
        gsData  =  target . _gsap  ||  _harness ( mục tiêu ) [ i ] . _gsap ;
        tuổi mười bảy . _ptLookup [ i ]  =  ptLookup  =  { } ;
        _lazyLookup [ gsData . id ]  &&  _lazyRender ( ) ;  // nếu các cột khác của cùng một mục tiêu gần đây đã bắt đầu nhưng vẫn chưa được hiển thị, chúng ta phải buộc kết xuất để các giá trị bắt đầu là chính xác (hãy tưởng tượng điền vào một dòng thời gian với một loạt các cột tuần tự và sau đó chuyển đến chấm dứt)
  
        index  =  fullTargets  ===  mục tiêu ? i : fullTargets . indexOf ( mục tiêu ) ;
  
        if  ( harness  &&  ( plugin  =  new  harness ( ) ) . init ( target ,  harnessVars  ||  cleanVars ,  tween ,  index ,  fullTargets )  ! ==  false )  {
          tuổi mười bảy . _pt  =  pt  =  new  PropTween ( tween . _pt ,  target ,  plugin . name ,  0 ,  1 ,  plugin . render ,  plugin ,  0 ,  plugin . priority ) ;
  
          plugin . _ đạo cụ . forEach ( hàm  ( tên )  {
            ptLookup [ name ]  =  pt ;
          } ) ;
  
          plugin . ưu tiên  &&  ( hasPosystem  =  1 ) ;
        }
  
        if  ( ! harness  ||  harnessVars )  {
          cho  ( p  trong  cleanVars )  {
            if  ( _plugins [ p ]  &&  ( plugin  =  _checkPlugin ( p ,  cleanVars ,  tween ,  index ,  target ,  fullTargets ) ) )  {
              plugin . ưu tiên  &&  ( hasPosystem  =  1 ) ;
            }  khác  {
              ptLookup [ p ]  =  pt  =  _addPropTween . call ( tween ,  target ,  p ,  "get" ,  cleanVars [ p ] ,  index ,  fullTargets ,  0 ,  vars . stringFilter ) ;
            }
          }
        }
  
        tuổi mười bảy . _op  &&  tween . _op [ i ]  &&  tween . kill ( target ,  tween . _op [ i ] ) ;
  
        if  ( autoOverwrite  &&  tween . _pt )  {
          _overwritingTween  =  tween ;
  
          _globalTimeline . killTweensOf ( target ,  ptLookup ,  "started" ) ;  // Cũng đảm bảo rằng việc ghi đè không ghi đè lên tween NÀY !!!
  
  
          _overwritingTween  =  0 ;
        }
  
        tuổi mười bảy . _pt  &&  lazy  &&  ( _lazyLookup [ gsData . id ]  =  1 ) ;
      }
  
      hasPinent  &&  _sortPropTweensByPosystem ( tween ) ;
      tuổi mười bảy . _onInit  &&  tween . _onInit ( tween ) ;  // các plugin như RoundProps phải đợi cho đến khi TẤT CẢ các PropTweens được khởi tạo. Trong hàm init () của plugin, nó đặt _onInit trên phiên bản tween. Có thể không đẹp / trực quan, nhưng nó nhanh và giữ cho kích thước tệp giảm xuống.
    }
  
    tuổi mười bảy . _từ  =  ! tl  &&  ! ! vars . runBackwards ;  // các dòng thời gian lồng nhau không bao giờ được chạy ngược lại - điều ngược lại nằm ở phần con.
  
    tuổi mười bảy . _onUpdate  =  onUpdate ;
    tween._initted = 1;
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;
  
    if (!propertyAliases) {
      return vars;
    }
  
    copy = _merge({}, vars);
  
    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
  
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
  
    return copy;
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
  /*
   * --------------------------------------------------------------------------------------
   * TWEEN
   * --------------------------------------------------------------------------------------
   */
  
  
  exports._checkPlugin = _checkPlugin;
  
  var Tween = /*#__PURE__*/function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);
  
    chức năng  Tween ( mục tiêu ,  vars ,  thời gian ,  bỏ qua Inherit )  {
      var  _this3 ;
  
      if  ( typeof  vars  ===  "number" )  {
        thời gian . thời lượng  =  vars ;
        vars  =  thời gian ;
        time  =  null ;
      }
  
      _this3  =  _Animation2 . gọi ( cái này ,  bỏ quaInherit ? vars : _inheritDefaults ( vars ) ,  thời gian )  ||  cái này ;
      var  _this3 $ vars  =  _this3 . vars ,
          thời lượng  =  _this3 $ vars . thời hạn ,
          delay  =  _this3 $ vars . trì hoãn ,
          ngay lập tứcRender  =  _this3 $ vars . ngay lập tức
           leng keng =  _this3 $ vars . loạng choạng ,
          ghi đè  =  _this3 $ vars . ghi đè lên ,
          keyframes  =  _this3 $ vars . khung hình chính ,
          defaults  =  _this3 $ vars . mặc định ,
          scrollTrigger  =  _this3 $ vars . scrollTrigger ,
          yoyoEase  =  _this3 $ vars . yoyoEase ,
          cha mẹ  =  _this3 . cha mẹ ,
          parsedTargets  =  ( _isArray ( target ) ? _isNumber ( target [ 0 ] ) : "length"  trong  vars ) ? [ mục tiêu ] : toArray ( mục tiêu ) ,
          tl ,
          tôi ,
          sao chép ,
          l ,
          p ,
          curTarget ,
          leng kengFunc ,
          StackgerVarsToMerge ;
      _này3 . _targets  =  parsedTargets . độ dài ? _harness ( parsedTargets ) : _warn ( "mục tiêu GSAP"  +  mục tiêu  + "không tìm thấy  . https://greensock.com" ,!  _config . nullTargetWarn ) || [ ] ;  
      _này3 . _ptLookup  =  [ ] ;  // Tra cứu PropTween. Một mảng chứa một đối tượng cho mỗi mục tiêu, có các khóa cho mỗi thuộc tính tweening
  
      _này3 . _overwrite  =  ghi đè lên ;
  
      if  ( keyframes  ||  leger || _isFuncOrString  ( thời lượng ) || _isFuncOrString ( delay ) ) {    
        vars  =  _this3 . vars ;
        tl  =  _this3 . timeline  =  Dòng thời gian mới  ( {
          dữ liệu : "lồng nhau" ,
          defaults : mặc định  ||  { }
        } ) ;
        tl . giết ( ) ;
        tl . cha  =  _assertThisInitialized ( _this3 ) ;
  
        if  ( khung hình chính )  {
          _setDefaults ( tl . vars . mặc định ,  {
            dễ dàng : "không"
          } ) ;
  
          khung hình chính . forEach ( function  ( frame )  {
            trả lại  tl . to ( parsedTargets ,  frame ,  ">" ) ;
          } ) ;
        }  khác  {
          l  =  parsedTargets . chiều dài ;
          steregerFunc  = leng  keng ? phân phối ( leng keng ) : _emptyFunc ;
  
          if  ( _isObject ( leng keng ) )  {
            // người dùng có thể chuyển các lệnh gọi lại như onStart / onComplete vào đối tượng stiren. Những thứ này sẽ bùng nổ với từng tween cá nhân.
            for  ( p  in  leger )  {
              if  ( ~ _staggerTweenProps . indexOf ( p ) )  {
                StackgerVarsToMerge  ||  ( staggerVarsToMerge  =  { } ) ;
                StraygerVarsToMerge [ p ]  =  leng keng [ p ] ;
              }
            }
          }
  
          for  ( i  =  0 ;  i  <  l ;  i ++ )  {
            sao chép  =  { } ;
  
            for  ( p  in  vars )  {
              if  ( _staggerPropsToSkip . indexOf ( p )  <  0 )  {
                copy[p] = vars[p];
              }
            }
  
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
  
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
  
            if (!stagger && l === 1 && copy.delay) {
              // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
  
            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }
  
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
        }
  
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
      }
  
      if (overwrite === true) {
        _overwritingTween = _assertThisInitialized(_this3);
  
        _globalTimeline.killTweensOf(parsedTargets);
  
        _overwritingTween = 0;
      }
  
      parent && _postAddChecks(parent, _assertThisInitialized(_this3));
  
      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
  
        _this3.render(Math.max(0, -delay)); //in case delay is negative
  
      }
  
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
  
    var _proto3 = Tween.prototype;
  
    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;
  
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || this._startAt && this._zTime < 0 !== totalTime < 0) {
        //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
        time = tTime;
        timeline = this.timeline;
  
        if (this._repeat) {
          //adjust the time for repeats and yoyos
          cycleDuration = dur + this._rDelay;
          time  =  _round ( tTime  %  cycleDuration ) ;  // làm tròn để tránh lỗi dấu phẩy động. (4% 0,8 phải là 0 nhưng một số trình duyệt báo cáo là 0,79999999!)
  
          if  ( time  >  dur  ||  tDur  ===  tTime )  {
            // thời gian tDur === tTime dành cho các trường hợp cạnh trong đó khoảng thời gian có một số thập phân dài và nó có thể đến cuối nhưng thời gian được hiển thị là không hoàn toàn ở đó (hãy nhớ, tDur được làm tròn thành 4 số thập phân trong khi dur isn 't)
            thời gian  =  dur ;
          }
  
          lần lặp  =  ~ ~ ( tTime  /  cycleDuration ) ;
  
          if  ( lần lặp  & &  lần lặp  ===  tTime  /  cycleDuration )  {
            thời gian  =  dur ;
            phép lặp - ;
          }
  
          isYoyo  =  cái này . _yoyo  &&  lần lặp  &  1 ;
  
          if  ( isYoyo )  {
            yoyoEase  =  cái này . _yEase ;
            time  =  dur  -  thời gian ;
          }
  
           thịnh hành =  _animationCycle ( this . _tTime , cycleDuration ) ; 
  
          nếu  ( thời gian  === thời gian  && ! buộc && điều này . _initted  ) {    
            // có thể là trong phần repeatDelay. Không cần kết xuất và kích hoạt lệnh gọi lại.
            trả lại  cái này ;
          }
  
          if  ( lặp  ! ==  trước )  {
            dòng thời gian  &&  này . _yEase  &&  _propagateYoyoEase ( dòng thời gian ,  isYoyo ) ;  // chức năng repeatRefresh
  
            if  ( this . vars . repeatRefresh  &&  ! isYoyo  &&  ! this . _lock )  {
              cái này . _lock  =  force  =  1 ;  // buộc, ngược lại nếu lazy là true, _attemptInitTween () sẽ trả về và chúng ta sẽ nhảy ra ngoài và bị bắt bật lên mỗi lần đánh dấu.
  
              cái này . kết xuất ( _round ( lần lặp cycleDuration  *  ) , true ) . làm mất hiệu lực ( ) . _lock = 0 ;   
            }
          }
        }
  
        if  ( ! this . _initted )  {
          if  ( _attemptInitTween ( this ,  time ,  force ,  preferEvents ) )  {
            cái này . _t Thời gian  =  0 ;  // trong hàm tạo nếu ngayRender là true, chúng ta đặt _tTime thành -_tinyNum để đầu phát vượt qua điểm bắt đầu nhưng chúng ta không thể để _tTime là một số âm.
  
            trả lại  cái này ;
          }
  
          if  ( dur  ! ==  this . _dur )  {
            // trong khi khởi động, một plugin như InertiaPlugin có thể thay đổi thời lượng, vì vậy hãy chạy lại từ đầu để đảm bảo mọi thứ hiển thị như bình thường.
            trả lại  cái này . kết xuất ( tổng thời gian ,  kìm hãm ,  lực lượng ) ;
          }
        }
  
        cái này . _tTime  =  tTime ;
        cái này . _time  =  thời gian ;
  
        if  ( ! this . _act  &&  this . _ts )  {
          cái này . _act  =  1 ;  // miễn là nó không bị tạm dừng, hãy buộc nó hoạt động để nếu người dùng hiển thị độc lập với dòng thời gian chính, nó sẽ buộc phải hiển thị lại vào lần đánh dấu tiếp theo.
  
          cái này . _lazy  =  0 ;
        }
  
        cái này . ratio  =  ratio  =  ( yoyoEase  ||  this . _ease ) ( time  /  dur ) ;
  
        if  ( this . _from )  {
          cái này . ratio  =  ratio  =  1  -  tỷ lệ ;
        }
  
        thời gian  &&  ! thời gian &&  ! Suppevents && _callback ( this , "onStart" ) ;    
        pt  =  cái này . _pt ;
  
        trong khi  ( pt )  {
          pt . r ( tỷ số ,  pt . d ) ;
          pt  =  pt . _tiếp theo ;
        }
  
        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
  
        if (this._onUpdate && !suppressEvents) {
          if (totalTime < 0 && this._startAt) {
            this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
  
          }
  
          _callback(this, "onUpdate");
        }
  
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
  
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          if (totalTime < 0 && this._startAt && !this._onUpdate) {
            this._startAt.render(totalTime, true, force);
          }
  
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
  
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
  
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
  
      return this;
    };
  
    _proto3.targets = function targets() {
      return this._targets;
    };
  
    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };
  
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
  
      if (!targets && (!vars || vars === "all")) {
        this._lazy = 0;
  
        if (this.parent) {
          return _interrupt(this);
        }
      }
  
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweenng, interrupt.
  
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
  
        return this;
      }
  
      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;
  
      if  ( ( ! vars  ||  vars  ===  "all" )  &&  _arraysMatch ( parsedTargets ,  killTargets ) )  {
        return  _interrupt ( this ) ;
      }
  
      OverclockProps  =  this . _op  =  cái này . _op  ||  [ ] ;
  
      if  ( vars  ! ==  "all" )  {
        // để mọi người có thể chuyển vào danh sách các tên thuộc tính được phân tách bằng dấu phẩy
        if  ( _isString ( vars ) )  {
          p  =  { } ;
  
          _forEachName ( vars ,  function  ( name )  {
            return  p [ name ]  =  1 ;
          } ) ;
  
          vars  =  p ;
        }
  
        vars  =  _addAliasesToVars ( parsedTargets ,  vars ) ;
      }
  
      i  =  parsedTargets . chiều dài ;
  
      trong khi  ( tôi - )  {
        if  ( ~ killTargets . indexOf ( parsedTargets [ i ] ) )  {
          curLookup  =  propTweenLookup [ i ] ;
  
          if  ( vars  ===  "all" )  {
            OverclockProps [ i ]  =  vars ;
            props  =  curLookup ;
            curOverwriteProps  =  { } ;
          }  khác  {
            curOverwriteProps  = Over  OveredProps [ i ]  =  OverwriteProps [ i ]  ||  { } ;
            đạo cụ  =  vars ;
          }
  
          cho  ( p  trong  đạo cụ )  {
            pt  =  curLookup  &&  curLookup [ p ] ;
  
            nếu  ( pt )  {
              if  ( ! ( "kill"  trong  pt . d )  ||  pt . d . kill ( p )  ===  true )  {
                _removeLinkedListItem ( this ,  pt ,  "_pt" ) ;
              }
  
              xóa  curLookup [ p ] ;
            }
  
            if  ( curOverwriteProps  ! ==  "all" )  {
              curOverwriteProps [ p ]  =  1 ;
            }
          }
        }
      }
  
      if  ( this . _initted  &&  ! this . _pt  &&  firstPT )  {
        // nếu tất cả các thuộc tính tweening bị giết, hãy giết tween. Không có dòng này, nếu có một tween với nhiều mục tiêu và sau đó bạn killTweensOf () từng mục tiêu riêng lẻ, về mặt kỹ thuật tween sẽ vẫn hoạt động và kích hoạt onComplete của nó mặc dù không có thêm bất kỳ thuộc tính nào trên tweening.
        _interrupt ( cái này ) ;
      }
  
      trả lại  cái này ;
    } ;
  
    Giữa . to  =  function  to ( target ,  vars )  {
      trả về  Tween mới  ( đích , vars , đối số [ 2 ] ) ;  
    } ;
  
    Giữa . from  =  hàm  from ( target ,  vars )  {
      trả về  mới  Tween ( target ,  _parseVars ( đối số ,  1 ) ) ;
    } ;
  
    Giữa . delayCall  =  function  delayCall ( delay ,  callback ,  params ,  scope )  {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
  
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return new Tween(targets, _parseVars(arguments, 2));
    };
  
    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };
  
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
  
    return Tween;
  }(Animation);
  
  exports.TweenLite = exports.TweenMax = exports.Tween = Tween;
  
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
  // _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
  // 	Tween.prototype[name] = function() {
  // 		let tl = new Timeline();
  // 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
  // 	}
  // });
  //for backward compatibility. Leverage the timeline calls.
  
  
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);
  
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  /*
   * --------------------------------------------------------------------------------------
   * PROPTWEEN
   * --------------------------------------------------------------------------------------
   */
  
  
  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";
  
    if (!ratio && data.b) {
      //b = beginning string
      s = data.b;
    } else if (ratio === 1 && data.e) {
      //e = ending string
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
  
        pt = pt._next;
      }
  
      s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
  
    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
  
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;
  
    while (pt) {
      next = pt._next;
  
      if (pt.p === property) {
        pt.modifier(modifier, tween, target);
      }
  
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;
  
    while (pt) {
      next = pt._next;
  
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
  
      pt = next;
    }
  
    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
  
    while (pt) {
      next = pt._next;
      pt2 = first;
  
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
  
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
  
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
  
      pt = next;
    }
  
    parent._pt = first;
  }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
  
  
  exports._sortPropTweensByPriority = _sortPropTweensByPriority;
  exports._renderComplexString = _renderComplexString;
  exports._getSetter = _getSetter;
  
  var PropTween = /*#__PURE__*/function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      cái này . d  =  dữ liệu  ||  cái này ;
      cái này . set  =  setter  ||  _setterPlain ;
      cái này . pr  =  ưu tiên  ||  Số 0 ;
      cái này . _next  =  tiếp theo ;
  
      nếu  ( tiếp theo )  {
        tiếp theo . _prev  =  cái này ;
      }
    }
  
    var  _proto4  =  PropTween . nguyên mẫu ;
  
    _proto4 . modifier  =  chức năng  sửa đổi ( func ,  tween ,  target )  {
      cái này . mSet  =  cái này . mSet  ||  cái này . thiết lập ;  // trong trường hợp nó đã được đặt (một PropTween chỉ có thể có một bổ ngữ)
  
      cái này . set  =  _setterWithModifier ;
      cái này . m  =  func ;
      cái này . mt  =  mục tiêu ;  // mục tiêu bổ trợ
  
      cái này . tween  =  tween ;
    } ;
  
    trả về  PropTween ;
  } ( ) ;  // Tác vụ khởi tạo
  
  
  hàng xuất khẩu . PropTween  =  PropTween ;
  
  _forEachName ( _callbackNames  +  "cha, thời lượng, dễ dàng, trì hoãn, ghi đè, runBackwards, startAt, yoyo, ngay lập tức, lặp lại, lặp lại, dữ liệu, tạm dừng, đảo ngược, lười biếng, callbackScope, stringFilter, id, yoyoEase, leng keng, kế thừa, repeatRefresh, khung hình chính , autoRevert, scrollTrigger " ,  hàm  ( tên )  {
    return  _reservedProps [ name ]  =  1 ;
  } ) ;
  
  _ cầu vồng . TweenMax  =  _globals . TweenLite  =  Tween ;
  _ cầu vồng . TimelineLite  =  _globals . TimelineMax  =  Dòng thời gian ;
  _globalTimeline  =  Dòng thời gian mới  ( {
    sortChildren : false ,
    defaults : _defaults ,
    autoRemoveChildren : true ,
    id : "root" ,
    SmoothChildTiming : true
  } ) ;
  _config . stringFilter  =  _colorStringFilter ;
  / *
   * ------------------------------------------------- -------------------------------------
   * GSAP
   * ------------------------------------------------- -------------------------------------
   * /
  
  var  _gsap  =  {
    registerPlugin : function  registerPlugin ( )  {
      for  ( var  _len2  =  objects . length , args = new Array ( _len2 ) , _key2 = 0 ; _key2 < _len2 ; _key2 ++ ) {            
        args [ _key2 ]  =  đối số [ _key2 ] ;
      }
  
      args . forEach ( function  ( config )  {
        return  _createPlugin ( cấu hình ) ;
      } ) ;
    } ,
    timeline : dòng thời gian chức năng  ( vars ) { 
      trả về  Dòng thời gian mới  ( vars ) ;
    } ,
    getTweensOf : function  getTweensOf ( target ,  onlyActive )  {
      trả về  _globalTimeline . getTweensOf ( target ,  onlyActive ) ;
    } ,
    getProperty : function  getProperty ( target ,  property ,  unit ,  uncache )  {
      if  ( _isString ( target ) )  {
        // trong trường hợp văn bản bộ chọn hoặc một mảng được chuyển vào
        target  =  toArray ( target ) [ 0 ] ;
      }
  
      var  getter  =  _getCache ( target  ||  { } ) . nhận được ,
          định dạng  =  đơn vị ? _passThrough : _numericIfPossible ;
  
      if  ( unit  ===  "native" )  {
        đơn vị  =  "" ;
      }
  
      trở lại  ! mục tiêu ? mục tiêu :! tài sản ? hàm ( thuộc tính , đơn vị , hủy bộ nhớ cache ) {    
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
  
      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;
  
          while (i--) {
            setters[i](value);
          }
        };
      }
  
      target = target[0] || {};
  
      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          // in case it's an alias, like "rotate" for "rotation".
      setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
  
      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening : chức năng  isTweening ( mục tiêu )  {
      trả về  _globalTimeline . getTweensOf ( target ,  true ) . chiều dài  >  0 ;
    } ,
    defaults : chức năng  mặc định ( giá trị )  {
      if  ( giá trị  &&  giá trị . dễ dàng )  {
        giá trị . easy = _parseEase  ( giá trị . dễ dàng , _defaults . dễ dàng ) ;  
      }
  
      return  _mergeDeep ( _defaults ,  value  ||  { } ) ;
    } ,
    config : chức năng  config ( giá trị )  {
      return  _mergeDeep ( _config ,  value  ||  { } ) ;
    } ,
    registerEffect : hàm  registerEffect ( _ref )  {
      var  name  =  _ref . tên ,
          hiệu ứng  =  _ref . hiệu lực ,
          plugin  =  _ref . plugin ,
          mặc định  =  _ref . mặc định ,
          expandTimeline  =  _ref . kéo dài thời gian ;
      ( plugin  ||  "" ) . tách ( "," ) . forEach ( function  ( pluginName )  {
        trả về  pluginName  &&  ! _plugins [ pluginName ]  &&  ! _globals [ pluginName ]  &&  _warn ( tên  +  "hiệu ứng yêu cầu"  +  pluginName  +  "plugin." ) ;
      } ) ;
  
      _effects [ name ]  =  function  ( target ,  vars ,  tl )  {
        trả về  hiệu ứng ( toArray ( target ) ,  _setDefaults ( vars  ||  { } ,  defaults ) ,  tl ) ;
      } ;
  
      if  ( expandTimeline )  {
        Dòng thời gian . nguyên mẫu [ tên ]  =  hàm  ( mục tiêu ,  vars ,  vị trí )  {
          trả lại  cái này . add ( _effects [ name ] ( target ,  _isObject ( vars ) ? vars : ( position  =  vars )  &&  { } ,  this ) ,  position ) ;
        } ;
      }
    } ,
    registerEase : chức năng  registerEase ( tên ,  dễ dàng )  {
      _easeMap [ name ]  =  _parseEase ( dễ dàng ) ;
    } ,
    parseEase : function  parseEase ( easy , defaultEase ) {  
      trả về  đối số . độ dài ? _parseEase ( dễ dàng ,  defaultEase ) : _easeMap ;
    } ,
    getById : function  getById ( id )  {
      trả về  _globalTimeline . getById ( id ) ;
    } ,
    exportRoot : function  exportRoot ( vars ,  includeDelayedCalls )  {
      if  ( vars  ===  void  0 )  {
        vars  =  { } ;
      }
  
      var  tl  =  new  Timeline ( vars ) ,
          đứa trẻ ,
          tiếp theo ;
      tl . SmoothChildTiming  =  _isNotFalse ( vars . SmoothChildTiming ) ;
  
      _globalTimeline . loại bỏ ( tl ) ;
  
      tl . _dp  =  0 ;  // nếu không, nó sẽ được kích hoạt lại khi thêm con và được đưa lại vào danh sách liên kết của _globalTimeline (sau đó được thêm vào chính nó).
  
      tl . _time  =  tl . _tTime  =  _globalTimeline . _thời gian ;
      con  =  _globalTimeline . _thứ nhất ;
  
      trong khi  ( con )  {
        tiếp theo  =  con . _tiếp theo ;
  
        if  ( includeDelayedCalls  ||  ! ( ! child . _dur  &&  child  instanceof  Tween  &&  child . vars . onComplete  ===  child . _targets [ 0 ] ) )  {
          _addToTimeline ( tl ,  child ,  child . _start  -  child . _delay ) ;
        }
  
        con  =  tiếp theo ;
      }
  
      _addToTimeline ( _globalTimeline ,  tl ,  0 ) ;
  
      trả về  tl ;
    } ,
    utils : {
      quấn : bọc ,
      wrapYoyo : bọcYoyo ,
      phân phối : phân phối ,
      random : ngẫu nhiên ,
      snap : chụp nhanh ,
      normalize : bình thường hóa ,
      getUnit : getUnit ,
      kẹp : kẹp ,
      splitColor : splitColor ,
      toArray : toArray ,
      mapRange : mapRange ,
      pipe : ống ,
      thống nhất : hợp nhất ,
      interpolate : nội suy ,
      shuffle : xáo trộn
    } ,
    cài đặt : _install ,
    hiệu ứng : _effects ,
    mã : _ticker ,
    updateRoot : Dòng thời gian . updateRoot ,
    plugin : _plugins ,
    globalTimeline : _globalTimeline ,
    cốt lõi : {
      PropTween : PropTween ,
      hình cầu : _addGlobal ,
      Tween : Tween ,
      Dòng thời gian : Dòng thời gian ,
      Animation : Hoạt hình ,
      getCache : _getCache ,
      _removeLinkedListItem : _removeLinkedListItem
    }
  } ;
  
  _forEachName ( "to, from, fromTo, delayCall, set, killTweensOf" ,  function  ( name )  {
    return  _gsap [ name ]  =  Tween [ name ] ;
  } ) ;
  
  _ cái que . thêm ( Dòng thời gian . updateRoot ) ;
  
  _quickTween  =  _gsap . tới ( { } ,  {
    thời lượng : 0
  } ) ;  // ---- THÊM PLUGINS ------------------------------------------ --------------
  
  var  _getPluginPropTween  =  function  _getPluginPropTween ( plugin ,  prop )  {
    var  pt  =  plugin . _pt ;
  
    while  ( pt  &&  pt . p  ! ==  prop  &&  pt . op  ! ==  prop  &&  pt . fp  ! ==  prop )  {
      pt  =  pt . _tiếp theo ;
    }
  
    trả về  pt ;
  } ,
      _addModifiers  =  function  _addModifiers ( tween ,  modifier )  ​​{
    var  target  =  tween . _ mục tiêu ,
        p ,
        tôi ,
        pt ;
  
    for  ( p  trong  bổ ngữ )  {
      i  =  mục tiêu . chiều dài ;
  
      trong khi  ( tôi - )  {
        pt  =  tween . _ptLookup [ i ] [ p ] ;
  
        if  ( pt  &&  ( pt  =  pt . d ) )  {
          if  ( pt . _pt )  {
            // là một plugin
            pt  =  _getPluginPropTween ( pt ,  p ) ;
          }
  
          pt  &&  pt . bổ ngữ  &&  pt . modifier ( modifier [ p ] ,  tween ,  target [ i ] ,  p ) ;
        }
      }
    }
  } ,
      _buildModifierPlugin  =  function  _buildModifierPlugin ( tên ,  sửa đổi )  {
    trở lại  {
      name : tên ,
      rawVars : 1 ,
      // không xử lý trước các giá trị dựa trên hàm hoặc chuỗi "random ()".
      init : function  init ( target ,  vars ,  tween )  {
        tuổi mười bảy . _onInit  =  function  ( tween )  {
          var  temp ,  p ;
  
          if  ( _isString ( vars ) )  {
            tạm thời  =  { } ;
  
            _forEachName ( vars ,  function  ( name )  {
              trả về  nhiệt độ [ tên ]  =  1 ;
            } ) ;  // nếu người dùng chuyển danh sách tên thuộc tính được phân tách bằng dấu phẩy đến roundProps, như "x, y", chúng ta làm tròn thành số nguyên.
  
  
            vars  =  tạm thời ;
          }
  
          if  ( bổ ngữ )  {
            tạm thời  =  { } ;
  
            for  ( p  in  vars )  {
              temp [ p ]  =  modifier ( vars [ p ] ) ;
            }
  
            vars  =  tạm thời ;
          }
  
          _addModifiers ( tween ,  vars ) ;
        } ;
      }
    } ;
  } ;  // đăng ký các plugin cốt lõi
  
  
  var  gsap  =  _gsap . registerPlugin ( {
    tên : "attr" ,
    init : function  init ( target ,  vars ,  tween ,  index ,  target )  {
      var  p ,  pt ;
  
      for  ( p  in  vars )  {
        pt  =  cái này . add ( target ,  "setAttribute" ,  ( target . getAttribute ( p )  ||  0 )  +  "" ,  vars [ p ] ,  index ,  target ,  0 ,  0 ,  p ) ;
        pt  &&  ( pt . op  =  p ) ;  //this.add(target, "setAttribute", (target.getAttribute ((p trong target.dataset? (p = "data-" + p): p)) || 0) + "", vars [p] , chỉ mục, mục tiêu, 0, 0, p);
  
        cái này . _ đạo cụ . đẩy ( p ) ;
      }
    }
  } ,  {
    tên : "endArray" ,
    init : function  init ( target ,  value )  {
      var  i  =  giá trị . chiều dài ;
  
      trong khi  ( tôi - )  {
        cái này . add ( target ,  i ,  target [ i ]  ||  0 ,  value [ i ] ) ;
      }
    }
  } ,  _buildModifierPlugin ( "roundProps" ,  _roundModifier ) ,  _buildModifierPlugin ( "modifier" ) ,  _buildModifierPlugin ( "snap" ,  snap ) )  ||  _gsap ;  // để ngăn các plugin cốt lõi bị rớt do rung cây tích cực, chúng ta phải đưa chúng vào khai báo biến theo cách này.
  
  
  hàng xuất khẩu . default  =  xuất khẩu . gsap  =  gsap ;
  Giữa . phiên bản  =  Dòng thời gian . phiên bản  =  gsap . phiên bản  =  "3.3.1" ;
  _coreReady  =  1 ;
  
  if  ( _windowExists ( ) )  {
    _wake ( ) ;
  }
  
  var  Power0  =  _easeMap . Sức mạnh0 ,
      Power1  =  _easeMap . Power1 ,
      Power2  =  _easeMap . Power2 ,
      Power3  =  _easeMap . Power3 ,
      Power4  =  _easeMap . Power4 ,
      Linear  =  _easeMap . Tuyến tính ,
      Quad  =  _easeMap . Bốn ,
      Cubic  =  _easeMap . Khối ,
      Quart  =  _easeMap . Quart ,
      Quint  =  _easeMap . Quint ,
      Mạnh mẽ  =  _easeMap . Mạnh mẽ ,
      Co giãn  =  _easeMap . Co giãn ,
      Quay lại  =  _easeMap . Quay lại ,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;
  exports.Circ = Circ;
  exports.Expo = Expo;
  exports.Sine = Sine;
  exports.Bounce = Bounce;
  exports.SteppedEase = SteppedEase;
  exports.Back = Back;
  exports.Elastic = Elastic;
  exports.Strong = Strong;
  exports.Quint = Quint;
  exports.Quart = Quart;
  exports.Cubic = Cubic;
  exports.Quad = Quad;
  exports.Linear = Linear;
  exports.Power4 = Power4;
  exports.Power3 = Power3;
  exports.Power2 = Power2;
  exports.Power1 = Power1;
  exports.Power0 = Power0;
  },{}],"bp4Z":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkPrefix = exports._createElement = exports._getBBox = exports.default = exports.CSSPlugin = void 0;
  
  var _gsapCore = require("./gsap-core.js");
  
  /*!
   * CSSPlugin 3.3.1
   * https://greensock.com
   *
   * Copyright 2008-2020, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author : Jack Doyle, jack@greensock.com
  * /
  
  / * eslint-disable * /
  var  _win ,
      _doc ,
      _docElement ,
      _pluginInitted ,
      _tempDiv ,
      _tempDivStyler ,
      _recentSetterPlugin ,
      _windowExists  =  function  _windowExists ( )  {
    trả về  cửa sổ typeof  ! == "không xác định" ;  
  } ,
      _transformProps  =  { } ,
      _RAD2DEG  =  180  /  Toán học . PI ,
      _DEG2RAD  =  Toán học . PI  /  180 ,
      _atan2  =  Toán học . atan2 ,
      _bigNum  =  1e8 ,
      _capsExp  =  / ( [ AZ ] ) / g ,
      _horizontalExp  =  / (?: left | right | width | margin | padding | x ) / i ,
      _complexExp  =  / [ \ s , \ ( ] \ S / ,
      _propertyAliases  =  {
    autoAlpha : "độ mờ, khả năng hiển thị" ,
    quy mô : "scaleX, scaleY" ,
    alpha : "độ mờ"
  } ,
      _renderCSSProp  =  function  _renderCSSProp ( tỷ lệ ,  dữ liệu )  {
    trả về  dữ liệu . set ( data . t ,  data . p ,  Math . round ( ( data . s  +  data . c  *  ratio )  *  10000 )  /  10000  +  data . u ,  data ) ;
  } ,
      _renderPropWithEnd  =  function  _renderPropWithEnd ( tỷ lệ ,  dữ liệu )  {
    trả về  dữ liệu . set ( data . t ,  data . p ,  ratio  ===  1 ? data . e : Math . round ( ( data . s  +  data . c  *  ratio )  *  10000 )  /  10000  +  data . u ,  data ) ;
  } ,
      _renderCSSPropWithBeginning  =  function  _renderCSSPropWithBeginning ( tỷ lệ ,  dữ liệu )  {
    trả về  dữ liệu . set ( data . t ,  data . p ,  ratio ? Math . round ( ( data . s  +  data . c  *  ratio )  *  10000 )  /  10000  +  data . u : data . b ,  data ) ;
  } ,
      // nếu các đơn vị thay đổi, chúng ta cần một cách để hiển thị đơn vị / giá trị ban đầu khi tween quay trở lại hết mức ban đầu (tỷ lệ: 0)
  _renderRoundsCSSProp  =  function  _renderRoundsCSSProp ( tỷ lệ ,  dữ liệu )  {
    var  value  =  dữ liệu . s  +  dữ liệu . c  *  tỷ lệ ;
    dữ liệu . set ( data . t ,  data . p ,  ~ ~ ( value  +  ( value  <  0 ? - .5 : .5 ) )  +  data . u ,  data ) ;
  } ,
      _renderNonTweeningValue  =  function  _renderNonTweeningValue ( tỷ lệ ,  dữ liệu )  {
    trả về  dữ liệu . set ( data . t ,  data . p ,  ratio ? data . e : data . b ,  data ) ;
  } ,
      _renderNonTweeningValueOnlyAtEnd  =  function  _renderNonTweeningValueOnlyAtEnd ( tỷ lệ ,  dữ liệu )  {
    trả về  dữ liệu . set ( data . t ,  data . p ,  ratio  ! ==  1 ? data . b : data . e ,  data ) ;
  } ,
      _setterCSSStyle  =  function  _setterCSSStyle ( target ,  property ,  value )  {
     mục tiêu trở lại . style [ property ]  =  giá trị ;
  } ,
      _setterCSSProp  =  function  _setterCSSProp ( target ,  property ,  value )  {
     mục tiêu trở lại . phong cách . setProperty ( thuộc tính ,  giá trị ) ;
  } ,
      _setterTransform  =  function  _setterTransform ( đích , thuộc  tính ,  giá trị )  {
     mục tiêu trở lại . _gsap [ property ]  =  giá trị ;
  } ,
      _setterScale  =  function  _setterScale ( target ,  property ,  value )  {
     mục tiêu trở lại . _gsap . scaleX  =  mục tiêu . _gsap . scaleY  =  giá trị ;
  } ,
      _setterScaleWithRender  =  function  _setterScaleWithRender ( đích , thuộc  tính ,  giá trị ,  dữ liệu ,  tỷ lệ )  {
    var  cache  =  target . _gsap ;
    bộ nhớ đệm . scaleX  =  bộ nhớ cache . scaleY  =  giá trị ;
    bộ nhớ đệm . renderTransform ( tỷ lệ ,  bộ nhớ cache ) ;
  } ,
      _setterTransformWithRender  =  function  _setterTransformWithRender ( đích , thuộc  tính ,  giá trị ,  dữ liệu ,  tỷ lệ )  {
    var  cache  =  target . _gsap ;
    cache [ thuộc tính ]  =  giá trị ;
    bộ nhớ đệm . renderTransform ( tỷ lệ ,  bộ nhớ cache ) ;
  } ,
      _transformProp  =  "biến đổi" ,
      _transformOriginProp = _transformProp + "Origin",
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
  
    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;
  
    if (property in s && !preferPrefix) {
      return property;
    }
  
    property = property.charAt(0).toUpperCase() + property.substr(1);
  
    while (i-- && !(_prefixes[i] + property in s)) {}
  
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists() && window.document) {
      _win = window;
      _doc = _win.document;
      _docElement = _doc.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _checkPropPrefix(_transformOriginProp);
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
  
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;
  
    _docElement.appendChild(svg);
  
    svg.appendChild(this);
    this.style.display = "block";
  
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
  
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
  
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
  
    _docElement.removeChild(svg);
  
    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
  
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;
  
    try {
      bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
  
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
  
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      //reports if the element is an SVG on which getBBox() actually works
  _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;
  
      if (property in _transformProps) {
        property = _transformProp;
      }
  
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
          property = "-" + property;
        }
  
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
  
    plugin._props.push(property);
  
    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
  _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;
  
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
  
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
  
    if (toPercent && (_transformProps[property] || ~property.indexOf("adius"))) {
      //transforms and borderRadius are relative to the size of the element itself!
      return (0, _gsapCore._round)(curValue / (isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty]) * amount);
    }
  
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
  
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
  
    if (!parent || parent === _doc || !parent.appendChild) {
      parent = _doc.body;
    }
  
    cache = parent._gsap;
  
    if (cache && toPercent && cache.width && horizontal && cache.time === _gsapCore._ticker.time) {
      return (0, _gsapCore._round)(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
  
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
  
      if (horizontal && toPercent) {
        cache = (0, _gsapCore._getCache)(parent);
        cache.time = _gsapCore._ticker.time;
        cache.width = parent[measureProperty];
      }
    }
  
    return (0, _gsapCore._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
  
    if (!_pluginInitted) {
      _initCore();
    }
  
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
  
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
  
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
  
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCore._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
      }
    }
  
    return unit && !~(value + "").indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
      // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);
  
      if (s && s !== start) {
        prop = p;
        start = s;
      }
    }
  
    var pt = new _gsapCore.PropTween(this._pt, target.style, prop, 0, 1, _gsapCore._renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        relative,
        endValues;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
  
    end += "";
  
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
  
    a = [start, end];
    (0, _gsapCore._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
  
    start = a[0];
    end = a[1];
    startValues = start.match(_gsapCore._numWithUnitExp) || [];
    endValues = end.match(_gsapCore._numWithUnitExp) || [];
  
    if (endValues.length) {
      while (result = _gsapCore._numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
  
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
  
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
  
          if (relative) {
            endValue = endValue.substr(2);
          }
  
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _gsapCore._numWithUnitExp.lastIndex - endUnit.length;
  
          if (!endUnit) {
            //if something like "perspective:300" is passed in and we must add a unit to the end
            endUnit = endUnit || _gsapCore._config.units[prop] || startUnit;
  
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
  
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
  
  
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 ? Math.round : 0
          };
        }
      }
  
      pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
  
    if (_gsapCore._relExp.test(end)) {
      pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }
  
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
  
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";
  
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      //the user provided them in the wrong order, so flip them
      value = x;
      x = y;
      y = value;
    }
  
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;
  
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
  
        while (--i > -1) {
          prop = props[i];
  
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
  
          _removeProperty(target, prop);
        }
      }
  
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
  
        if (cache) {
          cache.svg && target.removeAttribute("transform");
  
          _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
  
  
          cache.uncache = 1;
        }
      }
    }
  },
      // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
  _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
  
        plugin._props.push(property);
  
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
        let _renderClassName = (ratio, data) => {
                data.css.render(ratio, data.css);
                if (!ratio || ratio === 1) {
                    let inline = data.rmv,
                        target = data.t,
                        p;
                    target.setAttribute("class", ratio ? data.e : data.b);
                    for (p in inline) {
                        _removeProperty(target, p);
                    }
                }
            },
            _getAllStyles = (target) => {
                let styles = {},
                    computed = getComputedStyle(target),
                    p;
                for (p in computed) {
                    if (isNaN(p) && p !== "cssText" && p !== "length") {
                        styles[p] = computed[p];
                    }
                }
                _setDefaults(styles, _parseTransform(target, 1));
                return styles;
            },
            startClassList = target.getAttribute("class"),
            style = target.style,
            cssText = style.cssText,
            cache = target._gsap,
            classPT = cache.classPT,
            inlineToRemoveAtEnd = {},
            data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
            changingVars = {},
            startVars = _getAllStyles(target),
            transformRelated = /(transform|perspective)/i,
            endVars, p;
        if (classPT) {
            classPT.r(1, classPT.d);
            _removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
        }
        target.setAttribute("class", data.e);
        endVars = _getAllStyles(target, true);
        target.setAttribute("class", startClassList);
        for (p in endVars) {
            if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
                changingVars[p] = endVars[p];
                if (!style[p] && style[p] !== "0") {
                    inlineToRemoveAtEnd[p] = 1;
                }
            }
        }
        cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
        if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
            style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
        }
        _parseTransform(target, true); //to clear the caching of transforms
        data.css = new gsap.plugins.css();
        data.css.init(target, changingVars, tween);
        plugin._props.push(...data.css._props);
        return 1;
    }
    */
  
  },
  
  /*
   * --------------------------------------------------------------------------------------
   * TRANSFORMS
   * --------------------------------------------------------------------------------------
   */
  _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
  
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsapCore._numExp).map(_gsapCore._round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, _gsapCore._getCache)(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;
  
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
  
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
      //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
  
      if (!parent || !_doc.body.contains(target)) {
        addedToDOM = 1; //flag
  
        nextSibling = target.nextSibling;
  
        _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
  
      }
  
      matrix = _getComputedTransformMatrixAsArray(target);
  
      if (temp) {
        style.display = temp;
      } else {
        _removeProperty(target, "display");
      }
  
      if (addedToDOM) {
        if (nextSibling) {
          parent.insertBefore(target, nextSibling);
        } else if (parent) {
          parent.appendChild(target);
        } else {
          _docElement.removeChild(target);
        }
      }
    }
  
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;
  
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
  
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
  
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
  
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
  
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
  
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
  
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
  
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new _gsapCore.GSCache(target);
  
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
  
    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
  
    if (cache.svg) {
      t1 = !cache.uncache && target.getAttribute("data-svg-origin");
  
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
  
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
  
    if (matrix !== _identity2DMatrix) {
      a = matrix[0]; //a11
  
      b = matrix[1]; //a21
  
      c = matrix[2]; //a31
  
      d = matrix[3]; //a41
  
      x = a12 = matrix[4];
      y = a22 = matrix[5]; //2D matrix
  
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
  
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));
  
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        } //3D matrix
  
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG; //rotationX
  
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        } //rotationY
  
  
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
  
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        } //rotationZ
  
  
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
  
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
  
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
  
        scaleX = (0, _gsapCore._round)(Math.sqrt(a * a + b * b + c * c));
        scaleY = (0, _gsapCore._round)(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
  
      if (cache.svg) {
        //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
  
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
  
    cache.x = ((cache.xPercent = x && Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0) ? 0 : x) + px;
    cache.y = ((cache.yPercent = y && Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0) ? 0 : y) + px;
    cache.z = z + px;
    cache.scaleX = (0, _gsapCore._round)(scaleX);
    cache.scaleY = (0, _gsapCore._round)(scaleY);
    cache.rotation = (0, _gsapCore._round)(rotation) + deg;
    cache.rotationX = (0, _gsapCore._round)(rotationX) + deg;
    cache.rotationY = (0, _gsapCore._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
  
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
  
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _gsapCore._config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      //for handling transformOrigin values, stripping out the 3rd dimension
  _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, _gsapCore.getUnit)(start);
    return (0, _gsapCore._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
  
    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
  
  
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;
  
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
  
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
  
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
  
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
  
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
  
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
  
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
  
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
  
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
  
    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;
  
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
  
    if (skewY) {
      //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
  
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
  
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
  
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
  
      a11 = (0, _gsapCore._round)(a11);
      a21 = (0, _gsapCore._round)(a21);
      a12 = (0, _gsapCore._round)(a12);
      a22 = (0, _gsapCore._round)(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
  
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
  
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = (0, _gsapCore._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = (0, _gsapCore._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
  
    if (xPercent || yPercent) {
      //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
      temp = target.getBBox();
      tx = (0, _gsapCore._round)(tx + xPercent / 100 * temp.width);
      ty = (0, _gsapCore._round)(ty + yPercent / 100 * temp.height);
    }
  
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
  
    if (forceCSS) {
      //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
      target.style[_transformProp] = temp;
    }
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360,
        isString = (0, _gsapCore._isString)(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = relative ? endNum * relative : endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;
  
    if (isString) {
      direction = endValue.split("_")[1];
  
      if (direction === "short") {
        change %= cap;
  
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
  
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
      }
    }
  
    plugin._pt = pt = new _gsapCore.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
  
    plugin._props.push(property);
  
    return pt;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var style = _tempDivStyler.style,
        startCache = target._gsap,
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;
    style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;"; //%-based translations will fail unless we set the width/height to match the original target (and padding/borders can affect it)
  
    style[_transformProp] = transforms;
  
    _doc.body.appendChild(_tempDivStyler);
  
    endCache = _parseTransform(_tempDivStyler, 1);
  
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
  
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
        startUnit = (0, _gsapCore.getUnit)(startValue);
        endUnit = (0, _gsapCore.getUnit)(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new _gsapCore.PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
  
        plugin._props.push(p);
      }
    }
  
    _doc.body.removeChild(_tempDivStyler);
  }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
  
  
  exports._getBBox = _getBBox;
  exports.checkPrefix = _checkPropPrefix;
  exports._createElement = _createElement;
  (0, _gsapCore._forEachName)("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });
  
    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;
  
      if (arguments.length < 4) {
        // getter, passed target, property, and unit (from _get())
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
  
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority;
  
      if (!_pluginInitted) {
        _initCore();
      }
  
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
  
        endValue = vars[p];
  
        if (_gsapCore._plugins[p] && (0, _gsapCore._checkPlugin)(p, vars, tween, index, target, targets)) {
          //plugins
          continue;
        }
  
        type = typeof endValue;
        specialProp = _specialProps[p];
  
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
  
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = (0, _gsapCore._replaceRandom)(endValue);
        }
  
        if (specialProp) {
          if (specialProp(this, target, p, endValue, tween)) {
            hasPriority = 1;
          }
        } else if (p.substr(0, 2) === "--") {
          //CSS variable
          this.add(style, "setProperty", getComputedStyle(target).getPropertyValue(p) + "", endValue + "", index, targets, 0, 0, p);
        } else {
          startValue = _get(target, p);
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
  
          if (relative) {
            endValue = endValue.substr(2);
          }
  
          endNum = parseFloat(endValue);
  
          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                startNum = 0;
              }
  
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
  
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
  
              if (~p.indexOf(",")) {
                p = p.split(",")[0];
              }
            }
          }
  
          isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
  
          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform || _parseTransform(target); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
  
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new _gsapCore.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
  
              transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
            }
  
            if (p === "scale") {
              this._pt = new _gsapCore.PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
  
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
  
                if (endUnit !== cache.zOrigin) {
                  _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                }
  
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
  
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
  
              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
  
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
  
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
  
              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }
  
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0); // protect against NaN
  
            endUnit = (endValue + "").substr((endNum + "").length) || (p in _gsapCore._config.units ? _gsapCore._config.units[p] : startUnit);
  
            if (startUnit !== endUnit) {
              startNum = _convertToUnit(target, p, startValue, endUnit);
            }
  
            this._pt = new _gsapCore.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, endUnit === "px" && vars.autoRound !== false && !isTransformRelated ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
  
            if (startUnit !== endUnit) {
              //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
              this.add(target, p, target[p], endValue, index, targets);
            } else {
              (0, _gsapCore._missingPlugin)(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }
  
          props.push(p);
        }
      }
  
      if (hasPriority) {
        (0, _gsapCore._sortPropTweensByPriority)(this);
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCore._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCore._getSetter)(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  exports.default = exports.CSSPlugin = CSSPlugin;
  _gsapCore.gsap.utils.checkPrefix = _checkPropPrefix;
  
  (function (positionAndScale, rotation, others, aliases) {
    var all = (0, _gsapCore._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });
    (0, _gsapCore._forEachName)(rotation, function (name) {
      _gsapCore._config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, _gsapCore._forEachName)(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  
  (0, _gsapCore._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _gsapCore._config.units[name] = "px";
  });
  
  _gsapCore.gsap.registerPlugin(CSSPlugin);
  },{"./gsap-core.js":"TNS6"}],"TpQl":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Power0", {
    enumerable: true,
    get: function () {
      return _gsapCore.Power0;
    }
  });
  Object.defineProperty(exports, "Power1", {
    enumerable: true,
    get: function () {
      return _gsapCore.Power1;
    }
  });
  Object.defineProperty(exports, "Power2", {
    enumerable: true,
    get: function () {
      return _gsapCore.Power2;
    }
  });
  Object.defineProperty(exports, "Power3", {
    enumerable: true,
    get: function () {
      return _gsapCore.Power3;
    }
  });
  Object.defineProperty(exports, "Power4", {
    enumerable: true,
    get: function () {
      return _gsapCore.Power4;
    }
  });
  Object.defineProperty(exports, "Linear", {
    enumerable: true,
    get: function () {
      return _gsapCore.Linear;
    }
  });
  Object.defineProperty(exports, "Quad", {
    enumerable: true,
    get: function () {
      return _gsapCore.Quad;
    }
  });
  Object.defineProperty(exports, "Cubic", {
    enumerable: true,
    get: function () {
      return _gsapCore.Cubic;
    }
  });
  Object.defineProperty(exports, "Quart", {
    enumerable: true,
    get: function () {
      return _gsapCore.Quart;
    }
  });
  Object.defineProperty(exports, "Quint", {
    enumerable: true,
    get: function () {
      return _gsapCore.Quint;
    }
  });
  Object.defineProperty(exports, "Strong", {
    enumerable: true,
    get: function () {
      return _gsapCore.Strong;
    }
  });
  Object.defineProperty(exports, "Elastic", {
    enumerable: true,
    get: function () {
      return _gsapCore.Elastic;
    }
  });
  Object.defineProperty(exports, "Back", {
    enumerable: true,
    get: function () {
      return _gsapCore.Back;
    }
  });
  Object.defineProperty(exports, "SteppedEase", {
    enumerable: true,
    get: function () {
      return _gsapCore.SteppedEase;
    }
  });
  Object.defineProperty(exports, "Bounce", {
    enumerable: true,
    get: function () {
      return _gsapCore.Bounce;
    }
  });
  Object.defineProperty(exports, "Sine", {
    enumerable: true,
    get: function () {
      return _gsapCore.Sine;
    }
  });
  Object.defineProperty(exports, "Expo", {
    enumerable: true,
    get: function () {
      return _gsapCore.Expo;
    }
  });
  Object.defineProperty(exports, "Circ", {
    enumerable: true,
    get: function () {
      return _gsapCore.Circ;
    }
  });
  Object.defineProperty(exports, "TweenLite", {
    enumerable: true,
    get: function () {
      return _gsapCore.TweenLite;
    }
  });
  Object.defineProperty(exports, "TimelineLite", {
    enumerable: true,
    get: function () {
      return _gsapCore.TimelineLite;
    }
  });
  Object.defineProperty(exports, "TimelineMax", {
    enumerable: true,
    get: function () {
      return _gsapCore.TimelineMax;
    }
  });
  Object.defineProperty(exports, "CSSPlugin", {
    enumerable: true,
    get: function () {
      return _CSSPlugin.CSSPlugin;
    }
  });
  exports.TweenMax = exports.default = exports.gsap = void 0;
  
  var _gsapCore = require("./gsap-core.js");
  
  var _CSSPlugin = require("./CSSPlugin.js");
  
  var gsapWithCSS = _gsapCore.gsap.registerPlugin(_CSSPlugin.CSSPlugin) || _gsapCore.gsap,
      // to protect from tree shaking
  TweenMaxWithCSS = gsapWithCSS.core.Tween;
  
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = exports.gsap = gsapWithCSS;
  },{"./gsap-core.js":"TNS6","./CSSPlugin.js":"bp4Z"}],"BQvw":[function(require,module,exports) {
  var define;
  var global = arguments[3];
  /**
   * EvEmitter v1.1.0
   * Lil' event emitter
   * MIT License
   */
  
  /* jshint unused: true, undef: true, strict: true */
  
  ( function( global, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
      // AMD - RequireJS
      define( factory );
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS - Browserify, Webpack
      module.exports = factory();
    } else {
      // Browser globals
      global.EvEmitter = factory();
    }
  
  }( typeof window != 'undefined' ? window : this, function() {
  
  "use strict";
  
  function EvEmitter() {}
  
  var proto = EvEmitter.prototype;
  
  proto.on = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // set events hash
    var events = this._events = this._events || {};
    // set listeners array
    var listeners = events[ eventName ] = events[ eventName ] || [];
    // only add once
    if ( listeners.indexOf( listener ) == -1 ) {
      listeners.push( listener );
    }
  
    return this;
  };
  
  proto.once = function( eventName, listener ) {
    if ( !eventName || !listener ) {
      return;
    }
    // add event
    this.on( eventName, listener );
    // set once flag
    // set onceEvents hash
    var onceEvents = this._onceEvents = this._onceEvents || {};
    // set onceListeners object
    var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
    // set flag
    onceListeners[ listener ] = true;
  
    return this;
  };
  
  proto.off = function( eventName, listener ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    var index = listeners.indexOf( listener );
    if ( index != -1 ) {
      listeners.splice( index, 1 );
    }
  
    return this;
  };
  
  proto.emitEvent = function( eventName, args ) {
    var listeners = this._events && this._events[ eventName ];
    if ( !listeners || !listeners.length ) {
      return;
    }
    // copy over to avoid interference if .off() in listener
    listeners = listeners.slice(0);
    args = args || [];
    // once stuff
    var onceListeners = this._onceEvents && this._onceEvents[ eventName ];
  
    for ( var i=0; i < listeners.length; i++ ) {
      var listener = listeners[i]
      var isOnce = onceListeners && onceListeners[ listener ];
      if ( isOnce ) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off( eventName, listener );
        // unset once flag
        delete onceListeners[ listener ];
      }
      // trigger listener
      listener.apply( this, args );
    }
  
    return this;
  };
  
  proto.allOff = function() {
    delete this._events;
    delete this._onceEvents;
  };
  
  return EvEmitter;
  
  }));
  
  },{}],"lc7f":[function(require,module,exports) {
  var define;
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  
  ( function( window, factory ) { 'use strict';
    // universal module definition
  
    /*global define: false, module: false, require: false */
  
    if ( typeof define == 'function' && define.amd ) {
      // AMD
      define( [
        'ev-emitter/ev-emitter'
      ], function( EvEmitter ) {
        return factory( window, EvEmitter );
      });
    } else if ( typeof module == 'object' && module.exports ) {
      // CommonJS
      module.exports = factory(
        window,
        require('ev-emitter')
      );
    } else {
      // browser global
      window.imagesLoaded = factory(
        window,
        window.EvEmitter
      );
    }
  
  })( typeof window !== 'undefined' ? window : this,
  
  // --------------------------  factory -------------------------- //
  
  function factory( window, EvEmitter ) {
  
  'use strict';
  
  var $ = window.jQuery;
  var console = window.console;
  
  // -------------------------- helpers -------------------------- //
  
  // extend objects
  function extend( a, b ) {
    for ( var prop in b ) {
      a[ prop ] = b[ prop ];
    }
    return a;
  }
  
  var arraySlice = Array.prototype.slice;
  
  // turn element or nodeList into an array
  function makeArray( obj ) {
    if ( Array.isArray( obj ) ) {
      // use object if already an array
      return obj;
    }
  
    var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    if ( isArrayLike ) {
      // convert nodeList to array
      return arraySlice.call( obj );
    }
  
    // array of single index
    return [ obj ];
  }
  
  // -------------------------- imagesLoaded -------------------------- //
  
  /**
   * @param {Array, Element, NodeList, String} elem
   * @param {Object or Function} options - if function, use as callback
   * @param {Function} onAlways - callback function
   */
  function ImagesLoaded( elem, options, onAlways ) {
    // coerce ImagesLoaded() without new, to be new ImagesLoaded()
    if ( !( this instanceof ImagesLoaded ) ) {
      return new ImagesLoaded( elem, options, onAlways );
    }
    // use elem as selector string
    var queryElem = elem;
    if ( typeof elem == 'string' ) {
      queryElem = document.querySelectorAll( elem );
    }
    // bail if bad element
    if ( !queryElem ) {
      console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
      return;
    }
  
    this.elements = makeArray( queryElem );
    this.options = extend( {}, this.options );
    // shift arguments if no options set
    if ( typeof options == 'function' ) {
      onAlways = options;
    } else {
      extend( this.options, options );
    }
  
    if ( onAlways ) {
      this.on( 'always', onAlways );
    }
  
    this.getImages();
  
    if ( $ ) {
      // add jQuery Deferred object
      this.jqDeferred = new $.Deferred();
    }
  
    // HACK check async to allow time to bind listeners
    setTimeout( this.check.bind( this ) );
  }
  
  ImagesLoaded.prototype = Object.create( EvEmitter.prototype );
  
  ImagesLoaded.prototype.options = {};
  
  ImagesLoaded.prototype.getImages = function() {
    this.images = [];
  
    // filter & find items if we have an item selector
    this.elements.forEach( this.addElementImages, this );
  };
  
  /**
   * @param {Node} element
   */
  ImagesLoaded.prototype.addElementImages = function( elem ) {
    // filter siblings
    if ( elem.nodeName == 'IMG' ) {
      this.addImage( elem );
    }
    // get background image on element
    if ( this.options.background === true ) {
      this.addElementBackgroundImages( elem );
    }
  
    // find children
    // no non-element nodes, #143
    var nodeType = elem.nodeType;
    if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
      return;
    }
    var childImgs = elem.querySelectorAll('img');
    // concat childElems to filterFound array
    for ( var i=0; i < childImgs.length; i++ ) {
      var img = childImgs[i];
      this.addImage( img );
    }
  
    // get child background images
    if ( typeof this.options.background == 'string' ) {
      var children = elem.querySelectorAll( this.options.background );
      for ( i=0; i < children.length; i++ ) {
        var child = children[i];
        this.addElementBackgroundImages( child );
      }
    }
  };
  
  var elementNodeTypes = {
    1: true,
    9: true,
    11: true
  };
  
  ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
    var style = getComputedStyle( elem );
    if ( !style ) {
      // Firefox returns null if in a hidden iframe https://bugzil.la/548397
      return;
    }
    // get url inside url("...")
    var reURL = /url\((['"])?(.*?)\1\)/gi;
    var matches = reURL.exec( style.backgroundImage );
    while ( matches !== null ) {
      var url = matches && matches[2];
      if ( url ) {
        this.addBackground( url, elem );
      }
      matches = reURL.exec( style.backgroundImage );
    }
  };
  
  /**
   * @param {Image} img
   */
  ImagesLoaded.prototype.addImage = function( img ) {
    var loadingImage = new LoadingImage( img );
    this.images.push( loadingImage );
  };
  
  ImagesLoaded.prototype.addBackground = function( url, elem ) {
    var background = new Background( url, elem );
    this.images.push( background );
  };
  
  ImagesLoaded.prototype.check = function() {
    var _this = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    // complete if no images
    if ( !this.images.length ) {
      this.complete();
      return;
    }
  
    function onProgress( image, elem, message ) {
      // HACK - Chrome triggers event before object properties have changed. #83
      setTimeout( function() {
        _this.progress( image, elem, message );
      });
    }
  
    this.images.forEach( function( loadingImage ) {
      loadingImage.once( 'progress', onProgress );
      loadingImage.check();
    });
  };
  
  ImagesLoaded.prototype.progress = function( image, elem, message ) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
    // progress event
    this.emitEvent( 'progress', [ this, image, elem ] );
    if ( this.jqDeferred && this.jqDeferred.notify ) {
      this.jqDeferred.notify( this, image );
    }
    // check if completed
    if ( this.progressedCount == this.images.length ) {
      this.complete();
    }
  
    if ( this.options.debug && console ) {
      console.log( 'progress: ' + message, image, elem );
    }
  };
  
  ImagesLoaded.prototype.complete = function() {
    var eventName = this.hasAnyBroken ? 'fail' : 'done';
    this.isComplete = true;
    this.emitEvent( eventName, [ this ] );
    this.emitEvent( 'always', [ this ] );
    if ( this.jqDeferred ) {
      var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
      this.jqDeferred[ jqMethod ]( this );
    }
  };
  
  // --------------------------  -------------------------- //
  
  function LoadingImage( img ) {
    this.img = img;
  }
  
  LoadingImage.prototype = Object.create( EvEmitter.prototype );
  
  LoadingImage.prototype.check = function() {
    // If complete is true and browser supports natural sizes,
    // try to check for image status manually.
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      // report based on naturalWidth
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      return;
    }
  
    // If none of the checks above matched, simulate loading on detached element.
    this.proxyImage = new Image();
    this.proxyImage.addEventListener( 'load', this );
    this.proxyImage.addEventListener( 'error', this );
    // bind to image as well for Firefox. #191
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.proxyImage.src = this.img.src;
  };
  
  LoadingImage.prototype.getIsImageComplete = function() {
    // check for non-zero, non-undefined naturalWidth
    // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
    return this.img.complete && this.img.naturalWidth;
  };
  
  LoadingImage.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.img, message ] );
  };
  
  // ----- events ----- //
  
  // trigger specified handler for event type
  LoadingImage.prototype.handleEvent = function( event ) {
    var method = 'on' + event.type;
    if ( this[ method ] ) {
      this[ method ]( event );
    }
  };
  
  LoadingImage.prototype.onload = function() {
    this.confirm( true, 'onload' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.onerror = function() {
    this.confirm( false, 'onerror' );
    this.unbindEvents();
  };
  
  LoadingImage.prototype.unbindEvents = function() {
    this.proxyImage.removeEventListener( 'load', this );
    this.proxyImage.removeEventListener( 'error', this );
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  // -------------------------- Background -------------------------- //
  
  function Background( url, element ) {
    this.url = url;
    this.element = element;
    this.img = new Image();
  }
  
  // inherit LoadingImage prototype
  Background.prototype = Object.create( LoadingImage.prototype );
  
  Background.prototype.check = function() {
    this.img.addEventListener( 'load', this );
    this.img.addEventListener( 'error', this );
    this.img.src = this.url;
    // check if image is already complete
    var isComplete = this.getIsImageComplete();
    if ( isComplete ) {
      this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
      this.unbindEvents();
    }
  };
  
  Background.prototype.unbindEvents = function() {
    this.img.removeEventListener( 'load', this );
    this.img.removeEventListener( 'error', this );
  };
  
  Background.prototype.confirm = function( isLoaded, message ) {
    this.isLoaded = isLoaded;
    this.emitEvent( 'progress', [ this, this.element, message ] );
  };
  
  // -------------------------- jQuery -------------------------- //
  
  ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
    jQuery = jQuery || window.jQuery;
    if ( !jQuery ) {
      return;
    }
    // set local variable
    $ = jQuery;
    // $().imagesLoaded()
    $.fn.imagesLoaded = function( options, callback ) {
      var instance = new ImagesLoaded( this, options, callback );
      return instance.jqDeferred.promise( $(this) );
    };
  };
  // try making plugin
  ImagesLoaded.makeJQueryPlugin();
  
  // --------------------------  -------------------------- //
  
  return ImagesLoaded;
  
  });
  
  },{"ev-emitter":"BQvw"}],"MgTz":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.preloadImages = exports.getMousePos = exports.getRandomNumber = exports.calcWinsize = exports.lerp = exports.map = void 0;
  
  var imagesLoaded = require('imagesloaded'); // Map number x from range [a, b] to [c, d]
  
  
  var map = function map(x, a, b, c, d) {
    return (x - a) * (d - c) / (b - a) + c;
  }; // Linear interpolation
  
  
  exports.map = map;
  
  var lerp = function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  };
  
  exports.lerp = lerp;
  
  var calcWinsize = function calcWinsize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
  
  exports.calcWinsize = calcWinsize;
  
  var getRandomNumber = function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }; // Gets the mouse position
  
  
  exports.getRandomNumber = getRandomNumber;
  
  var getMousePos = function getMousePos(e) {
    var posx = 0;
    var posy = 0;
    if (!e) e = window.event;
  
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
  
    return {
      x: posx,
      y: posy
    };
  }; // Preload images
  
  
  exports.getMousePos = getMousePos;
  
  var preloadImages = function preloadImages(selector) {
    return new Promise(function (resolve, reject) {
      imagesLoaded(document.querySelectorAll(selector), resolve);
    });
  };
  
  exports.preloadImages = preloadImages;
  },{"imagesloaded":"lc7f"}],"LMRJ":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _gsap = require("gsap");
  
  var _utils = require("./utils");
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  // Track the mouse position
  var mouse = {
    x: 0,
    y: 0
  };
  window.addEventListener('mousemove', function (ev) {
    return mouse = (0, _utils.getMousePos)(ev);
  });
  
  var Cursor = /*#__PURE__*/function () {
    function Cursor(el) {
      var _this = this;
  
      _classCallCheck(this, Cursor);
  
      this.DOM = {
        el: el
      };
      this.DOM.el.style.opacity = 0;
      this.bounds = this.DOM.el.getBoundingClientRect();
      this.renderedStyles = {
        tx: {
          previous: 0,
          current: 0,
          amt: 0.2
        },
        ty: {
          previous: 0,
          current: 0,
          amt: 0.2
        }
      };
  
      this.onMouseMoveEv = function () {
        _this.renderedStyles.tx.previous = _this.renderedStyles.tx.current = mouse.x - _this.bounds.width / 2;
        _this.renderedStyles.ty.previous = _this.renderedStyles.ty.previous = mouse.y - _this.bounds.height / 2;
  
        _gsap.gsap.to(_this.DOM.el, {
          duration: 0.9,
          ease: 'Power3.easeOut',
          opacity: 1
        });
  
        requestAnimationFrame(function () {
          return _this.render();
        });
        window.removeEventListener('mousemove', _this.onMouseMoveEv);
      };
  
      window.addEventListener('mousemove', this.onMouseMoveEv);
    }
  
    _createClass(Cursor, [{
      key: "render",
      value: function render() {
        var _this2 = this;
  
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;
  
        for (var key in this.renderedStyles) {
          this.renderedStyles[key].previous = (0, _utils.lerp)(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }
  
        this.DOM.el.style.transform = "translateX(".concat(this.renderedStyles['tx'].previous, "px) translateY(").concat(this.renderedStyles['ty'].previous, "px)");
        requestAnimationFrame(function () {
          return _this2.render();
        });
      }
    }]);
  
    return Cursor;
  }();
  
  exports.default = Cursor;
  },{"gsap":"TpQl","./utils":"MgTz"}],"toX6":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _gsap = require("gsap");
  
  var _utils = require("../utils");
  
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }
  
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
  
  // Calculate the viewport size
  var winsize = (0, _utils.calcWinsize)();
  window.addEventListener('resize', function () {
    return winsize = (0, _utils.calcWinsize)();
  }); // Track the mouse position
  
  var mousepos = {
    x: winsize.width / 2,
    y: winsize.height / 2
  };
  window.addEventListener('mousemove', function (ev) {
    return mousepos = (0, _utils.getMousePos)(ev);
  });
  
  var GridItem = /*#__PURE__*/function () {
    function GridItem(el) {
      _classCallCheck(this, GridItem);
  
      this.DOM = {
        el: el
      };
      this.move();
    } // Move the items when moving the cursor
  
  
    _createClass(GridItem, [{
      key: "move",
      value: function move() {
        var _this = this;
  
        // amounts to move in each axis
        var translationVals = {
          tx: 0,
          ty: 0
        }; // get random start and end movement boundaries
  
        var xstart = (0, _utils.getRandomNumber)(15, 60);
        var ystart = (0, _utils.getRandomNumber)(15, 60); // infinite loop
  
        var render = function render() {
          // Calculate the amount to move.
          // Using linear interpolation to smooth things out. 
          // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
          translationVals.tx = (0, _utils.lerp)(translationVals.tx, (0, _utils.map)(mousepos.x, 0, winsize.width, -xstart, xstart), 0.07);
          translationVals.ty = (0, _utils.lerp)(translationVals.ty, (0, _utils.map)(mousepos.y, 0, winsize.height, -ystart, ystart), 0.07);
  
          _gsap.gsap.set(_this.DOM.el, {
            x: translationVals.tx,
            y: translationVals.ty
          });
  
          requestAnimationFrame(render);
        };
  
        requestAnimationFrame(render);
      }
    }]);
  
    return GridItem;
  }();
  
  var Grid = /*#__PURE__*/function () {
    function Grid(el) {
      var _this2 = this;
  
      _classCallCheck(this, Grid);
  
      this.DOM = {
        el: el
      };
      this.gridItems = [];
      this.items = _toConsumableArray(this.DOM.el.querySelectorAll('.grid__item'));
      this.items.forEach(function (item) {
        return _this2.gridItems.push(new GridItem(item));
      });
      this.showItems();
    } // Initial animation to scale up and fade in the items
  
  
    _createClass(Grid, [{
      key: "showItems",
      value: function showItems() {
        _gsap.gsap.timeline().set(this.items, {
          scale: 0.7,
          opacity: 0
        }, 0).to(this.items, {
          duration: 2,
          ease: 'Expo.easeOut',
          scale: 1,
          stagger: {
            amount: 0.6,
            grid: 'auto',
            from: 'center'
          }
        }, 0).to(this.items, {
          duration: 3,
          ease: 'Power1.easeOut',
          opacity: 0.8,
          stagger: {
            amount: 0.6,
            grid: 'auto',
            from: 'center'
          }
        }, 0);
      }
    }]);
  
    return Grid;
  }();
  
  exports.default = Grid;
  },{"gsap":"TpQl","../utils":"MgTz"}],"C3Xv":[function(require,module,exports) {
  "use strict";
  
  var _cursor = _interopRequireDefault(require("../cursor"));
  
  var _grid = _interopRequireDefault(require("./grid"));
  
  var _utils = require("../utils");
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Preload  images
  (0, _utils.preloadImages)('.grid__item-img, .bigimg').then(function () {
    // Remove loader (loading class)
    document.body.classList.remove('loading'); // Initialize grid
  
    var grid = new _grid.default(document.querySelector('.grid'));
    });
  var cursor = new _cursor.default(document.querySelector('.cursor'));
  },{"../cursor":"LMRJ","./grid":"toX6","../utils":"MgTz"}]},{},["C3Xv"], null)
