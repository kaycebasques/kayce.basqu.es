if not test -d venv; python3 -m venv venv; end
. venv/bin/activate.fish
python3 -m pip install -r requirements.txt
if test -d _build; rm -rf _build; end
set SRC_DIR .
set OUT_DIR ./_build
sphinx-build -M html $SRC_DIR $OUT_DIR --fail-on-warning
deactivate
