require "bundler/gem_tasks"
require "rspec/core/rake_task"

namespace :spec do
  RSpec::Core::RakeTask.new(:unit) do |t|`
      t.pattern = 'spec/*_spec.rb'
  end
end

task default: ['spec:unit']
