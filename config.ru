use Rack::Static,

    :urls => ["/img", "/js", "/css", "/partials"],
    :root => "."

run lambda { |env|
  [
      200,
      {
         # 'Content-Type'  => 'text/html', 'text/javascript'
          'Cache-Control' => '., max-age=86400'
      },
      File.open('index.html', File::RDONLY)
  ]
}